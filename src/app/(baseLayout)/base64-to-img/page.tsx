"use client"

import React, {useState} from 'react';
import {Card, Text, Textarea} from "@geist-ui/core";
import Image from "next/image";

const DecodeBase64 = (): React.ReactNode => {
    const [textArea, setTextArea] = useState("")

    return (
        <div style={{textAlign: "center"}}>
            <Text h2 style={{margin: "10px 0 30px 0"}}>base64</Text>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{margin: "0 0 20px 0"}}>
                    <Textarea value={textArea} onChange={event => setTextArea(event.target.value)} />
                </div>
                <Card>
                    <Image width={200} height={200} src={`data:image/png;base64, ${textArea}`} alt="~"/>
                </Card>
            </div>
            <div style={{margin: "20px 0 0"}}>
                <Text small>
                    Generate by MIME (Images API)
                </Text>
            </div>
        </div>
    );
};

export default DecodeBase64;