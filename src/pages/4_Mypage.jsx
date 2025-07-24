import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import './Mypage.css';

function Mypage() {
  const location = useLocation();
  const [showsaved, setShowsaved] = useState(false);
  const [savedPlaces, setsavedPlaces] = useState([
    '저장된 장소 1',
    '저장된 장소 2',
    '저장된 장소 3',
    '저장된 장소 4',
    '저장된 장소 5',
    '저장된 장소 6',
    '저장된 장소 7',
    '저장된 장소 8',
    '저장된 장소 9',
    '저장된 장소 10',
  ]);

  const handleRemove = (index) => {
    setsavedPlaces((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setShowsaved(false);
  }, [location.key]);

  return (
    <>
      <div className="appContainer">
        <Header />
        <div className="mypageContainer">
          {!showsaved ? (
            <>
              <div className="profile">
                <div className="profileIcon"></div>
                <div className="profileName">울라울라</div>
                <div className="profileEmail">ullalulla@naver.com</div>
              </div>
              <div className="profileButtonContainer">
                <button className="profileButton">프로필 수정</button>
                <button className="profileButton">로그아웃</button>
              </div>
              <button className="savedButton" onClick={() => setShowsaved(true)}>
                ★ 저장된 장소
              </button>
              <button className="normalButton">맞춤 정보 수정</button>
              <button className="normalButton">개인정보 수정</button>
              <button className="normalButton">환경설정</button>
              <button className="normalButton">앱 정보 및 이용 약관</button>
            </>
          ) : (
            <>
              <div className="savedContainer">
                <div className="savedHeader">
                  <h2 className="savedTitle">저장된 데이트 장소</h2>
                  <p className="infoText">별을 누르면 목록에서 삭제됩니다.</p>
                </div>
                {savedPlaces.map((place, idx) => (
                  <div key={idx} className="itemContainer">
                    <div className="itemHeader">
                      <div className="itemTitle">{place}</div>
                      <span className="star" onClick={() => handleRemove(idx)}>
                        ★
                      </span>
                    </div>
                    <div className="itemBox"></div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <Nav />
      </div>
    </>
  );
}

export default Mypage;
