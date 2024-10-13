import { Image } from "@nextui-org/react";
import React from "react"

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <div className="bg-orange-200 w-screen h-screen overflow-hidden grid">
          <div className="place-content-center place-self-center">
            <Image src="`Oxxo_Logo.svg" width={300} height={0}/>
            {children}
          </div>
        </div>
    )
  }