import React from "react";
import { TypographyProps } from "./typography.types";

const TypographyLarge: React.FC<TypographyProps> = ({
    text,
    icon,
    iconSize,
}) => {
    return (
        <div className="flex items-center text-lg font-semibold text-white">
            {icon &&
                React.cloneElement(icon, {
                    size: iconSize,
                    className: "mr-2",
                    strokeWidth: 3,
                })}
            <p>{text}</p>
        </div>
    );
};

export default TypographyLarge;
