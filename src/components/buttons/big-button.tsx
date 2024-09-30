import React from "react";

interface ButtonProps {
	disabled?: boolean;
	text: string;
	onClick?: () => void;
}

export default function Button({
	disabled = false,
	text,
	onClick,
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`
        font-bold py-6 px-12 rounded-lg border transition-colors duration-300
        ${
					disabled
						? "text-zinc-700 border-zinc-700 cursor-not-allowed"
						: "text-[#f2dea1] bg-transparent border-[#f2dea1] hover:text-black hover:bg-[#f2dea1] hover:border-black"
				}
      `}
		>
			{text}
		</button>
	);
}
