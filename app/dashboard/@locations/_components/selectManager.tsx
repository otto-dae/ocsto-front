import { Manager } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

export default function SelectManager({managers}){
    return (
        <Select>
            {
                managers.map((manager: Manager) =>{
                    return (<SelectItem key={manager.managerId}>
                        {manager.managerFullName}
                    </SelectItem>
                    )  
                })}
        </Select>
    )
}