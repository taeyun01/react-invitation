import { ComponentProps } from 'react';
import Modal from '../components/shared/Modal';
type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;
interface ModalContextValue {
    open: (options: ModalOptions) => void;
    close: () => void;
}
declare const ModalContext: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useModalContext: () => ModalContextValue;
export default ModalContext;
