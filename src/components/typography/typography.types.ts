import { LucideProps } from "lucide-react";
import { ReactElement } from "react";

export interface TypographyProps {
    text: string;
    icon?: ReactElement<LucideProps>;
    iconSize?: number;
}
