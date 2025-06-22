import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon, BadgeCheckIcon, LaptopIcon, UserCheck2Icon, UserIcon, UserRoundXIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import cm from "@/public/images/cm.jpg"
import Image from "next/image";
import WorkLocationTrends from "./work-location-trends";

export default function EmployeesStats() {
    const totalEmployees = 100;
    const employeesPresent = 80;
    const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;
    return (
        <>
            <div className="grid lg:grid-cols-3 gap-4">
                <Card className="gap-2">
                    <CardHeader>
                        <CardTitle className="text-base">{totalEmployees}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <UserIcon />
                            <div className="text-5xl font-bold">100</div>
                        </div>
                        <Button size="xs" asChild>
                            <Link href="/dashboard/employees">View all</Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card className="gap-2">
                    <CardHeader>
                        <CardTitle className="text-base">Employees present</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2">
                            {employeesPresentPercentage > 75 ?
                                <UserCheck2Icon /> : <UserRoundXIcon />}
                            <div className="text-5xl font-bold">{employeesPresent}</div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        {employeesPresentPercentage > 75 ? (
                            <span className="text-xs text-green-500 flex gap-1 items-center">
                                <BadgeCheckIcon />
                                {employeesPresentPercentage}% of employees are present
                            </span>
                        ) : (
                            <span className="text-xs text-red-500 flex gap-1 items-center">
                                <AlertTriangleIcon />
                                Only {employeesPresentPercentage}% of employees are present
                            </span>
                        )}
                    </CardFooter>
                </Card>
                <Card className="border-pink-300 gap-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-base">Employee of the month</CardTitle>
                    </CardHeader>
                    <CardContent className="flex gap-2 items-center">
                        <Avatar>
                            <Image src={cm} alt="Employee of the month" />
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <span className="text-2xl">Colin Murray!</span>
                    </CardContent>
                    <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
                        Congratulations Colin!
                    </CardFooter>
                </Card>
            </div>
            <Card className="my-4">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <LaptopIcon />
                        <span>Employee work location trends</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <WorkLocationTrends />
                </CardContent>
            </Card>
        </>
    )
}