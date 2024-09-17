import "../../style/globals.css";

export default function VitrineLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="h-screen w-screen">{children}</main>
            </body>
        </html>
    );
}
