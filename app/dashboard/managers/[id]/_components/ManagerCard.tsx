import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import { Manager } from "@/entities";
import Link from "next/link";
import ModalGeneric from "@/app/dashboard/_components/ModalGeneric";
import { LuPlus } from "react-icons/lu";
import FormCreateUserManager from "./FormCreateUser";
import FormUpdateUser from "./FormUpdateUser";

//I cant i genuinely cant make this work wtf google wtf the styles

export default function ManagerCard({manager}: {manager: Manager}) {
    return (  <Card className="mx-20 py-2 text-center">
        <CardHeader>
          <p className="w-full">
            <b className="text-4xl">{manager.managerFullName}</b>
          </p>
            {
            manager.user ? (
              <ModalGeneric icon={<LuPlus size="20"/>}>
                <FormUpdateUser user={manager.user}/>
              </ModalGeneric>
            ) : (
              <ModalGeneric icon={<LuPlus size="20"/>}>
                <FormCreateUserManager manager={manager}/>
              </ModalGeneric>
            )
          }
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-row flex-grow-0 items-center gap-10 justify-center">
          <div className="flex flex-col text-lg">
            <p className="w-full">
              Email: <b>{manager.managerEmail}</b>
            </p>
            <p className="w-full">
              Teléfono: <b>{manager.managerPhoneNumber}</b>
            </p>
            <p className="w-full">
              Salario: <b>{manager.managerSalary}</b>
            </p>
            <p className={manager.location ? "" : "hidden"}>
              Tienda:{" "}
              <Link
                href={{
                  pathname: `/dashboard`,
                  query: {
                    store: manager?.location?.locationId
                  }
                }}
              >
                <b className="underline">{manager?.location?.locationName}</b>
              </Link>
            </p>
          </div>
          {manager.location ? (
            <>
            </>
          ) : (
            <p className="w-full text-4xl"> No tiene tienda </p>
          )}
        </CardBody>
      </Card>
    )
}