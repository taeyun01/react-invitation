import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames/bind';
import styles from './Section.module.scss';
const cx = classNames.bind(styles);
const Section = ({ children, className, title, }) => {
    return (_jsxs("section", { className: cx(['container', className]), children: [title && _jsx("div", { className: cx('title'), children: title }), children] }));
};
export default Section;
