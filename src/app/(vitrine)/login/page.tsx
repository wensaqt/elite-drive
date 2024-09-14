"use client";
import { loginSchema } from "@/app/common/schemas/auth-schema";
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
import Link from "next/link";
import { useForm } from "react-hook-form";
import { onLoginAction } from "./login.action";
import { z } from "zod";
import { useRef } from "react";
import { useFormState } from "react-dom";

const LoginPage = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction, pending] = useFormState(onLoginAction, {
        fields: {
            email: "",
            password: "",
        },
        errors: {},
    });

    const form = useForm<z.output<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: state!.fields,
    });

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Form {...form}>
                                <form
                                    action={formAction}
                                    onSubmit={form.handleSubmit(() =>
                                        formRef.current?.submit()
                                    )}
                                    className="space-y-8 w-96"
                                    ref={formRef}
                                >
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel />
                                                <FormControl>
                                                    <Input
                                                        placeholder="Email address"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription />
                                                {state?.errors?.email ? (
                                                    <FormMessage>
                                                        {state.errors.email}
                                                    </FormMessage>
                                                ) : (
                                                    <FormMessage />
                                                )}
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
                                                    <Input
                                                        placeholder="Password"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription />
                                                {state?.errors?.password ? (
                                                    <FormMessage>
                                                        {state.errors.password}
                                                    </FormMessage>
                                                ) : (
                                                    <FormMessage />
                                                )}
                                            </FormItem>
                                        )}
                                    />

                                    <Button disabled={pending} type="submit">
                                        {pending ? "Submitting..." : "Log in"}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="#" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">{/* image */}</div>
        </div>
    );
};

export default LoginPage;
