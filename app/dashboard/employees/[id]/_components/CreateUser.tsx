"use client";
import { Modal, ModalContent ,ModalBody ,useDisclosure ,Image } from "@nextui-org/react";
import { ReactNode } from "react";

export default function CreateEmployee({
  children, icon, photo, //we dont use icon but at this point im scared of deleting things and therefore breaking the entire thing
}: {
  children: ReactNode;
  icon: ReactNode;
  photo: string | undefined;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Image
        src={photo}
        onClick={onOpen}
        isZoomed
        className="object-cover"
        classNames={{
          img: "size-60",
        }}
      />
      <Modal
        className="bg-orange-400"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="w-full">
          {() => (
            <>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}