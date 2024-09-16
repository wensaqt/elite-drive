import { z } from "zod";
import { emailSchema, passwordSchema, usernameSchema } from "./inputs-schema";

export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

export const registerSchema = z.object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
});
