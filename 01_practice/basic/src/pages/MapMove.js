import { useEffect, useState } from "react";

const { kakao } = window;

function MapMove() {

    const [kakaoMap, setKakaoMap] = useState(null);

    useEffect(() => {
        const container = document.getElementById('map');           // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center : new kakao.maps.LatLng(33.450701, 126.570667),  // 지도의 중심좌표.
            level : 3                                               
        };
        const map = new kakao.maps.Map(container, options);         // 지도 생성 및 객체 리턴
        setKakaoMap(map);
    },
    []
    )

    const onClickSetCenter = () => {
        // 이동할 위도 경도 위치를 생성
        const moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
        // 지도 중심을 이동 시킴
        kakaoMap.setCenter(moveLatLon);
    };

    const onClickPanTo = () => {
        // 이동할 위도 경도 위치를 생성
        const moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);
        // 지도 중심을 부드럽게 이동시킴
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동
        kakaoMap.panTo(moveLatLon);
    }

    

    return (
        <>
            <h1>Kakao Map 이동시키기</h1>
            <p>
                <button onClick={onClickSetCenter}>지도 중심좌표 이동시키기</button>
                <button onClick={onClickPanTo}>지도 중심좌표 부드럽게 이동시키기</button>
            </p>
            <div id="map" style={{
                width: '500px',
                height: '500px'
            }}></div>
        </>
    );
}

export default MapMove;