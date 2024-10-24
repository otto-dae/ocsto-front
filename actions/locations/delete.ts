"user server";

import { API_URL, TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies, headers } from "next/headers";
import { useRouter } from "next/navigation";

export default async function DeleteLocation(formData: FormData){

    const storeToDelete = formData.get("deleteValue");
    const token = cookies().get(TOKEN_NAME)?.value
    axios.delete(`${API_URL}/locations/${storeToDelete}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

    

}