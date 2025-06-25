import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListCheckIcon, PieChartIcon, StarIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import cm from "@/public/images/cm.jpg"
import tf from "@/public/images/tf.jpg"
import rl from "@/public/images/rl.jpg"
import Image from "next/image";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import TeamsDistributionChart from "./team-distribution-chart";
import SupportTicketsResolved from "./support-tickets-resolved";

const teamLeaders = [
    {
        firstName: "Colin",
        lastName: "Murray",
        avatar: cm,
    },
    {
        firstName: "Tom",
        lastName: "Phillips",
    },
    {
        firstName: "Liam",
        lastName: "Fuentes",
    },
    {
        firstName: "Tina",
        lastName: "Fey",
        avatar: tf,
    },
    {
        firstName: "Katie",
        lastName: "Johnson",
    },
    {
        firstName: "Tina",
        lastName: "Jones",
    },
    {
        firstName: "Amy",
        lastName: "Adams",
    },
    {
        firstName: "Ryan",
        lastName: "Lopez",
        avatar: rl,
    },
    {
        firstName: "Jenny",
        lastName: "Jones",
    },
];

export default function TeamsStats() {
    return (
        <>
            <div className="grid lg:grid-cols-3 gap-4">
                <Card className="gap-2">
                    <CardHeader>
                        <CardTitle className="text-base">Total teams</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <UsersIcon />
                            <div className="text-5xl font-bold">8</div>
                        </div>
                        <Button size="xs" asChild>
                            <Link href="/dashboard/employees">View all</Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card className="pb-4">
                    <CardHeader>
                        <CardTitle className="text-base flex justify-between items-center">
                            <span>Team leaders</span>
                            <StarIcon className="text-yellow-500" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {teamLeaders.map(teamLeader => (
                            <TooltipProvider key={`${teamLeader.firstName}${teamLeader.lastName}`}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Avatar>
                                            {!!teamLeader.avatar &&
                                                <Image src={teamLeader.avatar} alt={`${teamLeader.firstName} ${teamLeader.lastName} avatar`} />
                                            }
                                            <AvatarFallback>
                                                {teamLeader.firstName[0]}
                                                {teamLeader.lastName[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {teamLeader.firstName} {teamLeader.lastName}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </CardContent>
                </Card>
                <Card className="gap-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-base flex justify-between items-center">
                            <span>Team distribution</span>
                            <PieChartIcon />
                        </CardTitle>                    
                    </CardHeader>
                    <CardContent className="pb-0">
                        <TeamsDistributionChart />
                    </CardContent>
                </Card>
            </div>
            <Card className="my-4">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <ListCheckIcon />
                        <SupportTicketsResolved />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                </CardContent>
            </Card>
        </>
    )
}