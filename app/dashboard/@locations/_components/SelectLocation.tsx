'use client';

import { Location } from "c:/Users/Koto/ocsto-front/entities"
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function SelectLocation ({locations}: {locations: Location[]}){
    const router = useRouter();

    return(
        <Select placeholder="Select a store" label="Store" classNames={{
            mainWrapper: "hover:ring-2 ring-red-500 rounded-xl transition-all"
        }}
        onChange={((e) => {
            router.push(`/dashboard?store=${e.target.value}`)
        })}>
        {
            locations.map((location: Location) => {
                return <SelectItem key={location.locationName} value={location.locationId}>{location.locationName}</SelectItem>
            })
        }
    </Select>
    )
}