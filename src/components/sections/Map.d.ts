import { Location } from '../../models/wedding';
declare global {
    interface Window {
        kakao: any;
    }
}
declare const Map: ({ location }: {
    location: Location;
}) => import("react/jsx-runtime").JSX.Element;
export default Map;
