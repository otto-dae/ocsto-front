"use server"

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHelper";
import { revalidatePath, revalidateTag } from "next/cache";

export default async function CreateManager(formData: FormData) {
    let manager:any = {}
    for (const key of formData.keys()){ //wtf
        manager[key] = formData.get(key);
    }

    const response = await fetch (`${API_URL}/managers`,{
        method: "POST",
        body: JSON.stringify(manager),
        headers: {
            ...AuthHeaders()
        }
    })

    if(response.status === 201) revalidateTag("dashboard:managers")
}