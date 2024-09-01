import Header from "@/components/base/header";
import "../../style/globals.css";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-col w-screen h-screen">
                <Header />
                <main className="h-full w-full">{children}</main>
            </body>
        </html>
    );
}
