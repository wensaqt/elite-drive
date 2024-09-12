"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const key = new TextEncoder().encode(process.env.AUTH_SECRET);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("10 sec from now")
        .sign(key);
}

export async function decrypt(token: string): Promise<any> {
    const { payload } = await jwtVerify(token, key, {
        algorithms: ["HS2256"],
    });
    return payload;
}

//should be user data afterwards, only id
export async function login(data: any) {
    const user = { email: data.email };

    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user, expires });

    cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {}
