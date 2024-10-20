import { API_URL } from "@/constants";
import { Employee, Location } from "@/entities";
import axios from "axios";
import { headers } from "next/headers";

export default async function EmployeeLocation ({store} : {store: string}){

    const token = cookies(.get(TOke))
    const {data} = await axios.get<Employee[]>(`${API_URL}/employees/${store}}`,{
        auth:true,{
            headers:{
                authoriza
            }
        }
    })
    if(!data) return null{
        data.map(employee)=>{
            return<div>
                empolyee.employeeName
            </div>
        }
    }
}