import { TypographyProps } from "./typography.types";

const TypographyBlockquote: React.FC<TypographyProps> = (props) => {
    return (
        <blockquote className="border-l-2 pl-6 italic text-white text-justify">
            {props.text}
        </blockquote>
    );
};

export default TypographyBlockquote;
