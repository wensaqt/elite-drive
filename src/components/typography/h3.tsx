import React from "react";
import { TypographyProps } from "./typography.types";

const TypographyH3: React.FC<TypographyProps> = ({
    text,
    icon,
    iconSize = 16,
}) => {
    return (
        <h3 className="flex items-center text-2xl font-semibold tracking-tight text-white">
            {icon &&
                React.cloneElement(icon, {
                    size: iconSize,
                    className: "mr-2",
                    strokeWidth: 3,
                })}
            <p>{text}</p>
        </h3>
    );
};

export default TypographyH3;
