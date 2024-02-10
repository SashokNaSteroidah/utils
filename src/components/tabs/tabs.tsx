"use client"

import {Tabs} from '@geist-ui/core';
import React from 'react';
import Link from "next/link";
import {MainCards} from "@/feature/mainPage/consts/mainPage.consts";
import {usePathname, useRouter} from "next/navigation";

const TabsComponents = (): React.ReactNode => {
    const router = usePathname();
    const urouter = useRouter();
    return (
        <Tabs style={{position: "fixed", top: "0", width: "100dvw"}} value={router} onChange={(route) => urouter.push(route)}>
            {MainCards.map(links => (
                <Link key={links.id} href={links.link}>
                    <Tabs.Item label={`${links.name} ${links.subName}`} value={links.link}></Tabs.Item>
                </Link>
            ))}
        </Tabs>
    );
};

export default TabsComponents;