import { API_URL } from "@/constants";
import { Input } from "@nextui-org/react";
import SelectManager from "./selectManager";
import { AuthHeaders } from "@/helpers/authHelper";
import { Location, Manager } from "@/entities";
import UpdateLocation from "./UpdateLocation";
import { updateLocation } from "@/actions/locations/update";

 export default async function FormUpdateLocation({store}: {store: string| string[] | undefined}){

    if(!store|| store === undefined || typeof store === "object") return null;
    const updateWithStoreId = updateLocation.bind(null, store);
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
    let foundLocation = dataLocation.find((location) => {
        location.locationId === +store
    })
    let foundManager = dataManager.find((manager)=>{
        manager.managerId === foundLocation?.manager?.managerId
    })



    return (
        <form action={updateWithStoreId} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full">
            <h1 className="text-xl text-white text-center"></h1>
                <Input required={true} defaultValue={foundLocation?.locationName} label="Store Name" name="locatioName" />
                <Input required={true} defaultValue={foundLocation?.locationAddress} label="Store Address" name="locationAddress" />
                <Input required={true} defaultValue={foundLocation?.locationLatLng[0].toString()} label="Store latitud" name="locationLat" />
                <Input required={true} defaultValue={foundLocation?.locationLatLng[1].toString()} label="Store longitud" name="locationLng" />
            <SelectManager defaultManager={foundManager?.managerId} managers={dataManager} locations={dataLocation}/>

            <button type="submit">upload</button>
        </form>
    )
 }