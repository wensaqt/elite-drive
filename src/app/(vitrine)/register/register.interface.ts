import { NextResponse } from "next/server";
import { FieldValues } from "react-hook-form";

interface RegisterResponse {
    message: string;
    success: boolean;
    email?: string;
    error?: string;
}

export interface RegisterFormState {
    fields: FieldValues;
    errors?: {
        username?: string[] | undefined;
        email?: string[] | undefined;
        password?: string[] | undefined;
    };
    response: NextResponse<RegisterResponse>;
}
