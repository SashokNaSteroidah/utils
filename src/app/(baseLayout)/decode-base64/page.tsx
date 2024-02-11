"use client"

import React, {useState} from 'react';
import {Button, Text, Textarea} from "@geist-ui/core";
import CopyCard from "@/components/copy/copyCard";
import {useCustomToast} from "@/hooks/toast/toast";

const DecodeBase64 = (): React.ReactNode => {
    const [textArea, setTextArea] = useState("")
    const [result, setResult] = useState("")
    const showToast = useCustomToast();

    const decode = (): void => {
        try {
            const result = atob(textArea)
            setResult(result)
            showToast('Декодирование успешно.', "success");
            return
        } catch (e) {
            showToast('Не валидное значение.', "error");
        }
    }

    const keyDecrypt = (event: React.KeyboardEvent<string>): void => {
        if (event.key === "Enter") {
            event.preventDefault()
            decode()
        }
    }

    return (
        <div style={{textAlign: "center"}}>
            <Text h2 style={{margin: "10px 0 30px 0"}}>base64</Text>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{margin: "0 0 20px 0"}}>
                    <Textarea value={textArea} onChange={event => setTextArea(event.target.value)}
                              onKeyDown={(event) => keyDecrypt(event)} placeholder="Введите base64..."/>
                </div>
                <div style={{margin: "0 0 20px 0"}}>
                    <Button type="success" placeholder={undefined} onClick={() => decode()}>
                        decode
                    </Button>
                </div>
                <CopyCard text={result} height="200px"/>
            </div>
            <div style={{margin: "20px 0 0"}}>
                <Text small>
                    Generate by atob (webAPI)
                </Text>
            </div>
        </div>
    );
};

export default DecodeBase64;