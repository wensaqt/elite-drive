import { NextResponse } from "next/server";
import { FieldValues } from "react-hook-form";

export interface RegisterFormState {
    fields: FieldValues;
    errors?: {
        username?: string[] | undefined;
        email?: string[] | undefined;
        password?: string[] | undefined;
    };
}
