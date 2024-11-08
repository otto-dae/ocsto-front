"use server"

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHelper";
import { revalidatePath, revalidateTag } from "next/cache";

export default async function DeleteProduct(productId:string, formData: FormData) {
    let product:any = {}
    for (const key of formData.keys()){ //wtf
        product[key] = formData.get(key);
    }

    const response = await fetch (`${API_URL}/products/${productId}`,{
        method: "DELETE",
        headers: {
            ...AuthHeaders(),
            'content-type': 'application/json'
        }
    })

    if(response.status === 200) revalidateTag("dashboard:products")
}