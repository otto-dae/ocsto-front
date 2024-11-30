import updateManager from "@/actions/managers/update";
import { Manager } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import SelectStore from "./SelectStore";
export default async function FormUpdateManager({
  manager,
}: {
  manager: Manager;
}) {
  const updateManagerWithId = updateManager.bind(null, manager.managerId);
  const responseStores = await fetch(`${API_URL}/locations`, {
    headers: {
      ...AuthHeaders(),
    },
  });
  const stores = await responseStores.json();
  return (
    <form action={updateManagerWithId} className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2">
      <h1 className="text-2xl text-white font-semibold text-center"> Actualizar Manager </h1>
      <Input
        required={true}
        isRequired
        label="Nombre completo"
        defaultValue={manager.managerFullName}
        placeholder="Marco Aurelio"
        name="managerFullName"
      />
      <Input
        required={true}
        isRequired
        label="Correo Electrónico"
        defaultValue={manager.managerEmail}
        placeholder="manager@ocso.com"
        name="managerEmail"
      />
      <Input
        required={true}
        isRequired
        label="Salario"
        defaultValue={String(manager.managerSalary)}
        placeholder="12000"
        name="managerSalary"
      />
      <Input
        required={true}
        isRequired
        label="Número de teléfono"
        defaultValue={manager.managerPhoneNumber}
        placeholder="4421333617"
        name="managerPhoneNumber"
      />
      <SelectStore
        stores={stores}
        defaultStore={manager?.location?.locationId}
      />
      <Button color="primary" type="submit">
        Actualizar
      </Button>
    </form>
  );
}