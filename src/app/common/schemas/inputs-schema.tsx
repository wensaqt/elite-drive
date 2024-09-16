import { z } from "zod";

export const emailSchema = z.string().trim().email({
    message: "A valid email address is required.",
});

export const usernameSchema = z
    .string()
    .min(3, {
        message: "Username must be at least 3 characters long.",
    })
    .max(20, {
        message: "Username must not exceed 20 characters.",
    })
    .regex(/^[a-zA-Z0-9_-]+$/, {
        message:
            "Username can only contain letters, numbers, hyphens, and underscores.",
    });

export const passwordSchema = z
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
    });
