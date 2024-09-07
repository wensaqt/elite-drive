import React from "react";
import { TypographyProps } from "./typography.types";

interface TypographyH3Props extends TypographyProps {}

const TypographyH3: React.FC<TypographyH3Props> = ({ text }) => {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-white">
            {text}
        </h3>
    );
};

export default TypographyH3;
