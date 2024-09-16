import { createSession } from "@/lib/session";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "prisma/prisma";
import { checkUserCredentials } from "./user.dal";

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
    if (!session) {
        return NextResponse.json(
            { message: "There was an error creating session." },
            { status: 500 }
        );
    }

    return NextResponse.json({ status: 200 });
}

export async function register(
    username: string,
    email: string,
    password: string
) {
    const user = await checkUserCredentials(username, email);
    if (user) {
        return NextResponse.json({
            message: "A user with this username or email already exists.",
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPassword,
        },
    });

    if (newUser) return NextResponse.json({ status: 200 });

    return NextResponse.json({
        message: "There was an error creating your account.",
        success: false,
    });
}
