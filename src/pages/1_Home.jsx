import Header from "../components/Header";
import Nav from "../components/Nav";
import './Home.css';
import { useState } from "react";

function Home(){
    const districts = [
    '강서구', '금정구', '기장군', '남구', '동구',
    '동래구', '부산진구', '북구', '사상구', '사하구',
    '서구', '수영구', '연제구', '영도구', '중구',
    '해운대구', '전체'
    ];
    const topicsByDistrict = {
    강서구: ['을숙도', '에코센터', '낙동강변', '자전거길', '관광농원'],
    금정구: ['범어사', '금정산성', '부산대맛집', '산성마을', '온천'],
    기장군: ['해동용궁사', '기장시장', '일광해수욕장', '빵지순례', '오시리아'],
    남구: ['이기대', 'UN기념공원', '문현동맛집', '경성대', '광안대교뷰'],
    동구: ['168계단', '차이나타운', '초량이바구길', '뷰카페', '동대신동'],
    동래구: ['온천장', '동래읍성', '사직야구장', '스파', '시장투어'],
    부산진구: ['서면역', '쇼핑', '데이트코스', '맛집골목', '영화관'],
    북구: ['화명수목원', '덕천맛집', '화명천', '생태공원', '카페거리'],
    사상구: ['삼락생태공원', '르네시떼', '감전동시장', '자전거길', '야외촬영지'],
    사하구: ['다대포해수욕장', '낙조', '몰운대', '송도해상케이블카', '구덕산'],
    서구: ['송도해수욕장', '암남공원', '천마산로프웨이', '카페촌', '전망대'],
    수영구: ['광안리해변', '카페거리', '수영사적공원', '민락수변공원', '밤산책'],
    연제구: ['시청', '연산동맛집', '거제동카페', '문화회관', '운동시설'],
    영도구: ['흰여울문화마을', '영도다리', '태종대', '조도전망대', '카페투어'],
    중구: ['자갈치시장', '국제시장', '용두산공원', '남포동거리', '먹거리골목'],
    해운대구: ['해수욕장', '맛집', '카페거리', '호텔', '펜션'],
    전체: ['부산여행', '축제', '바다', '먹거리', '사진명소'],
    };


    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [topics, setTopics] = useState([]);

    const handleClick = (district) => {
            setSelectedDistrict(district);
            setTopics(topicsByDistrict[district] || []);
            console.log(`${district} 선택`);
    };

    const handleReset = () => {
        setSelectedDistrict(null);
        setTopics([]);
    };


    return (
        <>
        <Header></Header>
        <div className="container">
            <div className="part_ad">
                event or ad
            </div>
            <div className="part_rising">
                <div className="rising_header">
                    <div className="title_box">
                        {selectedDistrict ? `${selectedDistrict}의 인기 topic` : "관심 있는 장소"}
                    </div>

                    {!selectedDistrict &&( <p>* 관심 있는 구를 선택하세요.</p> )}
                    {selectedDistrict && (
                        <div className="topic-tap" onClick={handleReset}>전체</div>
                    )}
                </div>

                <div className="check_area">
                    {!selectedDistrict && (
                    <div className="area_list">
                        {districts.map((district) => (
                            <button
                            key={district}
                            onClick={() => handleClick(district)}
                            className={`district-button ${selectedDistrict === district ? 'selected' : ''}`}>
                            {district}
                            </button>
                        ))}
                    </div>
                    )}
                    {selectedDistrict &&(
                        <div className="topic-container">
                            <ul className="topic-list">
                            {topics.map((topic, index) => (
                                <li key={index} className="topic-item">
                                {index + 1}위. {topic}
                                </li>
                            ))}
                            </ul>
                        </div>
                    )} 
                </div>
            </div>
        </div>
        <Nav></Nav>
        </>

    )
}

export default Home;