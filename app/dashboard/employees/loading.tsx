// next.js will recognise that we have a loading.tsx and it will load everything above the employees directory
//but while its waiting for the page.tsx to load it will render the loading.tsx in its place.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading(){
    return(
    <Card>
        <CardHeader>
            <CardTitle>
                Employees
            </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-[60px_1fr_1fr_1fr_1fr] gap-4 item-center">
            {/* size-10 means height and width both set to 10 */}
            <Skeleton className="size-10 rounded-full"/>
            <Skeleton className="h-8 w-full"/>
            <Skeleton className="h-8 w-full"/>
            <Skeleton className="h-8 w-full"/>
            <Skeleton className="h-8 w-full"/>
            <Skeleton className="size-10 rounded-full"/>
            <Skeleton className="h-8 w-full"/>
            <Skeleton className="h-8 w-full"/>
            <Skeleton className="h-8 w-full"/>
            <Skeleton className="h-8 w-full"/>
        </CardContent>
    </Card>
    )
}