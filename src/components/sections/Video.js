import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import Section from '../shared/Section';
const cx = classNames.bind(styles);
const Video = () => {
    return (_jsx(Section, { className: cx('container'), children: _jsxs("video", { autoPlay: true, muted: true, 
            // loop={true}
            // controls={true} // 컨트롤 표시 후 autoplay를 끄면 poster 확인가능
            poster: "/assets/poster.jpg" // 비디오가 로드되기 전에 보여줄 이미지
            , children: [_jsx("source", { src: "/assets/main.webm", type: "video/webm" }), _jsx("source", { src: "/assets/main.mp4", type: "video/mp4" })] }) }));
};
export default Video;
