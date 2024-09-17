import { prisma } from "prisma/prisma";
import { getSession, verifySession } from "@/lib/session";
import { cache } from "react";

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

    if (!session) {
        return;
    }

    const data = await prisma.user.findUnique({
        where: {
            id: session.userId as string,
        },
    });
    return userDTO(data!);
});
