import React from 'react';
import {Card, useToasts} from "@geist-ui/core";
import {ToastTypes} from "@geist-ui/core/dist/use-toasts";

const CopyCard = ({text}: { text: string }) => {
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
        <Card type={undefined} hoverable onClick={() => copyHandler(text)}>
            <span>
                {text}
            </span>
        </Card>

    );
};

export default CopyCard