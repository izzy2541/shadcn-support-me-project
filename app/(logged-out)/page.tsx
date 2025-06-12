//contains all of the logged out pages. 
//file name with brackets groups all the pages together, which means tsx 
//file within this folder will wrap any other files within this folder.
//in this case page.tsx will be hoisted up into the app directory meaning that it will be the landing/home page.

import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
    return (
        <>
            <h1 className="flex gap-2">
                <PersonStandingIcon size={50} className="text-pink-500" /> SupportMe
            </h1>
            <p>The best dashboard to manage customer support</p>
            <div className="flex gap-2 items-center">
                {/* asChild prop allows us to pass down any styles of the button to anything within the child component */}
                <Button asChild>
                <Link href="/login">Log in</Link>
                </Button>
                <small>or</small>
                <Button asChild variant="outline" >
                    <Link href="/sign-up">Sign Up</Link>
                </Button>
            </div>
        </>
    )
}