import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon, BadgeCheckIcon, ListCheckIcon, UserCheck2Icon, UserIcon, UserRoundXIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import cm from "@/public/images/cm.jpg"
import Image from "next/image";

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
                <Card className="gap-2">
                    <CardHeader>
                        <CardTitle className="text-base">Team leaders</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2">
                        </div>
                    </CardContent>
                </Card>
                <Card className="gap-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-base">Team distribution</CardTitle>
                    </CardHeader>
                    <CardContent className="flex gap-2 items-center">
</CardContent>
        
                </Card>
            </div>
            <Card className="my-4">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <ListCheckIcon />
                        <span>Support tickets resolved</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                </CardContent>
            </Card>
        </>
    )
}