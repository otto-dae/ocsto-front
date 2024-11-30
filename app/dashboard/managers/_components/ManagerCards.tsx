import { API_URL } from "@/constants";
import { Employee, Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Card, CardHeader } from "@nextui-org/react";
import Link from "next/link";

export default async function ManagerCards(){
    const response = await fetch(`${API_URL}/managers`, {
        
        method: "GET",
        headers:{
            ...AuthHeaders()
        },
        next: {
            tags: ["dashboard:managers"]
        }
        
    });

    const data: Manager[] = await response.json();


    return data?.map((manager: Manager)=>{
            return (
                <Link href={{pathname : `/dashboard/managers/${manager.managerId}`}}>
                <Card className="mx-10">
          <p className="w-full"> Nombre: <b> {manager.managerFullName}</b></p>
         <CardHeader>
             <p className="w-full"> Mail: <b> {manager.managerEmail}</b></p>
             <p className="w-full"> Phone: <b> {manager.managerPhoneNumber}</b></p>


         </CardHeader>
     </Card> 
     </Link>
         )
    })   
}