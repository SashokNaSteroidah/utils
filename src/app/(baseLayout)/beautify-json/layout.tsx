import React from 'react';
import type {Metadata} from "next";
import Title from "@/components/title/title";

export const metadata: Metadata = {
    title: "Utils | Beatify json",
    description: "utils for Beatify json",
};
const BeatifyLayout = ({children}: {children: React.ReactNode}): React.ReactNode => {
    return (
        <>
            <Title text="Beautify" />
            {children}
        </>
    );
};

export default BeatifyLayout;