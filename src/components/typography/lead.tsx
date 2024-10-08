import { TypographyProps } from "./typography.types";

export const TypographyLead: React.FC<TypographyProps> = ({ text }) => {
    return (
        <p className="lg:text-xl text-md text-muted-foreground text-justify text-zinc-300">
            {text}
        </p>
    );
};
