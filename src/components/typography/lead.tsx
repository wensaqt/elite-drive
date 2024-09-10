import { TypographyProps } from "./typography.types";

export const TypographyLead: React.FC<TypographyProps> = ({ text }) => {
    return (
        <p className="text-xl text-muted-foreground text-justify text-zinc-300">
            {text}
        </p>
    );
};
