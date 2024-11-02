'use server';

import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import { AuthHeaders } from "@/helpers/authHelper";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function updateLocation(store:string,  formData: FormData){
 
    let location: any = {};
    let locationLatLng = [0, 0]
    for (const key of formData.keys()){ //wtf
        const value = formData.get(key);

        if(value){
            if(key === "locationLat"){
                locationLatLng[0] =+ value;
            }
            else if(key === "locationLng"){
                locationLatLng[1] =+value;
            }
            else{
                location[key] = formData.get(key);
            }
        }
    }
    location.locationLatLng = locationLatLng;
    const response =  await fetch(`${API_URL}/locations/${store}`,{
        
        body : JSON.stringify(location),
        
        method: "PATCH",
        headers: {
            'content-type': 'application/json',
            ...AuthHeaders()
                }
    })

    const data: Location = await response.json();
    if(response.status === 201) {
        revalidateTag("dashboard:locations")
        revalidateTag(`dashboard:locations:${store}`)
        redirect(`/dashboard?store=${data.locationId}`)
    }   

}