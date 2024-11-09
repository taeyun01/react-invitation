import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Dimmed from './Dimmed';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Modal = ({ open, title, body, leftButtonLabel = '닫기', rightButtonLabel = '확인', onLeftButtonClick, onRightButtonClick, }) => {
    if (!open)
        return null;
    return (_jsx(Dimmed, { children: _jsx("div", { className: cx('wrap-modal'), children: _jsxs("div", { className: cx('wrap-body'), children: [_jsxs("div", { className: cx('wrap-content'), children: [title && _jsx("div", { className: cx('title'), children: title }), body] }), _jsxs("div", { className: cx('wrap-buttons'), children: [_jsx("button", { onClick: onLeftButtonClick, children: leftButtonLabel }), _jsx("button", { onClick: onRightButtonClick, children: rightButtonLabel })] })] }) }) }));
};
export default Modal;
