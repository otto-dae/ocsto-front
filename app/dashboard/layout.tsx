import React from "react"
import Header from "./_components/header";
import SideBar from "./_components/_sidebar/sidebar";

export default function layoutDashboard({children, locations}: Readonly<{
    children: React.ReactNode;
    locations: React.ReactNode;
}>) {
    return(
        <div className="w-screen h-screen bg-orange-50">
            <Header/>

            <div className="flex flex-col">
                <SideBar/>
                {children}
                {locations}
            </div>
        </div>
    )
}