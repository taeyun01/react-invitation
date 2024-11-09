import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Section from '../shared/Section';
import Accordion from '../shared/Accordion';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const cx = classNames.bind(styles);
const Contact = ({ groom, bride }) => {
    return (_jsxs(Section, { title: "\uC5F0\uB77D\uCC98 \uBC0F \uB9C8\uC74C \uC804\uD558\uC2E4 \uACF3", className: cx('container'), children: [_jsxs(Accordion, { label: "\uC2E0\uB791\uCE21", children: [_jsx(ContactInfo, { name: groom.name, account: groom.account, phoneNumber: groom.phoneNumber }), _jsx(ContactInfo, { name: groom.parents[0].name, account: groom.parents[0].account, phoneNumber: groom.parents[0].phoneNumber }), _jsx(ContactInfo, { name: groom.parents[1].name, account: groom.parents[1].account, phoneNumber: groom.parents[1].phoneNumber })] }), _jsxs(Accordion, { label: "\uC2E0\uBD80\uCE21", children: [_jsx(ContactInfo, { name: bride.name, account: bride.account, phoneNumber: bride.phoneNumber }), _jsx(ContactInfo, { name: bride.parents[0].name, account: bride.parents[0].account, phoneNumber: bride.parents[0].phoneNumber }), _jsx(ContactInfo, { name: bride.parents[1].name, account: bride.parents[1].account, phoneNumber: bride.parents[1].phoneNumber })] })] }));
};
const ContactInfo = ({ name, account, phoneNumber }) => {
    return (_jsxs("div", { className: cx('wrap-contact'), children: [_jsxs("div", { className: cx('wrap-contact-info'), children: [_jsx("span", { children: `${account.bankName} | ${account.accountNumber}` }), _jsx("span", { children: name }), _jsx("span", { children: phoneNumber })] }), _jsxs("ul", { className: cx('wrap-buttons'), children: [_jsx("li", { children: _jsx("a", { href: `tel:${phoneNumber}`, className: cx('button'), children: "\uC804\uD654" }) }), _jsx("li", { children: _jsx(CopyToClipboard
                        // 요즘은 은행 이름과 계좌번호를 같이 복사해도 알아서 파싱이 되서 두개 같이 복사할 수 있게 해준다.
                        , { 
                            // 요즘은 은행 이름과 계좌번호를 같이 복사해도 알아서 파싱이 되서 두개 같이 복사할 수 있게 해준다.
                            text: `${account.bankName} ${account.accountNumber}`, onCopy: () => {
                                alert('복사가 완료되었습니다.');
                            }, children: _jsx("button", { className: cx('button'), children: "\uBCF5\uC0AC" }) }) }), account.kakaopayLink && (_jsx("li", { children: _jsx("a", { className: cx('button'), href: account.kakaopayLink, target: "_blank", children: "\uC1A1\uAE08" }) }))] })] }));
};
export default Contact;
