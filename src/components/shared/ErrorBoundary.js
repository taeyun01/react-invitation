import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    // 하위 자식 컴포넌트에서 에러가 발생했을 때 호출되는 메서드
    static getDerivedStateFromError() {
        return { hasError: true }; // hasError 상태 true로 업데이트 (폴백 UI가 보이도록 상태를 업데이트)
    }
    // 에러를 감지해 캐치함
    // 이 에러 메시지는 센트리 같은 로그 시스템에 쌓아 주면 됨
    componentDidCatch(error, errorInfo) {
        console.log('error: ', error);
        console.log('errorInfo: ', errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallbackUI ?? _jsx("h1", { children: "\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4." }); // fallbackUI가 없다면 공통 ui 표출
        }
        return this.props.children; // 에러가 발생하지 않았다면 children 반환
    }
}
export default ErrorBoundary;
