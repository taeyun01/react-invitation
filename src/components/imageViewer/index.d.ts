import 'swiper/swiper-bundle.css';
import './swiper.css';
declare const ImageViewer: ({ images, open, selectedIdx, onClose, }: {
    images: string[];
    open: boolean;
    selectedIdx: number;
    onClose: () => void;
}) => import("react/jsx-runtime").JSX.Element | null;
export default ImageViewer;
