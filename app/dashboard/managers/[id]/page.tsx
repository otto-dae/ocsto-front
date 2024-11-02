import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHelper";
import ManagerCard2 from "./_components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";
import FormUpdateManager from "./_components/FormUpdateManager";
import UpdateManager from "./_components/UpdateManager";

export default async function ManagerPage({
params,
}:{
    params:{
        id:string
    };
}){
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers:{
            ...AuthHeaders()
        },
        next:{
            tags:[`dashboard:managers:${params.id}`, `dashboard:managers`]
        }
    })
    const data = await response.json()
   
    return(
        <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
            <ManagerCard2 manager={data}/>
            <div className="bg-white shadowm-medium rounded-md px-10 py-2 flex flex-row">
            <UpdateManager>
                <FormUpdateManager manager={data}></FormUpdateManager>
            </UpdateManager>
            <DeleteManagerButton managerId={data.managerId}/>

            </div>
        </div>
    )
}