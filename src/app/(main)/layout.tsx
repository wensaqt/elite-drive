import Header from "@/components/base/header";
import "../../style/globals.css";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen w-screen bg-zinc-950">
                <Header />
                <main className="flex-grow">{children}</main>
            </body>
        </html>
    );
}
