import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import { Input } from "@nextui-org/react";
import SelectManager from "./selectManager";
import { AuthHeaders } from "@/helpers/authHelper";
import { Location, Manager } from "@/entities";

 export default async function FormNewLocation({store}: {store: string| string[] | undefined}){

    if(store) return null
    const responseManagers = await fetch(`${API_URL}/managers`,{
        headers:{
            ...AuthHeaders()
        },
        next:{
            tags: ["dashboard:managers"]
        }
    })
    const dataManager: Manager[] = await responseManagers.json();
    const responseLocations = await fetch(`${API_URL}/locations`,{
        headers:{
            ...AuthHeaders()
        },
        next:{
            tags: ["dashboard:locations"]
        }
    })
    const dataLocation: Location[] = await responseLocations.json();



    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full">
            <h1 className="text-xl text-white text-center"></h1>
            <Input label="Store Name" name="locatioName" />
            <Input label="Store Address" name="locationAddress" />
            <Input label="Store latitud" name="locationLat" />
            <Input label="Store longitud" name="locationLng" />
            <SelectManager managers={dataManager} locations={dataLocation}/>
            <button type="submit">upload</button>
        </form>
    )
 }