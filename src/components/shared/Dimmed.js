import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames/bind';
import styles from './Dimmed.module.scss';
const cx = classNames.bind(styles);
const Dimmed = ({ children }) => {
    return _jsx("div", { className: cx('dimmed'), children: children });
};
export default Dimmed;
