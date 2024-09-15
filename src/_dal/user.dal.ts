import { prisma } from "prisma/prisma";
import { createSession, verifySession } from "@/lib/auth";
import { cache } from "react";

// export async function logout() {}

export const getUser = cache(async () => {
    const session = await verifySession();

    const data = await prisma.user.findUnique({
        where: {
            id: session.userId,
        },
    });

    return data;
});
