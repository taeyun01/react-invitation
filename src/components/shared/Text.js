import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
// <Text>{'안녕하세요\n줄바꿈이되나요'}</Text>
// 안녕하세요
// 줄바꿈이되나요
// 줄바꿈을 지원해주는 텍스트 컴포넌트 구현
const Text = ({ children }) => {
    const message = children.split('\n').map((str, idx, array) => {
        return (_jsxs(React.Fragment, { children: [str, idx === array.length - 1 ? null : _jsx("br", {})] }, idx));
    });
    return _jsx("div", { children: message });
};
export default Text;
