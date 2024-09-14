import { prisma } from "prisma/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function login(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }

    // should create session with jwt, if success, log user
    // const session = await createSession(user.id);
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

        if (newUser) return NextResponse.redirect("/login", 201);
    } catch (error) {
        //should patch this to throw errors properly but idk how
        console.log("error: ", error);
        return NextResponse.json({
            message: "There was an error creating your account.",
            success: false,
        });
    }
}

export async function logout() {}
