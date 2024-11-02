"user server";

import { API_URL} from "@/constants";
import { AuthHeaders } from "@/helpers/authHelper";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeleteLocation(formData: FormData){

    const storeToDelete = formData.get("deleteValue"); 
    fetch(`${API_URL}/locations/${storeToDelete}`,{

        method:"DELETE",
        headers:{
             ... AuthHeaders(),
        }
    })

    revalidateTag("dashboard;locations");
    redirect("/dashboard");
}