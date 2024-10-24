import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Input } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";
import SelectManager from "./selectManager";

 export default async function FormNewLocation({store}: {store: string| string[] | undefined}){

    if(store) return null
    const token = cookies().get(TOKEN_NAME)?.value
    const responseManagers = await axios.get(`${API_URL}/managers`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocations = await axios.get(`${API_URL}/locations`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full">
            <h1 className="text-xl text-white text-center"></h1>
            <Input label="Store Name" name="locatioName" />
            <Input label="Store Address" name="locationAddress" />
            <Input label="Store latitud" name="locationLat" />
            <Input label="Store longitud" name="locationLng" />
            <SelectManager managers={responseManagers.data} locations={responseLocations.data}/>
            <button type="submit">upload</button>
        </form>
    )
 }