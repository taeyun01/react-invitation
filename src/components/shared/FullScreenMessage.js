import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './FullScreenMessage.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const FullScreenMessage = ({ type }) => {
    return (_jsx("div", { className: cx('container'), children: type === 'loading' ? (_jsx(HeartIcon, {})) : (_jsxs(_Fragment, { children: [_jsx(ErrorIcon, {}), _jsx("p", { children: "\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC5B4\uC694. \uC7A0\uC2DC\uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694." })] })) }));
};
const HeartIcon = () => {
    return (_jsx("svg", { className: cx('heart-icon'), version: "1.1", viewBox: "0 0 25 25", xmlns: "http://www.w3.org/2000/svg", children: _jsx("g", { transform: "translate(0 -1028.4)", children: _jsx("path", { d: "m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" }) }) }));
};
const ErrorIcon = () => {
    return (_jsxs("svg", { className: cx('error-icon'), stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M0 0h24v24H0z", fill: "none", stroke: "none" }), _jsx("path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2" }), _jsx("path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }), _jsx("path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }), _jsx("path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2" }), _jsx("path", { d: "M9 10h.01" }), _jsx("path", { d: "M15 10h.01" }), _jsx("path", { d: "M9.5 15.05a3.5 3.5 0 0 1 5 0" })] }));
};
export default FullScreenMessage;
