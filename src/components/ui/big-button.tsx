import { Button } from "@/components/ui/button";

const BigButton = ({ text }: { text: string }) => {
    return (
        <Button className="hover:text-black font-bold py-6 px-12 text-[#f2dea1] bg-transparent rounded-lg border border-[#f2dea1] hover:bg-[#f2dea1] hover:border-black transition-colors duration-300">
            {text}
        </Button>
    );
};

export default BigButton;
