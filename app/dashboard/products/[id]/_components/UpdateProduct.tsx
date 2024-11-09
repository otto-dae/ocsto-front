import UpdateProvider from "@/actions/providers/Update";
import { Product, Provider } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import SelectProvider from "../../_components/SelectProvider";
import DeleteProduct from "./DeleteProduct";

export default function UpdateProduct({product, providers}: {product:Product, providers:Provider[]}){
    
    const {productId} = product
    const UpdateProductById = UpdateProvider.bind(null, productId)

    return(
        <form action={UpdateProductById} className="p-10 flex flex-col gap-4">
            <Input name="productName" label="Nombre" defaultValue={product.productName}/>
            <Input name="countSeal" label="Cantidad de sellos" defaultValue={String(product.countSeal)}/>
            <Input name="price" label="Precio producto" defaultValue={String(product.price)}/>
            <SelectProvider providers={providers} defaultProvider={product.provider.providerId}/>
            <Button type="submit" color="primary">Subir cambios</Button>
        </form>
    )
}