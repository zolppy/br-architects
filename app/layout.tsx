import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const roboto = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "BR Architects",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati, autem fugiat quas, atque quidem unde itaque earum repellendus modi ea vero quod debitis minima fuga rem reiciendis distinctio dolore.",
    icons: "/favicon.ico",
    authors: [{ name: "Gabriel Cavalcante de Jesus Oliveira" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased ${roboto.className}`}>
                {children}
            </body>
            <GoogleAnalytics gaId="G-3MLC7LYZ17" />
        </html>
    );
}
