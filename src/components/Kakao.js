import React, { useEffect } from "react";

function Kakao({ addr1 }) {
    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
            const map = new window.kakao.maps.Map(container, options);

            // Geocoder를 사용하여 주소를 좌표로 변환
            const geocoder = new window.kakao.maps.services.Geocoder();

            geocoder.addressSearch(addr1, (result, status) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                    map.setCenter(coords);
                    new window.kakao.maps.Marker({
                        map: map,
                        position: coords
                    });
                } else {
                    console.error(`Geocoding failed for address: ${addr1}`);
                }
            });
        } else {
            console.error('Kakao maps SDK is not available.');
        }
    }, [addr1]);

    return (
        <div id="map" style={{
            width: '500px',
            height: '500px'
        }}></div>
    );
}

export default Kakao;
