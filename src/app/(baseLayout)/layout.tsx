import React from 'react';
import TabsComponents from "@/components/tabs/tabs";
import Center from "@/components/center/Center";

const Layout = ({children}: {children: React.ReactNode}): React.ReactNode => {
    return (
        <>
            <TabsComponents />
            <Center>
                {children}
            </Center>
        </>
    );
};

export default Layout;