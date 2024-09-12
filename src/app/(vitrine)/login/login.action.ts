"use server";
import { loginSchema } from "@/app/common/schemas/auth-schema";

interface ValidationResult {
    message?: string;
    fields?: Record<string, string>;
    issues?: string[];
}

export async function onSubmitAction(
    // adding prevState to avoid type error on useFormState call
    prevState: ValidationResult,
    data: FormData
): Promise<ValidationResult> {
    const objectData = Object.fromEntries(data);
    const parsed = loginSchema.safeParse(objectData);

    if (!parsed.success) {
        const fields: Record<string, string> = {};
        for (const key of Object.keys(objectData)) {
            fields[key] = objectData[key].toString();
        }
        return {
            message: "Invalid form data.",
            fields,
            issues: parsed.error.issues.map((issue) => issue.message),
        };
    }
    if (parsed.data.email.includes("a")) {
        return {
            message: "Invalid email.",
        };
    }

    // should try login here instead of returning message
    return {
        message: "User logged!",
    };
}
