import { useEffect, useState } from "react";

const { kakao } = window;

function MapLevelChange() {

    const [kakaoMap, setKakaoMap] = useState(null);

    useEffect(() => {
        const container = document.getElementById('map');           // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center : new kakao.maps.LatLng(33.450701, 126.570667),  // 지도의 중심좌표
            level : 3                                               // 지도의 확대 레벨                             
        };
        const map = new kakao.maps.Map(container, options);         // 지도 생성 및 객체 리턴
        setKakaoMap(map);
    },
    []
    )

    const onClickZoomIn = () => {
        // 현재 지도의 레벨을 얻어옴
        const level = kakaoMap.getLevel();
        // 지도를 1레벨 내림 (지도 확대)
        kakaoMap.setLevel(level - 1);
        // 지도 레벨 표시
        displayLevel();
    };

    const onClickZoomOut = () => {
        // 현재 지도의 레벨을 얻어옴
        const level = kakaoMap.getLevel();
        // 지도를 1레벨 올림 (지도 축소)
        kakaoMap.setLevel(level + 1);
        // 지도 레벨 표시
        displayLevel();
    };

    const displayLevel = () => {
        const levelEl = document.getElementById('maplevel');
        levelEl.innerHTML = '현재 지도 레벨은  ' + kakaoMap.getLevel() + '레벨 입니다.';
    };

    return (
        <>
            <h1>Kakao Map 이동시키기</h1>
            <p>
                <button onClick={onClickZoomIn}>지도레벨 - 1</button>
                <button onClick={onClickZoomOut}>지도레벨 + 1</button>
                <span id="maplevel"></span>
            </p>
            <div id="map" style={{
                width: '500px',
                height: '500px'
            }}></div>
        </>
    );
}

export default MapLevelChange;