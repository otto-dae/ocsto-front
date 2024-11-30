import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard({provider}: {provider: Provider}){

    return (
        <Card className="w-full min-w-[650px] max-w-[350px]">
            <CardHeader>{provider.providerName}</CardHeader>
            <Divider/>
            <CardBody>
                <p>Email:</p>
                <b>{provider.providerEmail}</b>
                <p>Numero telefonico:</p>
                <b>{provider.providerPhoneNumber}</b>
                {
                    provider?.products?.length !==0 ?(
                        <>
                            <p>Tiene </p>
                            <b>{provider?.products?.length} producto {provider.products.length >1 ? "s" : ""}</b>
                        </>
                    ) : <p>No tiene productos</p>
                }
            </CardBody>
        </Card>
    )
}