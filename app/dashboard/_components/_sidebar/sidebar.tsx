import {LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./navitem";

export default function SideBar(){
    return(
        <nav className="w-[10vw] h-[90vh] bg-orange-200 flex flex-col items-center px-20"> 
            <NavItem icon={<LuStore className="text-4-1"/>} path="/fStore"/>
            <NavItem icon={<LuTruck className="text-4-1"/>} path="/dashboard/providers"/>
            <NavItem icon={<LuTruck className="text-4-1"/>} path="/dashboard/products"/>

            <LuUser className="text-4x1"/>
            <LuUsers className="text-4x1"/>
        </nav>
    )
}