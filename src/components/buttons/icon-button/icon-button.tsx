import { Button } from "@/components/ui/button";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import React, { ReactElement } from "react";

export default function IconButton({
    icon,
    href,
}: {
    icon: ReactElement<LucideProps>;
    href: string;
}) {
    return (
        <Button
            className="hover:text-zinc-900 hover:bg-zinc-700"
            variant="ghost"
            size="icon"
            asChild
        >
            <Link href={href}>{icon && React.cloneElement(icon)}</Link>
        </Button>
    );
}
