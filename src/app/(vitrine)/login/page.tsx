"use client";
import { loginSchema } from "@/app/schemas/auth-schema";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

const LoginPage = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const submitLogin = () => {
        console.log("coucou");
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(submitLogin)}
                className="space-y-8 w-96"
            >
                <FormField
                    control={form.control}
                    name="email"
                    // render like that and not like the doc because it causes warnings
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel />
                            <FormControl>
                                <Input placeholder="Email address" {...field} />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel />
                            <FormControl>
                                <Input placeholder="Password" {...field} />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button>Log in</Button>
            </form>
        </Form>
    );
};

export default LoginPage;
