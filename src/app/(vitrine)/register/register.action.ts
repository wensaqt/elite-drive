"use server";

import { registerSchema } from "@/app/common/schemas/auth-schema";
import { RegisterFormState } from "./register.interface";

import { register } from "@/_dal/auth.dal";
import { redirect } from "next/navigation";

export async function onRegisterAction(
    state: RegisterFormState,
    data: FormData
): Promise<RegisterFormState> {
    const userEntries = Object.fromEntries(data);
    const parsedValidation = registerSchema.safeParse(userEntries);

    if (!parsedValidation.success) {
        state.fields = userEntries;
        state.errors = parsedValidation.error.flatten().fieldErrors;
        return state;
    }

    const { username, email, password } = parsedValidation.data;
    const response = await register(username, email, password);

    if (response.ok) {
        redirect("/login");
    }
    const body = await response.json();
    return {
        fields: userEntries,
        errors: {},
        message: body.message,
    };
}
