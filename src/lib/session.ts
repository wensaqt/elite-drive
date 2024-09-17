import "server-only";

import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const KEY = new TextEncoder().encode(process.env.AUTH_SECRET);

const cookie = {
    name: "session",
    options: {
        httpOnly: true,
        secure: true,
        sameSite: "lax" as const,
        path: "/",
    },
    duration: 600 * 1000,
};

async function encrypt(payload: JWTPayload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("10m")
        .sign(KEY);
}

async function decrypt(token: string): Promise<JWTPayload> {
    const { payload } = await jwtVerify(token, KEY, {
        algorithms: ["HS256"],
    });

    return payload;
}

export async function createSession(userId: string) {
    const expires = new Date(Date.now() + cookie.duration);
    const session = await encrypt({ userId, expires });

    cookies().set(cookie.name, session, { ...cookie.options, expires });

    return cookies().get("session");
}

export async function verifySession(): Promise<boolean> {
    const session = await decrypt(
        cookies().get(cookie.name)?.value ?? ""
    ).catch(() => null);
    return !!session?.userId;
}

export async function deleteSession() {
    cookies().delete(cookie.name);
    redirect("/login");
}

export async function getSession() {
    const isAuthenticated = await verifySession();
    if (!isAuthenticated) {
        return null;
    }
    const session = cookies().get(cookie.name);

    if (!session) {
        return null;
    }

    const decryptedSession = await decrypt(session.value);
    return decryptedSession;
}
