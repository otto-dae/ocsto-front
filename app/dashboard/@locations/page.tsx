import { TOKEN_NAME } from "@/constants";
import { Location } from "c:/Users/Koto/ocsto-front/entities"
import axios from "axios";
import { cookies } from "next/headers";
import SelectLocation from "./_components/SelectLocation";

const LocationsPage = async ()=> {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value
    const {data} = await axios.get<Location[]>("http:/127.0.0.1:4000/locations",{
        headers:{
            Authorization: `Bearer ${token})`,        
        },

    },)

    return <div className="w-5/12">

        <div className="w-full h-90vh flex flex-col items-center">
            <div className="w-1/2 my-10">

            </div>
        <SelectLocation locations={data}/>

        </div>

    </div>
}
export default LocationsPage;