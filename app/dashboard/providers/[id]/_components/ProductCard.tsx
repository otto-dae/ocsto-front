import { Product } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProductCard({product} : {product : Product}){
    return(
        <Card className="max-w-[350px]">
            <CardHeader>{product.productName}</CardHeader>
            <Divider/>
            <CardBody>
                <p>Nombre producto: <b>{product.productName}</b></p>
                <p>Precio producto: <b>{product.price}</b></p>
            </CardBody>
        </Card>
    )
}