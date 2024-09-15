"use server";

import { loginSchema } from "@/app/common/schemas/auth-schema";
import { LoginFormState } from "./login.interface";
import { prisma } from "prisma/prisma";
import bcrypt from "bcrypt";
import { createSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function onLoginAction(
    state: LoginFormState,
    data: FormData
): Promise<LoginFormState> {
    const userEntries = Object.fromEntries(data);
    const parsedValidation = loginSchema.safeParse(userEntries);

    if (!parsedValidation.success) {
        return {
            ...state,
            fields: userEntries,
            errors: parsedValidation.error.flatten().fieldErrors,
        };
    }

    const { email, password } = parsedValidation.data;

    const response = await login(email, password);
    const body = await response.json();

    if (response.ok) {
        redirect("/");
    }

    return {
        fields: userEntries,
        errors: {},
        message: body.message,
    };
}

export async function login(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!user) {
        return NextResponse.json(
            { message: "This account does not exist." },
            { status: 404 }
        );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return NextResponse.json(
            { message: "Invalid password." },
            { status: 401 }
        );
    }

    const session = await createSession(user.id);
    console.log(session);
    if (!session) {
        return NextResponse.json(
            { message: "There was an error creating session." },
            { status: 500 }
        );
    }

    return NextResponse.json({ status: 200 });
}
