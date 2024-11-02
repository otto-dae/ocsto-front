import UpdateProvider from "@/actions/providers/Update";
import { Provider } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import DeleteProviderBody from "./DeleteProviderBody";
import DeleteProviderButton from "./DeleteProviderButton";

export default function FormUpdateProvider({provider}: {provider : Provider}){
    const {providerId} = provider;
    const updateProviderId = UpdateProvider.bind(null, providerId)
   

    return (
        <>
        <h1 className="text-xl px-2">Actualizar proveedor</h1>

        <form action={updateProviderId} className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200 rounded-md px-10 py-10 mr-20 items-center justify-center">
        <Input className="max-w-[250px]" defaultValue={provider.providerName} placeholder="Nombre" label="Nombre proveedor" name="providerName"/>
        <Input className="max-w-[250px]" defaultValue={provider.providerEmail} placeholder="Email" label="Email proveedor" name="providerEmail"/>
        <Input className="max-w-[250px]" defaultValue={provider.providerPhoneNumber} placeholder="Numero telefono" label="PhoneNumber proveedor" name="providerPhoneNumber"/>
        <Button type="submit">Actualizar provider</Button>
        <DeleteProviderBody>
            <h1>Estas de seguro de womp womp {provider.providerName}?</h1>
            <DeleteProviderButton providerId={providerId}/>
        </DeleteProviderBody>
        </form></>

    )
}