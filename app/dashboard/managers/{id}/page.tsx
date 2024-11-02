import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHelper";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import ManagerCard2 from "./_components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";

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
            <DeleteManagerButton managerId={data.managerId}/>
        </div>
    )
}