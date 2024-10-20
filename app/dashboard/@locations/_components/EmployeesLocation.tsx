import { API_URL, TOKEN_NAME } from "@/constants";
import { Employee, Location } from "@/entities";
import { Card, CardHeader } from "@nextui-org/react";
import axios from "axios";
import { cookies, headers } from "next/headers";

export default async function EmployeeLocation ({store} : {store: string | string[] | undefined}){

    const token = cookies().get(TOKEN_NAME)?.value
    const {data} = await axios.get<Employee[]>(`${API_URL}/employees/${store}`, {
        headers:{
            Authorization:  `Bearer ${token}`
        }
    });

    return  data.map((employee)=>{
        const fullName = employee.employeeName + " " + employee.employeeLastName;
            return <Card className="mx-10">
                 <p className="w-full"> Nombre: <b> {fullName}</b></p>
                <CardHeader>
                    <p className="w-full"> Mail: <b> {employee.employeeEmail}</b></p>
                    <p className="w-full"> Phone: <b> {employee.employeePhoneNumber}</b></p>


                </CardHeader>
            </Card>
        })
    
}