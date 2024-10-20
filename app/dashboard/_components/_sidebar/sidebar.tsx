import {LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./navitem";

export default function SideBar(){
    return(
        <nav className="w-1/12 h-[90vh] bg-orange-200 flex flex-col items-center py-20 justify-center gap-10"> 
            <NavItem icon={<LuStore className="text-4-1"/>} path="/fStore"/>
            <NavItem icon={<LuTruck className="text-4-1"/>} path="/dashboard/providers"/>
            <NavItem icon={<LuWheat className="text-4-1"/>} path="/dashboard/products"/>
            <NavItem icon={<LuUser className="text-4-1"/>} path="/dashboard/managers"/>
            <NavItem icon={<LuUsers className="text-4-1"/>} path="/dashboard/employeesf"/>
        </nav>
    )
}