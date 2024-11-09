import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useMemo, useState, } from 'react';
import Modal from '../components/shared/Modal';
import { createPortal } from 'react-dom';
const Context = createContext(undefined);
const defaultValues = {
    open: false,
    body: null,
    onRightButtonClick: () => { },
    onLeftButtonClick: () => { },
};
const ModalContext = ({ children }) => {
    const [modalState, setModalState] = useState(defaultValues);
    const $portalRoot = document.getElementById('root-portal');
    // 매번 새롭게 생기지 않도록 useCallback 사용
    const open = useCallback((options) => {
        setModalState({ ...options, open: true });
    }, []);
    const close = useCallback(() => {
        setModalState(defaultValues);
    }, []);
    // values도 useMemo로 캐싱
    const values = useMemo(() => ({
        open,
        close,
    }), [open, close]);
    // ContextAPI 같은 경우에는 계속 상태가 업데이트 되면서 하위 자식들을 다 렌더링 시켜버려 성능적으로 안 좋은 부분이 있음(그래서 나중에 useMemo, useCallback 사용)
    return (_jsxs(Context.Provider, { value: values, children: [children, $portalRoot && createPortal(_jsx(Modal, { ...modalState }), $portalRoot)] }));
};
// Context를 사용하기 위해서는 항상 최상단에 감싸줘야함
// 예시) 이런식으로 감싸줘야하는데
// <ModalContext>
//   <App />
// </ModalContext>
// <App />
// 위 처럼 감싸주지 않고 App안에서 useModalContext를 사용하려 했을 때 그럴때는 이 박스의 값을 주입 받지 못해서 값이 없음
// 이럴 경우를 대비해서 감싸주지 않았을때 예외처리
export const useModalContext = () => {
    const values = useContext(Context);
    if (!values) {
        throw new Error('ModalContext안에서 사용해주세요');
    }
    return values; // 조건을 타지 않으면 정상적으로 값을 반환
};
export default ModalContext;
