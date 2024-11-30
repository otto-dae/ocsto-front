import { Button, Input } from "@nextui-org/react";
import { API_URL } from "@/constants";
import SelectLocations from "./SelectLocation";
import { AuthHeaders } from "@/helpers/authHeaders";
import createEmployee from "@/actions/employees/create";
export default async function FormCreateEmployee() {
  const responseLocations = await fetch(`${API_URL}/locations`, {
    headers: {
      ...AuthHeaders()
    }
  })
  const locations = await responseLocations.json();
  return (
    <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
    <Input isRequired={true} label="Nombre" name="employeeName" placeholder="Marco"/>
    <Input isRequired={true} label="Apellidos" name="employeeLastName" placeholder="Aurelio"/>
    <Input isRequired={true} label="Correo electrónico" name="employeeEmail" placeholder="marco@marco.com"/>
    <Input isRequired={true} label="Num. de Teléfono" name="employeePhoneNumber" placeholder="444XXXXX"/>
    <Input type="file" name="employeePhoto"/>
    <SelectLocations stores={locations} />
    <Button type="submit" color="primary" >
      Crear empleado
    </Button>
    </form>
  )
}