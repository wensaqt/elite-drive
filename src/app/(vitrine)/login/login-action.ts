import { FormState } from "react-hook-form";
import { loginSchema } from "@/app/common/schemas/auth-schema";
import { LoginOutputType } from "@/app/common/types/auth.types";

export async function onSubmitAction(
    data: FormData
): Promise<Partial<FormState<LoginOutputType>>> {
    const validation = loginSchema.safeParse(data);

    console.log("validation: ", validation);

    if (!validation.success) {
        return data;
    }

    return {
        isValid: true,
    };
}
