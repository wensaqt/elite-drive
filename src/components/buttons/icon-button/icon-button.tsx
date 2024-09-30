import { Button } from "@/components/ui/button";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import React, { ReactElement } from "react";

export default function IconButton({
	icon,
	href,
	onClick,
	className,
}: {
	icon: ReactElement<LucideProps>;
	href?: string;
	onClick?: () => void;
	className: string;
}) {
	if (href)
		return (
			<Button
				className={`hover:text-zinc-900 hover:bg-zinc-700 ${className}`}
				variant="ghost"
				size="icon"
				asChild
				onClick={onClick}
			>
				<Link href={href}>{icon && React.cloneElement(icon)}</Link>
			</Button>
		);

	return (
		<Button
			className={`hover:text-zinc-900 hover:bg-zinc-700 ${className}`}
			variant="ghost"
			size="icon"
			onClick={onClick}
		>
			{icon && React.cloneElement(icon)}
		</Button>
	);
}
