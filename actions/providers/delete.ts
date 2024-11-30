"use server"

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteProvider(providerId: string, formData: FormData) {

    const response = await fetch (`${API_URL}/managers/${providerId}`,{
        method: "DELETE",
        headers: {
            ...AuthHeaders()
        }
    })

    if (response.status === 200) {
        revalidateTag("dashboard:providers")
        redirect("/dashboard/providers")
    }
}