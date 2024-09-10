import Header from "@/components/base/header";
import "../../style/globals.css";
import BreakpointIndicator from "@/components/dev/breakpoint-indicator";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-col h-screen w-screen bg-zinc-950">
                <Header />
                <main className="flex-grow">{children}</main>
                <BreakpointIndicator />
            </body>
        </html>
    );
}
