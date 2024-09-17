import { FieldValues } from "react-hook-form";

export interface LoginFormState {
    fields: FieldValues;
    errors?: {
        email?: string[] | undefined;
        password?: string[] | undefined;
    };
    message: string | null;
}
