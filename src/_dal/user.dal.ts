import { prisma } from "prisma/prisma";
import { getSession, verifySession } from "@/lib/session";
import { cache } from "react";
import { EmailFormat, UsernameFormat } from "@/app/common/types/inputs.types";

type User = {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

function userDTO(user: User) {
    return {
        username: user.username,
        email: user.email,
    };
}

export const getUser = cache(async () => {
    const isAuthenticated = await verifySession();

    if (!isAuthenticated) {
        throw new Error("Session not found.");
    }

    const session = await getSession();

    if (session) {
        const data = await prisma.user.findUnique({
            where: {
                id: session.userId,
            },
        });
        return userDTO(data!);
    }
});

// rework all of this because its trash

export async function checkUserCredentials(
    username: UsernameFormat,
    email: EmailFormat
) {
    try {
        const isUsernameTaken = await isUsernameAlreadyTaken(username);
        const isEmailTaken = await isEmailAlreadyTaken(email);

        if (isUsernameTaken) {
            console.log("Ce nom d'utilisateur est déjà pris.");
        }

        if (isEmailTaken) {
            console.log("Cet email est déjà utilisé.");
        }

        if (!isUsernameTaken && !isEmailTaken) {
            console.log("Le nom d'utilisateur et l'email sont disponibles.");
        }
    } catch (error) {
        console.error(
            "Une erreur est survenue lors de la vérification:",
            error
        );
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
        throw new Error("An error occurred while checking the username");
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
        throw new Error("An error occurred while checking the email");
    }
}
