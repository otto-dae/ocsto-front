"use server"

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function updateManger(managerId: string, formData: FormData) {
    let manager:any = {}
    for (const key of formData.keys()){ //wtf
        manager[key] = formData.get(key);
    }
    manager.managerFullSalary = +manager.managerFullSalary
    manager.location =  +manager.location
    if(!manager?.location) delete manager?.location

    const response = await fetch (`${API_URL}/managers/${managerId}`,{
        method: "PATCH",
        body: JSON.stringify(manager),
        headers: {
            ...AuthHeaders(),
            'content-type': "application/json"
        },
    })

    if(response.status === 200) {
        revalidateTag("dashboard:managers")
        revalidateTag(`dashboard:managers:${managerId}`);
        redirect("/dashboard/managers")
    }
}