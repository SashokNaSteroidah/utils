import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
import "../styles/global.sass"

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Utils app",
    description: "utils for generate data",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
