import {API_URL} from "@/constants";
import {Employee} from "@/entities";
import {AuthHeaders} from "@/helpers/authHeaders";
import {Card, CardBody, CardHeader, Divider} from "@nextui-org/react";
import Link from "next/link";

export default async function EmployeeLocation ({store} : {store: string | string[] | undefined}){

    if (!store) return "No hay empleados";

    const response = await fetch(`${API_URL}/employees/location/${store}`, {
        method: "GET",
        headers: {
          ...AuthHeaders()
        },
        next: {
          tags: ["dashboard:locations:employeees"]
        }
      });

    const data: Employee[] = await response.json();
    return(
        data?.map((employee: Employee) => {
            const fullName = employee.employeeName + " " + employee.employeeLastName
              return (
              <Link href={{pathname: `/dashboard/employees/${employee.employeeId}`}}>
              <Card className="mx-10 my-10">
                <CardHeader>
                  <p className="w-full">Nombre: <b>{fullName}</b></p>
                </CardHeader>
                <Divider/>
                  <CardBody>
                    <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
                    <p className="w-full">Teléfono: <b>{employee.employeePhoneNumber}</b></p>
                </CardBody>
              </Card>
              </Link>
    )}))
    
}