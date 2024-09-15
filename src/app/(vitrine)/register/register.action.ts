"use server";

import { registerSchema } from "@/app/common/schemas/auth-schema";
import { RegisterFormState } from "./register.interface";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { prisma } from "prisma/prisma";
import bcrypt from "bcrypt";

export async function onRegisterAction(
    state: RegisterFormState,
    data: FormData
): Promise<RegisterFormState> {
    const userEntries = Object.fromEntries(data);
    const parsedValidation = registerSchema.safeParse(userEntries);

    if (!parsedValidation.success) {
        state.fields = userEntries;
        state.errors = parsedValidation.error.flatten().fieldErrors;
        return state;
    }

    const { username, email, password } = parsedValidation.data;
    await register(username, email, password);

    return state;
}

export async function register(
    username: string,
    email: string,
    password: string
) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: hashedPassword,
            },
        });
    } catch (error) {
        //should patch this to throw errors properly but idk how
        console.log("error: ", error);
        return NextResponse.json({
            message: "There was an error creating your account.",
            success: false,
        });
    } finally {
        redirect("/login");
    }
}
