"use server";
import { login } from "@/data-access-layers/user.dal";
import { loginSchema } from "@/app/common/schemas/auth-schema";
import { LoginFormState } from "./login.interface";

export async function onLoginAction(
    state: LoginFormState,
    data: FormData
): Promise<LoginFormState> {
    const userEntries = Object.fromEntries(data);
    const parsedValidation = loginSchema.safeParse(userEntries);

    if (!parsedValidation.success) {
        state.fields = userEntries;
        state.errors = parsedValidation.error.flatten().fieldErrors;
        return state;
    }

    const { email, password } = parsedValidation.data;

    login(email, password);
    return state;
}
