import React from 'react';
import type {Metadata} from "next";
import Title from "@/components/title/title";

export const metadata: Metadata = {
    title: "Utils | decode base64",
    description: "utils for decode base64",
};
const UuidLayout = ({children}: {children: React.ReactNode}): React.ReactNode => {
    return (
        <>
            <Title text="Декодирование" />
            {children}
        </>
    );
};

export default UuidLayout;