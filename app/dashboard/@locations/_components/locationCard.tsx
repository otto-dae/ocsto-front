import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

import Link from "next/link";

export default async function  LocationCard({store}: {store: string | string[] | undefined}){

    if(!store) return null;

    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers:{
            ... AuthHeaders()
        },
        next:{
            tags: ["dashboard:locations", `dashboard:locations:${store}`]
        }
    }) 

        //For the love of god I was not able to make the google maps work


    const data: Location = await response.json();
    return (

        <Card>
        <CardHeader>
          <b className="w-full text-2xl">{data.locationName}</b>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col w-full items-center">
          <p className="w-full"> Manager:{" "}<Link href={{ pathname: `/dashboard/managers/${data.manager?.managerId}` }}><b className="underline">{data.manager?.managerFullName}</b></Link></p>
          <p className="w-full">
              Dirección: <b>{data.locationAddress}</b>
          </p>
        </CardBody>
      </Card>
    )
}