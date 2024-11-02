import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard({provider}: {provider: Provider}){

    return (
        <Card>
            <CardHeader>{provider.providerName}</CardHeader>
            <Divider/>
            <CardBody>
                <p>Email:</p>
                <b>{provider.providerEmail}</b>
                <p>Numero telefonico:</p>
                <b>{provider.providerPhoneNumber}</b>
                {
                    provider.products ?(
                        <>
                            <p>Tiene </p>
                            <b>{provider.products.length}</b>
                        </>
                    ) : <p>No tiene productos</p>
                }
            </CardBody>
        </Card>
    )
}