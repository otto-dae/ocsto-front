import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function SignUpPage(){
    return (
        <div className="bg-orange-700 px-10 py-2 rounded-md">
            <p className="text-2xl my-4">Registrarse en la plataforma</p>
            <div>
            <Input label="Email" type="email" isRequired={true} size="sm"/>
            <Input label="Password" type="password" isRequired={true} size="sm"/>
            <Input label="RepeatPassword" type="password" isRequired={true} size="sm"/>


            </div>
            <Button color="primary">Registrarse</Button>
            <p>You dont have an account?<Link href={"/login"}>LogIn</Link></p>
       </div>

    
    )
}