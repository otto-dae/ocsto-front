import DeleteProvider from "@/actions/providers/delete";
import DeleteProviderBody from "./DeleteProviderBody";
import { Button } from "@nextui-org/react";

export default function DeleteProviderButton({providerId}: {providerId: string}){

    const dleteProviderById = DeleteProvider.bind(null, providerId)
    return(
        <form action={dleteProviderById} className="flex">
            <Button type="submit" color="danger">
            Confirmar
            </Button>
        </form>
    )
}