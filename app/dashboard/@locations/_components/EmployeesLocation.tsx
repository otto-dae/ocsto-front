import {API_URL} from "@/constants";
import {Employee} from "@/entities";
import {AuthHeaders} from "@/helpers/authHelper";
import {Card, CardHeader} from "@nextui-org/react";

export default async function EmployeeLocation ({store} : {store: string | string[] | undefined}){

    const response = await fetch(`${API_URL}/employees/${store}`, {
        
        method: "GET",
        headers:{
            ...AuthHeaders()
        },
        next: {
            tags: ["dashboard:locations", "dashboard:locations:employees"]
        }
        
    });

    const data: Employee[] = await response.json();

    return  data?.map((employee: Employee)=>{
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