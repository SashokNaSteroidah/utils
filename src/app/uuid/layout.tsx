import React from 'react';
import type {Metadata} from "next";
import Title from "@/components/title/title";

export const metadata: Metadata = {
    title: "Utils | Generate UUID",
    description: "utils for generate UUID",
};
const UuidLayout = ({children}: {children: React.ReactNode}): React.ReactNode => {
    return (
        <>
            <Title text="Генератор" />
            {children}
        </>
    );
};

export default UuidLayout;