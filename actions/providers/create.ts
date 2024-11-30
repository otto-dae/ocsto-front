"use server"

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createProvider(formData: FormData) {
    let provider:any = {}
    for (const key of formData.keys()){ //wtf
        provider[key] = formData.get(key);
    }

    const response = await fetch (`${API_URL}/providers`,{
        method: "POST",
        body: JSON.stringify(provider),
        headers: {
            ...AuthHeaders(),
            'content-type': 'application/json'
        },
    })

    if(response.status === 201) revalidateTag("dashboard:providers")
}