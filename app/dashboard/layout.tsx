"use client";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
//children represents any page that gets rendered for each dashboard route
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isDesktop = useMediaQuery("(min-width:768px");

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
            <MainMenu className="hidden md:flex" />
            {!isDesktop && (
                <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
                    <MenuTitle />
                    <Drawer direction="right"
                        open={mobileMenuOpen}
                        onClose={() => setMobileMenuOpen(false)}
                        onOpenChange={(open) => setMobileMenuOpen(open)}>
                        <DrawerTitle></DrawerTitle>
                        <DrawerTrigger>
                            <MenuIcon />
                        </DrawerTrigger>
                        <DrawerContent>
                            <MainMenu />
                        </DrawerContent>
                    </Drawer>
                </div>
            )}
            <div className="overflow-auto py-2 px-4">
                <div className="pb-4">
                    <h1>Welcome back, Isabel!</h1>
                </div>
                {children}
            </div>
        </div>
    );
}