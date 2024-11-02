import { Manager } from "@/entities";
import { Card, CardBody, CardHeader, Divider  } from "@nextui-org/react";
import Link from "next/link";

export default function ManagerCard2({manager}: {manager: Manager}) {
    return (<Card className="mx-20 py-2 text-center text-3xl">
        <CardHeader>{manager.managerFullName}</CardHeader>
        <Divider/>
        <CardBody className="flex flex-row flex-grow-0 items-center justify-center">
            <p className="w-full">Email: {manager.mangaerEmail}</p>
            <p className="w-full">Telefono: {manager.managerPhoneNumber}</p>

            {
                manager.location ? (<p className={manager.location ? "" : "hidden"}>Tienda : <Link href={{pathname: `/dashboard`,
                    query:{
                        store: manager?.location?.locationId
                    }
                }}> {manager.location.locationName}</Link></p>) : (<p className="w-full">No tiene tienda</p>)

                //For the love of god I was not able to make the google maps work
            }
        </CardBody>

    </Card>)
}