"use server";

import { registerSchema } from "@/app/common/schemas/auth-schema";
import { RegisterFormState } from "./register.interface";
import { register } from "@/data-access-layers/user.dal";

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
    state.response = response;
    return state;
}
