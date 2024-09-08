import React from "react";
import { TypographyProps } from "./typography.types";

export const TypographyH1: React.FC<TypographyProps> = ({ text }) => {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
            {text}
        </h1>
    );
};
