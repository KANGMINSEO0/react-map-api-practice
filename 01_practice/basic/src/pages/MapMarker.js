import { useEffect, useState } from "react";

const { kakao } = window;

function MapMarker() {

    const [kakaoMap, setKakaoMap] = useState(null);

    useEffect(() => {
        const latitude = 37.520715;
        const longitude = 127.021599;
        const container = document.getElementById('map');           // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center : new kakao.maps.LatLng(latitude, longitude ),  // 지도의 중심좌표.
            // center : new kakao.maps.LatLng(37.29432708770308,126.99658273529194),  // 지도의 중심좌표.
            level : 3                                               
        };
        const map = new kakao.maps.Map(container, options);         // 지도 생성 및 객체 리턴
        setKakaoMap(map);
        const markerPosition = new kakao.maps.LatLng(latitude, longitude );
        // const markerPosition = new kakao.maps.LatLng(37.29432708770308,126.99658273529194);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    },
    []
    )

    return (
        <>
            <h1>Kakao Map 마커 생성하기</h1>
            <div id="map" style={{
                width: '500px',
                height: '500px'
            }}></div>
        </>
    );
}

export default MapMarker;