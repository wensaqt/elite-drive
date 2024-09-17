import { z } from "zod";
import {
    emailSchema,
    passwordSchema,
    usernameSchema,
} from "../schemas/inputs-schema";

export type EmailFormat = z.infer<typeof emailSchema>;
export type UsernameFormat = z.infer<typeof usernameSchema>;
export type PasswordFormat = z.infer<typeof passwordSchema>;
