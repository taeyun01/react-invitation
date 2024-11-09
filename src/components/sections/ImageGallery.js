import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames/bind';
import styles from './ImageGallery.module.scss';
import Section from '../shared/Section';
import ImageViewer from '../imageViewer';
import { useState } from 'react';
import generateImageUrl from '../../utils/generateImageUrl';
const cx = classNames.bind(styles);
const ImageGallery = ({ images }) => {
    const [selectedIdx, setSelectedIdx] = useState(-1);
    const open = selectedIdx !== -1;
    const handleSelectImage = (idx) => {
        setSelectedIdx(idx);
    };
    const handleCloseImageViewer = () => {
        setSelectedIdx(-1);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Section, { title: "\uC0AC\uC9C4\uCCA9", children: _jsx("ul", { className: cx('wrap-images'), children: images.map((image, idx) => (_jsx("li", { className: cx('wrap-image'), onClick: () => handleSelectImage(idx), children: _jsxs("picture", { children: [_jsx("source", { srcSet: generateImageUrl({
                                        fileName: image,
                                        format: 'webp',
                                        option: 'w_240,h_240,q_auto,c_fill',
                                    }), type: "image/webp" }), _jsx("img", { srcSet: generateImageUrl({
                                        fileName: image,
                                        format: 'jpg',
                                        option: 'w_240,h_240,q_auto,c_fill',
                                    }), alt: "\uC0AC\uC9C4\uCCA9 \uC774\uBBF8\uC9C0" })] }) }, `photo-${idx}`))) }) }), _jsx(ImageViewer, { images: images, open: open, selectedIdx: selectedIdx, onClose: handleCloseImageViewer })] }));
};
export default ImageGallery;
