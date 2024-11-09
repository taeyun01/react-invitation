import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames/bind';
import styles from './Accordion.module.scss';
import { useState } from 'react'; // children은 알아서 타입 추론
const cx = classNames.bind(styles);
const Accordion = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };
    return (_jsxs("div", { className: cx(['wrap-accordion', isOpen && 'open']), children: [_jsxs("div", { className: cx('wrap-header'), onClick: handleClick, children: [_jsx("span", { children: label }), _jsx(ArrowDownIcon, { className: cx('arrow-down-icon') })] }), _jsx("div", { className: cx('wrap-content'), children: children })] }));
};
const ArrowDownIcon = ({ className }) => {
    return (_jsx("svg", { className: className, viewBox: "0 0 512 512", children: _jsx("polygon", { points: "396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " }) }));
};
export default Accordion;
