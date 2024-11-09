import React from 'react';
interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallbackUI?: React.ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
}
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): string | number | boolean | Iterable<React.ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
export default ErrorBoundary;
