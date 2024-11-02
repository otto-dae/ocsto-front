import DeleteManager from "@/actions/managers/delete"
import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";

export default function DeleteManagerButton({managerId}: {managerId : string}){
    
    const DeleteManagerById = DeleteManager.bind(null, managerId);
    return(
        <form action={DeleteManagerById}>
            <Button type="submit" color="danger"><LuTrash size="20"/></Button>
        </form>
    )
}