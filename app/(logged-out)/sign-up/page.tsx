'use client';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CalendarIcon, PersonStandingIcon } from "lucide-react";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";


const formSchema = z.object({
    // ensure our email gets validated as a string, and must be a valid email
    //- this validation is taken care of by zod.
    //now it knows how to validate all the form fields based on this resolver
    email: z.string().email(),
    accountType: z.enum(["personal", "company"]),
    // all fields in formSchema are by default required unless we specify that they are optional.
    companyName: z.string().optional(),
    //all fields are strings by default. to change this, and to allow the field to accept 
    //a different data type, we must use coerce
    numberOfEmployees: z.coerce.number().optional(),
    //we can use refine as opposed to superRefine if we just want to validate a single form field
    //and we dont need a=other form fields as part of that validation.
    //takes callback function as first parameter, which returns a boolean.
    //if it returns true - this means to display the validation message. 
    //passes users answer as parameter
    dob: z.date().refine((date) => {
        const today = new Date();
        const eighteenYearsAgo = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
        );
        return date <= eighteenYearsAgo;
    }, "You must be at least 18 years old"),
    //superefine uses callback function that takes data and context as parameters. 
    //data will be all of the FormField values and context will be something we can ue to add
    //error messages to our forms, to specific form fields
}).superRefine((data, ctx) => {
    if (data.accountType === "company" && !data.companyName) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            //we must match the field name here (on above line companyName: z.enum...)
            path: ["companyName"],
            message: "Company name is required"
        });
    }

    if (data.accountType === "company" && (!data.numberOfEmployees || data.numberOfEmployees < 1)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            //we must match the field name here (line 21)
            path: ["numberOfEmployees"],
            message: "Number of employees is required"
        });
    }
})

export default function SignupPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        // resiolver links zod with react, as the 2 of them arent usually linked/related.
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        }
    });

    const handleSubmit = () => {
        console.log("login validation passed")
    }

    //with watch, anytime the form changes, it will be reflected in the const.
    const accountType = form.watch("accountType");

    const dobFromDate = new Date();
    dobFromDate.setFullYear(dobFromDate.getFullYear() - 120);

    return (
        <>
            <PersonStandingIcon size={50} />
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>
                        Sign up
                    </CardTitle>
                    <CardDescription>
                        Sign up for a new SupportMe account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john@doe.com"

                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="accountType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Account type
                                        </FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select an account type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="personal">Personal</SelectItem>
                                                <SelectItem value="company">Company</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col pt-2">
                                        <FormLabel>Date of Birth</FormLabel>
                                        <Popover modal={false}>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button variant="outline" className="normal-case flex justify-between pr-1">
                                                        {!!field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}                                                        <CalendarIcon />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent align="start" className="w-auto p-0">
                                                <Calendar mode="single"
                                                    //single mode means we can only chose one date as oppposed to e.g. a range of dates
                                                    defaultMonth={field.value}
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    //ensures that we display 6 weeks per month, so that height doesnt change per month
                                                    fixedWeeks
                                                    //Index of monday     
                                                    weekStartsOn={1}
                                                    captionLayout="dropdown"
                                                    disabled={{
                                                        before: dobFromDate,
                                                        after: new Date()
                                                    }}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {accountType === "company" &&
                                <>
                                    <FormField
                                        control={form.control}
                                        name="companyName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Company name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Company name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="numberOfEmployees"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Employees</FormLabel>
                                                <FormControl>
                                                    <Input type="number"
                                                        min={0}
                                                        placeholder="Employees"
                                                        {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            }
                            <Button type="submit">Sign up</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="justify-between">
                    <small>Already have an account?</small>
                    <Button asChild variant="outline" size="sm">
                        <Link href="/login">
                            Login
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}