'use client'

import { Provider } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

export default function SelectProvider({providers}: {providers: Provider[]}){
    return(
        <Select label="proveedor" name="provider">
            {providers.map((provider) =>{
                return(
                    <SelectItem key={provider.providerId}>
                        {provider.providerName}
                    </SelectItem>
                );
            })}
        </Select>
    )
}