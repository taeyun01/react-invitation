interface ModalProps {
    open: boolean;
    title?: string;
    body: React.ReactNode;
    rightButtonLabel?: string;
    onRightButtonClick?: () => void;
    leftButtonLabel?: string;
    onLeftButtonClick?: () => void;
}
declare const Modal: ({ open, title, body, leftButtonLabel, rightButtonLabel, onLeftButtonClick, onRightButtonClick, }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default Modal;
