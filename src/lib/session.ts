import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = new TextEncoder().encode(process.env.AUTH_SECRET);

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

async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("10 sec from now")
        .sign(key);
}

async function decrypt(token: string): Promise<any> {
    const { payload } = await jwtVerify(token, key, {
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
    if (isAuthenticated) {
        const session = cookies().get(cookie.name);
        return session;
    }
}
