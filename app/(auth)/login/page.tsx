'use client';

import { API_URL } from "@/constants";
import { Button, Input, Spinner } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function  LogInPage() {

    const [sumbitting, setSumbitting] = useState(false);
    const router = useRouter();
    const handleSumbit = async (e: React.FormEvent) =>{
        setSumbitting(true);
        e.preventDefault()
        const formData = new FormData(e.target);
        let authData: any = {}
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
        try{
            const response = await axios.post(`${API_URL}/aut/login`, {
                ... authData
            }, {
                withCredentials: true
            });
            if(response.status === 201) router.push('/dashboard')
            setSumbitting(false);
        } catch(e){
            setSumbitting(false);
        }

        return;
    }

    return (
        <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={handleSumbit}>
            <p className="text-2xl my-4">Log In</p>
            
            
            
            <div className="flex flex-col gap-2 my-4 items-center">
            <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm"/>
            <Input label="Password" name="userPassword" type="password" isRequired={true} size="sm"/>
            </div>

            <div className="flex flex-col items-center gap-2">
            <Button color="primary" type="submit" disabled={sumbitting}> 
                
                {sumbitting ? "Sending" : "Log in"}
           
            </Button>
            <p>You dont have an account?<Link href={"/signup"}>SignUp</Link></p>
            </div>
       </form>

    
    )
}