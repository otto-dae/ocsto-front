import { TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";

const CountPage = async ()=> {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value
    const countLocations = await axios.get("Insert link, no se porque pero mi host cambia de vez en cuando al abrir, tengo que checar eso (/locations)",{
        headers:{
            Authorization: `Bearer ${token})`        
        }
    })

    return countLocations?.data?.length;
}
export default CountPage;