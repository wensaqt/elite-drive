import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().trim().email({
        message: "A valid email is required.",
    }),
    password: z.string().min(1, {
        message: "Password is required.",
    }),
});

export const registerSchema = z.object({
    username: z.string().min(3, {
        message: "Username should be at least 3 characters long.",
    }),
    email: z.string().trim().email({
        message: "A valid email is required.",
    }),
    password: z
        .string()
        .min(8, {
            message: "Password must be at least 8 characters long.",
        })
        .refine((value) => /[A-Z]/.test(value), {
            message: "Password must contain at least one uppercase letter.",
        })
        .refine((value) => /[a-z]/.test(value), {
            message: "Password must contain at least one lowercase letter.",
        })
        .refine((value) => /\d/.test(value), {
            message: "Password must contain at least one digit.",
        })
        .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
            message: "Password must contain at least one special character.",
        }),
});
