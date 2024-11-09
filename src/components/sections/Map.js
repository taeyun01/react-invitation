import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames/bind';
import styles from './Map.module.scss';
import Section from '../shared/Section';
import { useEffect, useRef } from 'react';
const cx = classNames.bind(styles);
// 카카오맵은 소문자 kakao 객체고, 카카오톡공유는 대문자 Kakao 이므로 주의
const Map = ({ location }) => {
    const mapContainer = useRef(null);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_APP_KAKAO_API_KEY}&autoload=false`; // 카카오맵 API를 사용하기 위한 JavaScript SDK 로드. autoload=false: 스크립트 로드 후 자동으로 초기화하지 않도록 설정
        script.async = true; // 스크립트를 비동기로 로드 (스크립트를 비동기로 불러온다는 것은 렌더링을 방해하지 않는다는 것을 의미)
        // 컴포넌트가 렌더링이 끝나고 자바스크립트를 불러올 수 있을 때, 스크립트가 로드될 시점에 비동기적으로 호출하고 그리고 받아온것을 사용하겠다.
        document.head.appendChild(script); // 스크립트를 헤드에 추가
        // 스크립트가 로드되면 실행되는 함수 (autoload=false를 해줘서 불러온 시점에 실행)
        script.onload = () => {
            //window.kakao.maps 얘는 카카오가 준비됐을때 사용할 수 있다. 위에서 외부 스크립트를 비동기적으로 불러오고 있다 보니까. 이 실행 시점을 컨트롤 할 수 없는데, autoload=false를 해주면 미리 로드하는 걸 방지하고, 일단 불러온 다음에 실행할 수 있다. (로드 시점을 컨트롤 할 수 있게 된다.)
            window.kakao.maps.load(() => {
                // console.log('카카오맵 API 로드 완료')
                // 지도 그려주기
                // 위도와 경도 좌표로 지도의 중심 위치 생성
                const position = new window.kakao.maps.LatLng(location.lat, location.lng);
                // 지도 생성 옵션 설정
                const options = {
                    center: position, // center: 지도의 중심 좌표
                    level: 3, // level: 지도의 확대 레벨 (1~14, 작을수록 확대)
                };
                // 결혼식장 위치를 표시할 마커 생성
                const marker = new window.kakao.maps.Marker({
                    position, // position에 마커의 위치 설정
                });
                const map = new window.kakao.maps.Map(mapContainer.current, options); // 지정된 HTML 요소에 지도 생성
                marker.setMap(map); // 생성된 지도에 마커 표시
            });
        };
    }, []);
    return (_jsxs(Section, { title: _jsx(MapLocation, { location: location }), className: cx('container'), children: [_jsxs("div", { className: cx('wrap-map'), children: [_jsx("div", { className: cx('map'), ref: mapContainer }), _jsx("a", { className: cx('find-map'), href: location.link, target: "_blank", children: "\uAE38\uCC3E\uAE30" })] }), _jsxs("div", { children: [_jsx(WayToCome, { label: "\uBC84\uC2A4", list: location.waytocome.bus }), _jsx(WayToCome, { label: "\uC9C0\uD558\uCCA0", list: location.waytocome.metro })] })] }));
};
const MapLocation = ({ location }) => {
    return (_jsxs("div", { className: cx('wrap-location'), children: [_jsx("span", { className: cx('title'), children: "\uC624\uC2DC\uB294 \uAE38" }), _jsx("span", { className: cx('sub-title'), children: location.name }), _jsx("span", { className: cx('sub-title'), children: location.address })] }));
};
const WayToCome = ({ label, list, }) => {
    return (_jsxs("div", { className: cx('wrap-waytocome'), children: [_jsx("div", { className: cx('label'), children: label }), _jsx("ul", { children: list.map((waytocome, index) => (_jsx("li", { children: waytocome }, index))) })] }));
};
export default Map;
