import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Nav from '../components/Nav';
import Header from '../components/Header';
import './List.css';

function List() {
  const [showDetailPlace, setShowDetailPlace] = useState(false);
  const [favorites, setFavorites] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const locations = ['장소 1', '장소 2', '장소 3', '장소 4', '장소 5', '장소 6', '장소 7', '장소 8', '장소 9', '장소 10'];
  const courses = ['코스 1', '코스 2'];

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    setShowDetailPlace(false);
  }, [location.key]);

  return (
    <>
      <div className="appContainer">
        <Header />
        <div className="listContainer">

          <div className="sectionContainer">
            <div className="sectionHeader">
              <h2 className="sectionTitle">추천 데이트 장소</h2>
              {!showDetailPlace && (
                <button className="detailButton" onClick={() => setShowDetailPlace(true)} type="button">
                  자세히 보기
                </button>
              )}
            </div>

            {!showDetailPlace ? (
              locations.slice(0, 5).map((location, idx) => (
                <div key={idx} className="itemContainer">
                  <div className="itemHeader">
                    <div className="itemTitle">{location}</div>
                  </div>
                  <div className="itemBox"></div>
                </div>
              ))
            ) : (
              <div className="Scroll">
                {locations.map((location, idx) => (
                  <div key={idx} className="itemContainer">
                    <div className="itemHeader">
                      <div className="itemTitle">{location}</div>
                      <span className={`star ${favorites[idx] ? 'fill' : ''}`} onClick={() => toggleFavorite(idx)}>
                        {favorites[idx] ? '★' : '☆'}
                      </span>
                    </div>
                    <div className="itemBox"></div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {!showDetailPlace && (
            <div className="sectionContainer">
              <div className="sectionHeader">
                <h2 className="sectionTitle">추천 데이트 코스</h2>
                <button className="detailButton" type="button" onClick={() => navigate('/map')}>
                  자세히 보기
                </button>
              </div>

              {courses.slice(0, 2).map((course, idx) => (
                <div key={idx} className="itemContainer">
                  <div className="itemHeader">
                    <div className="itemTitle">{course}</div>
                  </div>
                  <div className="itemBoxLarge"></div>
                </div>
              ))}
            </div>
          )}

        </div>
        <Nav />
      </div>
    </>
  );
}

export default List;
