import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHelper";
import ProductCard from "../_components/ProducCard";
import { Product, Provider } from "@/entities";
import UpdateProduct from "./_components/UpdateProduct";
import DeleteProduct from "./_components/DeleteProduct";

export default async function ProductPAge({
    params,}: {
        params:{
            id:string;
        };
    }){            

        const responseProvider = await fetch(`${API_URL}/providers`,{
            headers:
            {
                ... AuthHeaders()
            }
        });

        const providers: Provider[] = await responseProvider.json()


        const responseProduct = await fetch(`${API_URL}/prodcuts/${params.id}`,{
            headers:
            {
                ... AuthHeaders()
            },
            next:{
                tags:[`dashboard:products:${params.id}`]
            }
        });

        const product: Product = await responseProduct.json()

        return( 

            <div className="w-full">
                <div>
                    <h1 className="w-ful font-bold text-center py-2">{product.productName}</h1>
                    <h2 className="text-center">Precio: {product.price}</h2>
                    <h2 className="text-center">Sellos: {product.countSeal}</h2>
                </div>
                <UpdateProduct product={product} providers={providers}/>
                <div className="pl-10">
                    <DeleteProduct productId={product.productId}/>
                </div>


            </div>

        )
    }