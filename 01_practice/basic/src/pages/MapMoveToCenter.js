import { useEffect, useState } from "react";

const { kakao } = window;

function MapMoveToCenter() {

    const [kakaoMap, setKakaoMap] = useState(null);
    const latitude = 37.520715;
    const longitude = 127.021599;

    useEffect(() => {
        const latitude = 37.520715;
        const longitude = 127.021599;
        const container = document.getElementById('map');           // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center : new kakao.maps.LatLng(latitude, longitude ),  // 지도의 중심좌표.
            level : 2                                               
        };
        const map = new kakao.maps.Map(container, options);         // 지도 생성 및 객체 리턴
        setKakaoMap(map);
        const markerPosition = new kakao.maps.LatLng(latitude, longitude );
        const marker = new kakao.maps.Marker({
            position: markerPosition,
            clickable: true
        });
        marker.setMap(map);
        const iwContent = '<div style="padding:5px;"><p>류니끄</p><br><p>서울특별시 강남구 강남대로 162길 40</p></div>';
        const iwRemoveable = true;
        const iwPosition = new kakao.maps.LatLng(latitude, longitude);
        const infowindow = new kakao.maps.InfoWindow({
            // position : iwPosition,
            // content : iwContent
            content : iwContent,
            removable : iwRemoveable
        });
        kakao.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        } );
    },
    []
    )
    const onClickPanTo = () => {
        // 이동할 위도 경도 위치를 생성
        const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
        // 지도 중심을 부드럽게 이동시킴
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동
        kakaoMap.panTo(moveLatLon);
    }

    return (
        <div>
            <h1>마커로 이동하기</h1>
            <button onClick={onClickPanTo}>마커로 이동</button>
            <div id="map" style={{
                width: '500px',
                height: '500px'
            }}>
            </div>
        </div>
    );
}

export default MapMoveToCenter;