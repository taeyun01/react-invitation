import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames/bind';
import styles from './ImageViewer.module.scss';
const cx = classNames.bind(styles);
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './swiper.css';
import Dimmed from '../shared/Dimmed';
import generateImageUrl from '../../utils/generateImageUrl';
const ImageViewer = ({ images, open = false, selectedIdx, onClose, }) => {
    if (!open) {
        return null;
    }
    return (_jsxs(Dimmed, { children: [_jsx(CloseButton, { className: cx('close-button'), onClose: onClose }), _jsx(Swiper, { spaceBetween: 20, slidesPerView: 1, loop: true, initialSlide: selectedIdx, children: images.map((image) => (_jsx(SwiperSlide, { children: _jsxs("picture", { children: [_jsx("source", { srcSet: generateImageUrl({
                                    fileName: image,
                                    format: 'webp',
                                }), type: "image/webp" }), _jsx("img", { srcSet: generateImageUrl({
                                    fileName: image,
                                    format: 'jpg',
                                }), alt: "\uC0AC\uC9C4\uCCA9 \uC774\uBBF8\uC9C0" })] }) }, image))) })] }));
};
const CloseButton = ({ onClose, className, }) => {
    return (_jsxs("svg", { className: className, onClick: onClose, xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z", fill: "currentColor" }), _jsx("path", { "clip-rule": "evenodd", d: "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z", fill: "currentColor", "fill-rule": "evenodd" })] }));
};
export default ImageViewer;
