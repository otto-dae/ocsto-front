'use client';

import { Location, Manager } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

interface SelectManagerProps{
    managers: Manager[],
    locations: Location[],
    defaultManager?: string,
}

export default function SelectManager({managers, locations, defaultManager}: SelectManagerProps){

    const disabledKeys = locations.map((location: Location)=> {
        if (location.manager?.managerId !== defaultManager) return location.manager?.managerId;
      }).filter((managerId) => managerId !== undefined)
      return (
        <Select defaultSelectedKeys={defaultManager !== undefined ? [defaultManager] : []} label="Manager" name="manager" disabledKeys={disabledKeys}>
          {managers.map((manager: Manager) => {
            return (
              <SelectItem key={manager.managerId}>
                {manager.managerFullName}
              </SelectItem>
            );
          })}
        </Select>
    )
}