import "./style/globals.css";

import "@style/globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-col w-screen h-screen">
                <main>{children}</main>
            </body>
        </html>
    );
}
