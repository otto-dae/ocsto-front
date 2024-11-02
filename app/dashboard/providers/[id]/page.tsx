import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHelper";
import ProviderCard from "./_components/ProviderCard";
import { Product, Provider } from "@/entities";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";
import FormUpdateProvider from "./_components/FormUpdateProvider";

export default async function ProviderPage({params} : {params: {id: string}}){

    const provider: Provider= await (await fetch(`${API_URL}/providers/${params.id}`,{
        headers:{
            ... AuthHeaders()
        },
        next:{
            tags:[`dashboard:providers:${params.id}`]
        }
    })).json()
    return(
        <div className="flex flex-col px-10 gap-10 h-[90vh] pt-10">
            <div className="flex flex-row items-center">
            <ProviderCard provider={provider}/>
            <FormUpdateProvider provider={provider}/>
            </div>

            <div className="h-1 bg-orange-900 w-[85vw]"/>
            <div className="flex flex-wrap gap-10">            
            {
                provider.products.map((product: Product) =>{
                    return(
                        <Link href={{pathname:`/dahsboard/products/${product.productId}`}}>
                          <ProductCard product={product} key={product.productId}/>
                        </Link>
                )})}
            </div>
        </div>
    )
}