import React from "react";
import { TypographyProps } from "./typography.types";

interface H2TypographyProps extends TypographyProps {}

export const TypographyH2: React.FC<H2TypographyProps> = ({ text }) => {
    return (
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white relative">
            {text}
        </h2>
    );
};
