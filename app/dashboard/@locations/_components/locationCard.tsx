import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import { AuthHeaders } from "@/helpers/authHelper";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

import Link from "next/link";

export default async function  LocationCard({store}: {store: string | string[] | undefined}){

    if(!store) return null;

    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers:{
            ... AuthHeaders()
        },
        next:{
            tags: ["dashborad:locations" , `dashboard:locations:${store}`]
        }
    }) 

    const data: Location = await response.json();
    return (

        <Card>
            <CardHeader>
                <b className="w-full">{data.locationName}</b>
            </CardHeader>
        <Divider/>
        <CardBody>
            <p className="w-full"> Manager: <Link href={{pathname: `/dashboard/managers/${data.manager.managerId}`}}> <b>{data.manager?.managerFullName}</b></Link></p>
            <p className="w-full">
                Direccion: <b>{data.locationAddress}</b>
            </p>
        </CardBody>
        </Card>
  
    )
}