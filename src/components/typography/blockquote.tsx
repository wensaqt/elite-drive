import { TypographyProps } from "./typography.types";

interface TypographyBlockquoteProps extends TypographyProps {}

const TypographyBlockquote: React.FC<TypographyBlockquoteProps> = (props) => {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {props.text}
        </blockquote>
    );
};

export default TypographyBlockquote;
