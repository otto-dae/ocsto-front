import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { AuthHeaders } from "@/helpers/authHelper";
import ProviderCard from "./[id]/_components/ProviderCard";
import Link from "next/link";
import FormCreateProvider from "./[id]/_components/FormCreateProvider";
import CreateProvider from "./[id]/_components/CreateProvider";


const ProviderPage = async () => {
    const response = await fetch(`${API_URL}/providers`,{
        headers:{
            ...AuthHeaders()
        }
    })

    const providers: Provider[]= await response.json();
    return (
        <div className="flex flex-col h-[90vh] items-end w-full pt-10 px-10">
            <CreateProvider>
                <FormCreateProvider />
            </CreateProvider>
            <div className="w-full flex flex-grow-0 gap-14 flex-wrap py-20">
                {providers.map((provider: Provider) => (
                    <Link href={{pathname: `dashboard/providers/${provider.providerId}`}}>
                        <ProviderCard provider={provider} key={provider.providerId}/>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default ProviderPage;