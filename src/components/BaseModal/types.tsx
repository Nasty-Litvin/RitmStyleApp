export interface BaseModalProps {
    open: boolean;
    handleClose: () => void;
    titleModal: string;
    content?: string;
    btn?: boolean;
}