import React from 'react';
import {Card, Tooltip} from "@geist-ui/core";
import {ToastTypes} from "@geist-ui/core/dist/use-toasts";
import {useCustomToast} from "@/hooks/toast/toast";

interface ICopyCardProps {
    text: string,
    height?: string,
}

const CopyCard = ({text, height}: ICopyCardProps) => {
    const showToast = useCustomToast();

    const handleToast = (type: ToastTypes) => {
        showToast('Текст успешно скопирован.', type);
    };

    const copyHandler = (textToCopy: string): void => {
        try {
            window.navigator.clipboard.writeText(textToCopy).then(() => handleToast("success"))
        } catch (e) {
            window.navigator.clipboard.writeText(textToCopy).then(() => handleToast("error"))
        }
    }
    return (
        <Tooltip text="Нажимите на карточку, чтобы скопировать значение" type="success" placement="bottom" style={{color: "white"}}>
            <Card width="450px" height={height || "58px"} style={{overflow: "auto"}} type={undefined} hoverable
                  onClick={() => copyHandler(text)}>
            <span>
                {text}
            </span>
            </Card>
        </Tooltip>
    );
};

export default CopyCard