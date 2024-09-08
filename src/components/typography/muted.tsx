import React, { ReactElement } from "react";
import { TypographyProps } from "./typography.types";
import type { LucideProps } from "lucide-react";

const TypographyMuted: React.FC<TypographyProps> = ({
    text,
    icon,
    iconSize = 16,
}) => {
    return (
        <div className="flex items-center text-sm text-muted-foreground text-zinc-300">
            {icon &&
                React.cloneElement(icon, { size: iconSize, className: "mr-2" })}
            <p>{text}</p>
        </div>
    );
};

export default TypographyMuted;
