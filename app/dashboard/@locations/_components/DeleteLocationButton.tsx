import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";

export default function DeleteLocationButton({ store }: {store: string | string[] | undefined}){
   
    if(!store ) return null;

    return(
        <form>
            <Button type="submit" name="deleteValue" value={store} color="danger">
                <LuTrash size="20"/>
            </Button>
        </form>
    )
} 