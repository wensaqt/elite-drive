import React from "react";

interface DividerProps {
    weight?: "light" | "bold";
    fading?: "both" | "left" | "right" | "none";
    spacing?: "small" | "regular" | "large";
    opacity?: "full" | "half" | "low";
}

const Divider: React.FC<DividerProps> = ({
    fading = "both",
    spacing = "regular",
    weight = "light",
    opacity = "full",
}) => {
    const getFadingStyle = () => {
        switch (fading) {
            case "both":
                return "bg-gradient-to-r from-transparent via-white to-transparent";
            case "left":
                return "bg-gradient-to-r from-transparent to-white";
            case "right":
                return "bg-gradient-to-l from-transparent to-white";
            case "none":
                return "bg-white";
            default:
                return "bg-gradient-to-r from-transparent via-white to-transparent";
        }
    };

    const getWeightStyle = () => {
        switch (weight) {
            case "light":
                return "h-[1px]";
            case "bold":
                return "h-[2px]";
            default:
                return "h-[1px]";
        }
    };

    const getOpacityStyle = () => {
        switch (opacity) {
            case "full":
                return "opacity-100";
            case "half":
                return "opacity-60";
            case "low":
                return "opacity-30";
            default:
                return "opacity-100";
        }
    };

    const getSpacingStyle = () => {
        switch (spacing) {
            case "small":
                return "my-2";
            case "regular":
                return "my-4";
            case "large":
                return "my-6";
        }
    };

    return (
        <div
            className={`w-full ${getSpacingStyle()} ${getFadingStyle()} ${getWeightStyle()} ${getOpacityStyle()}`}
        ></div>
    );
};

export default Divider;
