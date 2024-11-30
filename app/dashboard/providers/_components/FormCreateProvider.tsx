import CreateProvider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateProvider(){
    return(
        <form action={CreateProvider} className="flex flex-col">
        <h1 className="text-2xl text-white">Crear proveedor</h1>
        <Input placeholder="Nombre" label="Nombre proveedor" name="providerName"/>
        <Input placeholder="Email" label="Email proveedor" name="providerEmail"/>
        <Input placeholder="Numero telefono" label="PhoneNumber proveedor" name="providerPhoneNumber"/>
        <Button type="submit"> Crear provider </Button>
        </form>
    )
}