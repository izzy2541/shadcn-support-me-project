"use client"

import { PersonStandingIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MenuTitle(){
    const router = useRouter()

    const redirectToHome = () => {
      // Here you could also clear local storage / tokens if needed
      router.push("/") // redirects to homepage
    }

    return(
        <h4 className="flex items-center">
            <PersonStandingIcon size={40} className="text-primary" 
            onClick={redirectToHome}
            /> SupportMe
        </h4>
    )
}

