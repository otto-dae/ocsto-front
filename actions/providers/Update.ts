"use server";
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHelper";
import { revalidateTag } from "next/cache";

export default async function UpdateProvider(providerId: string, formData: FormData) {
    let provider:any = {}
    for (const key of formData.keys()){ //wtf
        provider[key] = formData.get(key);
    }

    const response = await fetch (`${API_URL}/providers`,{
        method: "PATCH",
        body: JSON.stringify(provider),
        headers: {
            ...AuthHeaders(),
            'content-type': 'application/json'
        },
        next:{
            tags:["dashboard:providers"]
        }
    });
    if(response.status === 200) revalidateTag("dashboard:providers")
}
