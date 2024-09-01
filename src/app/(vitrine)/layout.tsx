import "../../style/globals.css";

export default function VitrineLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex w-screen h-screen justify-center items-center">
                <main>{children}</main>
            </body>
        </html>
    );
}
