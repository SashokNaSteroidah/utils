"use client"

import React, {useState} from 'react';
import {Button, Text, Textarea} from "@geist-ui/core";
import {useCustomToast} from "@/hooks/toast/toast";
import CopyCard from "@/components/copy/copyCard";

const DecodeBase64 = (): React.ReactNode => {
    const [textArea, setTextArea] = useState("")
    const [json, setJson] = useState("")
    const showToast = useCustomToast();
    const updateOutput = () => {
        try {
            const toJson = JSON.parse(textArea)
            const jsonOutput = JSON.stringify(toJson, null, 4)
            console.log(toJson)
            setJson(jsonOutput)
            showToast('Успешно.', "success");
        } catch (e) {
            showToast('Невалидный JSON.', "error");
        }
    }

    return (
        <div style={{textAlign: "center"}}>
            <Text h2 style={{margin: "10px 0 30px 0"}}>JSON</Text>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{margin: "0 0 20px 0"}}>
                    <Textarea value={textArea} onChange={event => setTextArea(event.target.value)}/>
                </div>
                <Button placeholder={undefined} onClick={() => updateOutput()}>
                    Beautify
                </Button>
                <div style={{
                    whiteSpace: "pre",
                    fontFamily: "monospace",
                    textAlign: "left",
                    margin: "20px 0 0 0"
                }}>
                    <CopyCard height="400px" text={json} />
                </div>
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