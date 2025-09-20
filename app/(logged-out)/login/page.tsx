'use client';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PersonStandingIcon } from "lucide-react";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/ui/password-input";
import { useRouter } from "next/navigation";


const formSchema = z.object({
    // ensure our email gets validated as a string, and must be a valid email
    //- this validation is taken care of by zod.
    //now it knows how to validate all the form fields based on this resolver
    email: z.string().email(),
    password: z.string(),
})

export default function LoginPage() {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        // resiolver links zod with react, as the 2 of them arent usually linked/related.
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("login validation passed: ", data);
        router.push("/dashboard");
    }

    return (
        <>
            <PersonStandingIcon size={50} />
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>
                        Login
                    </CardTitle>
                    <CardDescription>
                        Login to your SupportMe account
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
                                        <FormDescription>This is the email address you signed up to SupportMe with.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                                     <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <PasswordInput placeholder="••••••••" 
                                            {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Login</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="justify-between">
                    <small>Don&apos;t have an account?</small>
                    <Button asChild variant="outline" size="sm">
                        <Link href="/sign-up">
                            Sign up
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}