"user server";

import { API_URL} from "@/constants";
import { AuthHeaders } from "@/helpers/authHelper";

export default async function DeleteLocation(formData: FormData){

    const storeToDelete = formData.get("deleteValue"); 
    fetch(`${API_URL}/locations/${storeToDelete}`,{

        method:"DELETE",
        headers:{
             ... AuthHeaders(),
        }
    })

    

}