import React from 'react';
import {Card, useToasts} from "@geist-ui/core";
import {ToastTypes} from "@geist-ui/core/dist/use-toasts";

interface ICopyCardProps {
    text: string,
    height?: string
}
const CopyCard = ({text, height}: ICopyCardProps) => {
    const {setToast} = useToasts()
    const handleToast = (type: ToastTypes) => setToast({
        text: 'Текст успешно скопирован.', type
    })

    const copyHandler = (textToCopy: string): void => {
        try {
            window.navigator.clipboard.writeText(textToCopy).then(() => handleToast("success"))
        } catch (e) {

        }
    }
    return (
        <Card width="450px" height={height || "58px"} style={{overflow: "auto"}} type={undefined} hoverable onClick={() => copyHandler(text)}>
            <span>
                {text}
            </span>
        </Card>

    );
};

export default CopyCard