// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { employees } from "@/app/data/employees"  // <-- adjust path if needed

// // Group employees by team
// const teams = Object.values(
//   employees.reduce((acc, emp) => {
//     if (!acc[emp.teamName]) {
//       acc[emp.teamName] = {
//         name: emp.teamName,
//         leader: employees.find(
//           (e) => e.teamName === emp.teamName && e.isTeamLeader
//         ),
//         members: [] as typeof employees,
//       }
//     }
//     acc[emp.teamName].members.push(emp)
//     return acc
//   }, {} as Record<string, { name: string; leader?: typeof employees[0]; members: typeof employees }>)
// )

// export default function TeamsPage() {
//   return (
//     <main className="space-y-6 p-8">
//       <h1 className="text-2xl font-bold">Teams</h1>
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {teams.map((team) => (
//           <Card key={team.name} className="p-4">
//             <CardHeader>
//               <CardTitle className="capitalize">{team.name} Team</CardTitle>
//             </CardHeader>
//             <CardContent>
//               {team.leader && (
//                 <div className="flex items-center gap-4 mb-3">
//                   <Avatar>
//                     <AvatarImage src={team.leader.avatar} />
//                     <AvatarFallback>
//                       {team.leader.firstName[0]}
//                       {team.leader.lastName[0]}
//                     </AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <p className="font-medium">
//                       {team.leader.firstName} {team.leader.lastName}
//                     </p>
//                     <p className="text-sm text-muted-foreground">Team Leader</p>
//                   </div>
//                 </div>
//               )}
//               <p className="text-sm mb-3">{team.members.length} members</p>
//               <Button variant="outline" size="sm" className="cursor-pointer" >
//                 View Team
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </main>
//   )
// }
"use client"

import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PieChart, Pie, Cell, Tooltip } from "recharts"

import { employees } from "@/app/data/employees"

const teamInfo = {
  alpha: {
    motto: "Building the future, one feature at a time 🚀",
    projects: [
      { name: "Completed", value: 3 },
      { name: "Ongoing", value: 2 },
      { name: "Planned", value: 1 },
    ],
  },
  canary: {
    motto: "Testing boundaries and catching bugs early 🐤",
    projects: [
      { name: "Completed", value: 4 },
      { name: "Ongoing", value: 1 },
      { name: "Planned", value: 2 },
    ],
  },
  delta: {
    motto: "Adapting fast, delivering faster ⚡",
    projects: [
      { name: "Completed", value: 2 },
      { name: "Ongoing", value: 3 },
      { name: "Planned", value: 2 },
    ],
  },
}

const COLORS = ["#4ade80", "#60a5fa", "#facc15"] // green, blue, yellow

// Group employees by team
const teams = Object.values(
  employees.reduce((acc, emp) => {
    if (!acc[emp.teamName]) {
      acc[emp.teamName] = {
        name: emp.teamName,
        leader: employees.find(
          (e) => e.teamName === emp.teamName && e.isTeamLeader
        ),
        members: [],
      }
    }
    acc[emp.teamName].members.push(emp)
    return acc
  }, {} as Record<string, { name: string; leader?: typeof employees[0]; members: typeof employees }>)
)

export default function TeamsPage() {
  const [openTeam, setOpenTeam] = useState<string | null>(null)

  return (
    <main className="space-y-6 p-8">
      <h1 className="text-2xl font-bold">Teams</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.name} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="capitalize">{team.name} Team</CardTitle>
            </CardHeader>
            <CardContent>
              {team.leader && (
                <div className="flex items-center gap-3 mb-3">
                  <Avatar>
                    <AvatarImage src={team.leader.avatar} />
                    <AvatarFallback>
                      {team.leader.firstName[0]}
                      {team.leader.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">
                      {team.leader.firstName} {team.leader.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">Team Leader</p>
                  </div>
                </div>
              )}
              <p className="text-sm text-muted-foreground mb-2">
                {teamInfo[team.name as keyof typeof teamInfo]?.motto}
              </p>
              <p className="text-sm">{team.members.length} members</p>
            </CardContent>
            {/* <CardFooter>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => setOpenTeam(team.name)}
              >
                View Team
              </Button>
            </CardFooter> */}
            <CardFooter>
  <Button
    variant="outline"
    size="sm"
    className="w-full cursor-pointer"
    onClick={() => setOpenTeam(team.name)}
  >
    View Projects
  </Button>
</CardFooter>

          </Card>
        ))}
      </div>

      {/* Modal Dialog */}
      <Dialog open={!!openTeam} onOpenChange={() => setOpenTeam(null)}>
        <DialogContent className="max-w-md">
          {openTeam && (
            <>
              {/* <DialogHeader>
                <DialogTitle className="capitalize">
                  {openTeam} Team Overview
                </DialogTitle>
              </DialogHeader> */}
              <DialogHeader>
  <DialogTitle className="capitalize">
    {openTeam} Team – Project Overview
  </DialogTitle>
</DialogHeader>

              <div className="flex flex-col items-center">
                <PieChart width={300} height={250}>
                  <Pie
                    data={teamInfo[openTeam as keyof typeof teamInfo].projects}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {teamInfo[openTeam as keyof typeof teamInfo].projects.map(
                      (entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      )
                    )}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
