"use client"
import { Button } from  "./button";
// import { TooltipContent } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./tooltip";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from  "next-themes";


export function LightDarkToggle({
    className
}: {
    className?: string;

})
{  const {setTheme, resolvedTheme } = useTheme();
   return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild className={className} onClick={() =>{
                    setTheme(resolvedTheme === "light" ? "dark" : "light")
                }}>
                    <Button variant="outline">
                        {/* applies hidden classname if in dark mode */}
                        <SunIcon className="block dark:hidden" />
                        <MoonIcon className="hidden dark:block"/>
                    </Button>
                </TooltipTrigger>
                {/* <TooltipContent>
                    <span className="hidden dark:inline">Enable light mode</span>
                    <span className="inline dark:hidden">Enable dark mode</span>
                </TooltipContent> */}
            </Tooltip>
        </TooltipProvider>
    )
}