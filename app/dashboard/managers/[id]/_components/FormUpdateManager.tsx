import UpdateManger from "@/actions/managers/update"
import { Manager } from "@/entities"
import { Button, Input } from "@nextui-org/react"
import SelectStoreManager from "./SelectStoreManger"
import { API_URL } from "@/constants"
import { AuthHeaders } from "@/helpers/authHelper"

export default async function FormUpdateManager({manager}: {manager: Manager}){
    const updateMangerId = UpdateManger.bind(null, manager.managerId)
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers:{
            ...AuthHeaders()
        }
    });
    const stores = await responseStores.json()
    return(
        <form action={updateMangerId} className="rounded-md flex flex-col flex-grow-0 gap-2">
            <h1 className="text-2x1 text-white font-semibold text-center">Actualizar manager</h1>
            <Input isRequired label="Nombre completo" defaultValue={manager.managerFullName} placeholder="Nombre" name="managerFullName"/>
            <Input isRequired label="Email manager" defaultValue={manager.mangaerEmail} placeholder="Email" name="managerEmail"/>
            <Input isRequired label="Numero telefonico manager" defaultValue={manager.managerPhoneNumber} placeholder="Num. Tel." name="managerPhoneNumber"/>
            <Input isRequired label="Salario manager" defaultValue={String(manager.managerFullSalary)} placeholder="Salario" name="managerFullSalary"/>

        <SelectStoreManager stores={stores} defaultStore={manager?.location?.locationId}/>
        <Button color="primary" type="submit">Actualizar</Button>
        </form>
    )
}