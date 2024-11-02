import { API_URL } from "@/constants"
import { Product } from "@/entities";
import { AuthHeaders } from "@/helpers/authHelper"
import FilteredCards from "./_components/FilteredCards";

const ProductsPage = async () => {
    
    const response = await fetch(`${API_URL}/products`,{
        headers:{
            ...AuthHeaders()
        },
        next:{
            tags:[`dashboard:products`]
        }
    });
    const products: Product[] = await response.json();
    return (
        <div className="h-[90vh] w-full">
            <div className="w-6/12">
                <FilteredCards products={products}/>
            </div>
        </div>
    )
}

export default ProductsPage