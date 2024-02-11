import React from 'react';
import type {Metadata} from "next";
import Title from "@/components/title/title";

export const metadata: Metadata = {
    title: "Utils | encode base64",
    description: "utils for encode base64",
};
const UuidLayout = ({children}: {children: React.ReactNode}): React.ReactNode => {
    return (
        <>
            <Title text="Кодирование" />
            {children}
        </>
    );
};

export default UuidLayout;