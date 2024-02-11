import {useToasts} from "@geist-ui/core";
import {ToastTypes} from "@geist-ui/core/dist/use-toasts";

export const useCustomToast = () => {
    const { setToast } = useToasts();

    return (text: string, type: ToastTypes) => {
        setToast({text, type});
    };
};