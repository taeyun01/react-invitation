import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { parseISO, format, getDay } from 'date-fns';
import classNames from 'classnames/bind';
import styles from './Heading.module.scss';
import Section from '../shared/Section';
const cx = classNames.bind(styles);
const DAYS = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
];
const Heading = ({ date }) => {
    const weddingDate = parseISO(date);
    // console.log(DAYS[getDay(weddingDate)])
    return (_jsxs(Section, { className: cx('container'), children: [_jsx("div", { className: cx('date'), children: format(weddingDate, 'yy. MM. dd') }), _jsx("div", { className: cx('day'), children: DAYS[getDay(weddingDate)] })] }));
};
export default Heading;
