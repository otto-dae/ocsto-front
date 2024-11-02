"use server"

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHelper";
import { revalidatePath, revalidateTag } from "next/cache";

export default async function UpdateManger(managerId: string, formData: FormData) {
    let manager:any = {}
    for (const key of formData.keys()){ //wtf
        manager[key] = formData.get(key);
    }

    const response = await fetch (`${API_URL}/managers/${managerId}`,{
        method: "PATCH",
        body: JSON.stringify(manager),
        headers: {
            ...AuthHeaders()
        }
    })

    if(response.status === 200) {
        revalidateTag("dashboard:managers")
        revalidateTag(`dashboard:managers:${managerId}`)

    }
}