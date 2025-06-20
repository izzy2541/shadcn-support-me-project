//children represents any page that gets rendered for each dashboard route
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}){
return (
<div className="grid grid-cols-[250px_1fr] h-screen">
    <div className="bg-muted overflow-auto p-4">side panel</div>
    <div className="overflow-auto py-2 px-4">
        <div className="pb-4">
            <h1>Welcome back, Tom!</h1>
            {children}
        </div>
    </div>
</div>
);
}