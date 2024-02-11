import React from 'react';
import type {Metadata} from "next";
import Title from "@/components/title/title";

export const metadata: Metadata = {
    title: "Utils | base64 to img",
    description: "utils for convert base64 to image",
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