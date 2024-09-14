import { FieldValues } from "react-hook-form";

export interface LoginState {
    fields: FieldValues;
    errors?: {
        email?: string[] | undefined;
        password?: string[] | undefined;
    };
}
