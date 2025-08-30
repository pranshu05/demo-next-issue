import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Next Issue Repository",
    description: "Generated to create next issues",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                {children}
            </body>
        </html>
    );
}