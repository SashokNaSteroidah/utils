"use client"

import React, {useEffect, useState} from 'react';
import {Button, Text} from "@geist-ui/core";
import {RefreshCcw} from '@geist-ui/icons'
import CopyCard from "@/components/copy/copyCard";

const UuidPage = (): React.ReactNode => {
    const [uuid, setUuid] = useState<string>("")
    const generateUuid = (): void => {
        setUuid(crypto.randomUUID())
    }

    useEffect(() => {
        generateUuid()
    }, []);

    return (
        <div style={{textAlign: "center"}}>
            <Text h2 style={{margin: "10px 0 30px 0"}}>UUID</Text>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CopyCard text={uuid} height="58px" />
                <Button style={{margin: "0 0 0 20px"}} iconRight={<RefreshCcw/>} auto type="success" onClick={() => generateUuid()}
                        placeholder={undefined}/>
            </div>
            <div style={{margin: "20px 0 0"}}>
                <Text small>
                    Generate by crypto (webAPI)
                </Text>
            </div>
        </div>
    );
};

export default UuidPage