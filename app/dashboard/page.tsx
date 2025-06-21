import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

export default function DashboardPage(){
    return (
        <Tabs defaultValue="employees">
            <TabsList>
                <TabsTrigger value="employees" className="cursor-pointer">Employee stats</TabsTrigger>
                <TabsTrigger value="teams" className="cursor-pointer">Team stats</TabsTrigger>
            </TabsList>
            <TabsContent value="employees">employees stats view</TabsContent>
            <TabsContent value="teams">teams stats view</TabsContent>
        </Tabs>
    )
}