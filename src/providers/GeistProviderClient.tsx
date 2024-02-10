"use client"

import React from 'react';
import {GeistProvider} from "@geist-ui/core";

const GeistProviderClient = ({children}: {children: React.ReactNode}): React.ReactNode => {
    return (
        <GeistProvider themeType="dark">
            {children}
        </GeistProvider>
    );
};

export default GeistProviderClient;