import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import EmployeesStats from  "./components/employees/employees-stats";
import TeamsStats from "./components/teams/teams-stats";

export default function DashboardPage(){
    return (
        <Tabs defaultValue="employees">
            <TabsList className="mb-4">
                <TabsTrigger value="employees" className="cursor-pointer">Employee stats</TabsTrigger>
                <TabsTrigger value="teams" className="cursor-pointer">Team stats</TabsTrigger>
            </TabsList>
            <TabsContent value="employees">
                <EmployeesStats />
            </TabsContent>
            <TabsContent value="teams">
                <TeamsStats/>
            </TabsContent>
        </Tabs>
    )
}