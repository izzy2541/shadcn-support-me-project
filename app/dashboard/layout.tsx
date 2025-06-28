import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
//children represents any page that gets rendered for each dashboard route
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}){
return (
<div className="grid md:grid-cols-[250px_1fr] h-screen">
   <MainMenu className="hidden md:flex"/>
   <div className="p-4 block md:hidden sticky top-0 left-0 bg-background border-b border-border">
    <MenuTitle/>
   </div>
    <div className="overflow-auto py-2 px-4">
        <div className="pb-4">
            <h1>Welcome back, Tom!</h1>
            {children}
        </div>
    </div>
</div>
);
}