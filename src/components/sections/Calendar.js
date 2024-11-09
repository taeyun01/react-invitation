import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames/bind';
import styles from './Calendar.module.scss';
import Section from '../shared/Section';
import { parseISO, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { memo } from 'react';
const cx = classNames.bind(styles);
const Calendar = ({ date }) => {
    const weddingDate = parseISO(date);
    const formattedDate = format(weddingDate, 'yyyy.MM.dd');
    const formattedTime = format(weddingDate, 'aaa h시 eeee', { locale: ko });
    return (_jsx(Section, { title: _jsx(CalendarHeader, { formattedDate: formattedDate, formattedTime: formattedTime }), className: cx('container'), children: _jsxs("div", { className: cx('wrap-calendar'), children: [_jsx("style", { children: css }), _jsx(DayPicker, { mode: "single", locale: ko, month: weddingDate, selected: weddingDate, formatters: {
                        formatCaption: () => '',
                    } })] }) }));
};
const CalendarHeader = ({ formattedDate, formattedTime, }) => {
    return (_jsxs("div", { className: cx('wrap-header'), children: [_jsx("span", { className: cx('date'), children: formattedDate }), _jsx("span", { className: cx('time'), children: formattedTime })] }));
};
const css = `
  .rdp-root {
    --rdp-today-color: var(--red);
  }

  .rdp-nav,
  .rdp-month_caption {
    display: none;
  }

  .rdp-day_button {
    cursor: default;
  }

  .rdp-selected > .rdp-day_button {
    border-color: var(--red);
  }
`;
export default memo(Calendar);
