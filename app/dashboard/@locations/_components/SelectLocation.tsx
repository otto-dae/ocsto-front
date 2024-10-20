'use client';

import { Location } from "c:/Users/Koto/ocsto-front/entities"
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function SelectLocation ({locations, store}: {locations: Location[], store: string | string[] | undefined}){

    const router = useRouter();
    return(
        <Select placeholder="Select a store" label="Store" classNames={{
            mainWrapper: "hover:ring-2 ring-red-500 rounded-xl transition-all"
        }}
        selectedKeys={store ? store : "0"}
        onChange={((e) => {
            if(e.target.value === "0" || e.target.value === "") {
                router.push('/dashboard')
            }
            else{
                router.push(`/dashboard?store=${e.target.value}`)
            }
        })}>
        {
            locations.map((location: Location) => {
                return <SelectItem key={location.locationName} value={location.locationId}>{location.locationName}</SelectItem>
            })
        }
    </Select>
    )
}