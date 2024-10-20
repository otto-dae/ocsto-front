import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Input } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";
import SelectManager from "./selectManager";

 export default async function FormNewLocation(){

    const token = cookies().get(TOKEN_NAME)?.value
    const {data} = await axios.get<Location>(`${API_URL}/managers`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return (
        <form action={createLocation}>
            <Input label="Store Name" name="locatioName" />
            <Input label="Store Address" name="locationAddress" />
            <Input label="Store latitud" name="locationLat" />
            <Input label="Store longitud" name="locationLng" />
            <SelectManager managers={data}/>
            <button>upload</button>
        </form>
    )
 }