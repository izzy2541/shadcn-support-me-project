import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { employees } from "@/app/data/employees"  // <-- adjust path if needed

// Group employees by team
const teams = Object.values(
  employees.reduce((acc, emp) => {
    if (!acc[emp.teamName]) {
      acc[emp.teamName] = {
        name: emp.teamName,
        leader: employees.find(
          (e) => e.teamName === emp.teamName && e.isTeamLeader
        ),
        members: [] as typeof employees,
      }
    }
    acc[emp.teamName].members.push(emp)
    return acc
  }, {} as Record<string, { name: string; leader?: typeof employees[0]; members: typeof employees }>)
)

export default function TeamsPage() {
  return (
    <main className="space-y-6 p-8">
      <h1 className="text-2xl font-bold">Teams</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.name} className="p-4">
            <CardHeader>
              <CardTitle className="capitalize">{team.name} Team</CardTitle>
            </CardHeader>
            <CardContent>
              {team.leader && (
                <div className="flex items-center gap-4 mb-3">
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
              <p className="text-sm mb-3">{team.members.length} members</p>
              <Button variant="outline" size="sm" className="cursor-pointer" >
                View Team
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
