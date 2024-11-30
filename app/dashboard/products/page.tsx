import createProduct from "@/actions/products/create";
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Input, Button } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";
const ProductsPage = async () => {
  const responseProivders = await fetch(`${API_URL}/providers`, {
    headers: {
      ...AuthHeaders(),
    },
  });
  const providers = await responseProivders.json();
  return (
    <form className="px-10 justify-center pt-10" action={createProduct}>
      <div className="flex flex-col p-10 rounded-md gap-6 bg-orange-600">
      <h1 className="text-2xl text-white font-bold"> Crear Producto </h1>
      <Input label="Nombre" name="productName" />
      <Input label="Precio" endContent={<LuDollarSign size="20" />} name="price"/>
      <Input label="Num. de Sellos" name="countSeal" />
      <SelectProvider providers={providers} />
      <Button color="primary" type="submit">
        Crear Producto
      </Button>
      </div>
    </form>
  );
};
export default ProductsPage;