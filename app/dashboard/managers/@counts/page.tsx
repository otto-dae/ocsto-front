import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHelper";
import { Card } from "@nextui-org/react";

export default async function CountPage(){
    const response = await fetch(`${API_URL}/managers`,{
        headers:{
            ...AuthHeaders()
        },
        next:{
            tags:["dashboard:managers"]
        }
    })

    const managers: Manager[] = await response.json()
    const countNostore = managers.filter((manager: Manager) => !manager.location).length
    let max = 0;
    let salary = 0;
    managers.forEach((manager: Manager) =>{
        if(manager.managerFullSalary > max) max = manager.managerFullSalary
        salary += manager.managerFullSalary
    })
    return(
        <Card className="w-fit px-2 py-4 text-center">
            <h1>Hay {managers.length} manager{managers.length > 1 ? "S" : ""}</h1>
            <h1> Hay {countNostore} sin tienda</h1>
            <h1>El salario maximo es {max}</h1>
            <h1>El salario promedio es {(salary/managers.length).toFixed(2)}</h1>

        </Card>
    )
}

