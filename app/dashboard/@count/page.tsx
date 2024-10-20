import axios from "axios";

const CountPage = async ()=> {
    const countLocations = await axios.get("Insert link, no se porque pero mi host cambia de vez en cuando al abrir, tengo que checar eso (/locations)")

    return countLocations?.data?.length;
}
export default CountPage;