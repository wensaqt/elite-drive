import { z } from "zod";
import { loginSchema } from "../schemas/auth-schema";

export type LoginOutputType = z.output<typeof loginSchema>;
