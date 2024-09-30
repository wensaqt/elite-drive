import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ButtonLink({ text, href }: { text: string; href: string }) {
	return (
		<Button className="text-zinc-400 font-light" variant="link" asChild>
			<Link href={href}>{text}</Link>
		</Button>
	);
}
