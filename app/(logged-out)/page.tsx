//contains all of the logged out pages. 
//file name with brackets groups all the pages together, which means tsx 
//file within this folder will wrap any other files within this folder.
//in this case page.tsx will be hoisted up into the app directory meaning that it will be the landing/home page.

import { Button } from "@/components/ui/button";

export default function LandingPage() {
    return (
        <div>
            <h1>SupportMe</h1>
            <Button>Log in</Button>
            <Button>Sign Up</Button>
        </div>
    )
}