import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "c:/Users/Koto/ocsto-front/entities"
import axios from "axios";
import { cookies } from "next/headers";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/locationCard";
import FormNewLocation from "./_components/FormNewLocation";

const LocationsPage = async ({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }})=> {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value
    let {data} = await axios.get<Location[]>
    (`${API_URL}/locations`,
        
        {
        headers:{
            Authorization: `Bearer ${token})`,        
        },

    },)

    data.push()
    
    data = [    {
        locationId: 0,
        locationName: "No name",
        locationLatLng: [0,0],
        locationAddress: "No address"},
        ... data
    

    ]


    return <div className="w-7/12">

        <div className="w-full h-90vh flex flex-col items-center">
            <div className="w-1/2 my-10">
            <SelectLocation locations={data} store={searchParams?.store}/>
            </div>
            <div className="w-3/12">
                <LocationCard store={searchParams.store}/>
            </div>
        </div>
        <FormNewLocation/>
    </div>
}
export default LocationsPage;