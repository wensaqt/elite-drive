import React from "react";
import { TypographyProps } from "./typography.types";

interface TypographyMutedProps extends TypographyProps {}

const TypographyMuted: React.FC<TypographyMutedProps> = ({ text }) => {
    return (
        <p className="text-sm text-muted-foreground text-zinc-300">{text}</p>
    );
};

export default TypographyMuted;
