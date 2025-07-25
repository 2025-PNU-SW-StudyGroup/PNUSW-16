import Header from "../components/Header";
import Nav from "../components/Nav";
import { Map } from "react-kakao-maps-sdk";
import './Map.css';


function KakaoMap() {
  return (
    <div className="appContainer">
      <Header />
      <div className="mapContainer">
        <div className="mapSection">
          <div className="mapHeader">
            추천 데이트 장소 및 코스를 지도로 확인해 보세요.
          </div>
          <Map
            className="partMap"
            center={{ lat: 35.232298, lng: 129.083592 }}
            level={3}
          />
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default KakaoMap;
