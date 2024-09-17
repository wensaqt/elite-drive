import { FieldValues } from "react-hook-form";

export interface RegisterFormState {
    fields: FieldValues;
    errors?: {
        username?: string[] | undefined;
        email?: string[] | undefined;
        password?: string[] | undefined;
    };
    message: string | null;
}
