export interface ModalMessage {
    title?: string;
    message: string;
    type: string |  'info' | 'question';
    onConfirm?: () => void;
    onReject?: () => void;
}

export interface ModalState {
    isVisible: boolean;
    message: string;
    title?: string;
    type: string | 'info' | 'question';
    onConfirm?: (() => void) | null;
    onReject?:  (() => void) | null;
}

export interface ModalProps {
    modal?: ModalState;
}
