"use client";
import { registerSchema } from "@/app/common/schemas/auth-schema";
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
import { onRegisterAction } from "./register.action";
import { z } from "zod";
import { useRef } from "react";
import { useFormState } from "react-dom";

const RegisterPage = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction, pending] = useFormState(onRegisterAction, {
        fields: {
            username: "",
            email: "",
            password: "",
        },
        errors: {},
        message: null,
    });

    const form = useForm<z.output<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: state!.fields,
    });

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="hidden bg-muted lg:block">{/* image */}</div>
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Register</h1>
                        {state.message && (
                            <p className="text-red-600 font-semibold">
                                {state.message}
                            </p>
                        )}
                        <p className="text-balance text-muted-foreground">
                            Enter your username, email and password to create
                            your account
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
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel />
                                                <FormControl>
                                                    <Input
                                                        placeholder="Choose an username"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription />
                                                {state?.errors?.username ? (
                                                    <FormMessage>
                                                        {state.errors.username}
                                                    </FormMessage>
                                                ) : (
                                                    <FormMessage />
                                                )}
                                            </FormItem>
                                        )}
                                    />

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
                                        {pending ? "Submitting..." : "Register"}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="underline">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
