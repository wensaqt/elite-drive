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
    duration: 10 * 1000,
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

export async function verifySession() {
    const sessionCookie = cookies().get(cookie.name)?.value;
    const session = await decrypt(sessionCookie!);
    console.log("session decrypted: ", session);
    if (!session.userId) {
        redirect("/login");
    }

    return { userId: session.userId as string };
}

export async function deleteSession() {
    console.log("cookie name:", cookie.name);
    cookies().delete(cookie.name);
    redirect("/login");
}

export async function logout() {
    deleteSession();
}
