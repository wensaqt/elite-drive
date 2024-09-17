"use server";

import { loginSchema } from "@/app/common/schemas/auth-schema";
import { LoginFormState } from "./login.interface";

import { redirect } from "next/navigation";
import { login } from "@/_dal/auth.dal";

export async function onLoginAction(
    state: LoginFormState,
    data: FormData
): Promise<LoginFormState> {
    const userEntries = Object.fromEntries(data);
    const parsedValidation = loginSchema.safeParse(userEntries);

    if (!parsedValidation.success) {
        return {
            ...state,
            fields: userEntries,
            errors: parsedValidation.error.flatten().fieldErrors,
        };
    }

    const { email, password } = parsedValidation.data;
    const response = await login(email, password);
    if (response.ok) {
        redirect("/");
    }

    const body = await response.json();
    return {
        fields: userEntries,
        errors: {},
        message: body.message,
    };
}
