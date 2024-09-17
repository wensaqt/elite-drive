import { createSession } from "@/lib/session";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "prisma/prisma";
import { EmailFormat, UsernameFormat } from "@/app/common/types/inputs.types";

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
    const { isUsernameTaken, isEmailTaken } = await checkUserCredentials(
        username,
        email
    );

    if (isEmailTaken && isUsernameTaken) {
        return NextResponse.json(
            {
                message: "Both the username and email are already taken.",
            },
            { status: 400 }
        );
    }

    if (isEmailTaken) {
        return NextResponse.json(
            {
                message: "This email is already registered.",
            },
            { status: 400 }
        );
    }

    if (isUsernameTaken) {
        return NextResponse.json(
            {
                message: "This username is already taken.",
            },
            { status: 400 }
        );
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
    });
}

export async function checkUserCredentials(
    username: UsernameFormat,
    email: EmailFormat
) {
    try {
        const isUsernameTaken = await isUsernameAlreadyTaken(username);
        const isEmailTaken = await isEmailAlreadyTaken(email);

        return { isUsernameTaken, isEmailTaken };
    } catch (error) {
        console.error("An error occurred while checking:", error);
        return { isUsernameTaken: false, isEmailTaken: false };
    }
}

async function isUsernameAlreadyTaken(
    username: UsernameFormat
): Promise<boolean> {
    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                username: username,
            },
            select: {
                id: true,
            },
        });

        return existingUser !== null;
    } catch (error) {
        console.error("Error checking username:", error);
        throw new Error("An error occurred while checking the username.");
    }
}

async function isEmailAlreadyTaken(email: EmailFormat): Promise<boolean> {
    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
            },
        });

        return existingUser !== null;
    } catch (error) {
        console.error("Error checking email:", error);
        throw new Error("An error occurred while checking the email.");
    }
}
