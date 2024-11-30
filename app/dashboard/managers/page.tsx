import { LuPlus } from "react-icons/lu";
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Location } from "@/entities";
import ModalGeneric from "../_components/ModalGeneric";
import FormCreateManager from "./_components/FormCreateManager";

const ManagersPage = async () => {
  const responseStores = await fetch(`${API_URL}/locations`, {
    headers: {
      ...AuthHeaders(),
    }
  })
  const stores: Location[] = await responseStores.json()
  return (
    <ModalGeneric icon={<LuPlus size="20" />}>
    <FormCreateManager stores={stores} />
    </ModalGeneric>
  );
};

export default ManagersPage;