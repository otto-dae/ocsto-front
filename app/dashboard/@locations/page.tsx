import { API_URL } from "@/constants";
import { Location } from "c:/Users/Koto/ocsto-front/entities"
import SelectLocation from "./_components/SelectLocation";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { AuthHeaders } from "@/helpers/authHeaders";
import UpdateLocation from "./_components/UpdateLocation";
import FormUpdateLocation from "./_components/FormUpdateLocation";
import LocationCard from "./_components/LocationCard";

const LocationsPage = async ({searchParams,}: {searchParams: {[key: string]: string | string[] | undefined };}) => {

    const response = await fetch(
        `${API_URL}/locations`,
        {
        headers:{
            ... AuthHeaders()
        },
        next:{
            tags:["dashboard:locations"]
        }
    },
);

    let data: Location[] = await response.json();
    data = [    
    {
        locationId: 0,
        locationName: "Ninguna",
        locationLatLng: [0,0],
        locationAddress: "No existe"
    },    
        ...data,
    ]


    return (
        <div className="w-7/12">
          <div className="w-full flex flex-col items-center h-[90vh] bg-red-50">
            <div className="w-1/2 my-10">
              <SelectLocation locations={data} store={searchParams.store} />
            </div>
            <div className="w-8/12">
              <LocationCard store={searchParams.store} />
            </div>
            <div className="w-6/12">
            <FormNewLocation store={searchParams.store}/>
            </div>
            <div className="flex flex-row flex-grow-0 gap-10  items-center">
            <DeleteLocationButton store={searchParams.store} />
            <UpdateLocation store={searchParams.store}>
              <FormUpdateLocation store={searchParams.store}/>
            </UpdateLocation>
            </div>
          </div>
        </div>
      );
}
export default LocationsPage;