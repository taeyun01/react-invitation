declare global {
    interface Window {
        Kakao: any;
    }
}
interface ShareProps {
    groomName: string;
    brideName: string;
    date: string;
}
declare const Share: ({ groomName, brideName, date }: ShareProps) => import("react/jsx-runtime").JSX.Element;
export default Share;
