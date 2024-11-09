import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHelper";
import { Button, Input } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";
import CreateProduct from "@/actions/products/create";

const ProductsPage = async () => {

    const responseProviders = await fetch(`${API_URL}/providers`,{
        headers:{
            ...AuthHeaders()
        }
    });

    const providers = await responseProviders.json();
    return (
        <form action={CreateProduct} className=" px-10 justify-center pt-10 gap=6">
        <div className="flex flex-col px-10">
        <h1 className="text-2xl font-bold">Crear Producto</h1>
            <Input label="Nombre" name="productName"/>
            <Input label="Precio" endContent={<LuDollarSign size="20"/>} name="productPrice"/>
            <Input label="Num. de sellos" name="countSeal"/>

            <SelectProvider providers={providers} />
       
            <Button color="primary" type="submit">
                confirmar
            </Button>
        </div>
        </form>
    );
};

export default ProductsPage;