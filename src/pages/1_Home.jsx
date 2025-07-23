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

    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const handleClick = (district) => {
            setSelectedDistrict(district);
            console.log(`${district} 선택`);
    };

    return (
        <>
        <Header></Header>
        <div className="container">
            <div className="part_ad">
                event or ad
            </div>
            <div className="rising_topic">
                <div className="rising_title">
                    <div className="title_box">지금 뜨는 분야</div>
                    <p>* 관심 있는 구를 선택하세요.</p>
                </div>

                <div className="check_area">
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
                </div>
            </div>
        </div>
        <Nav></Nav>
        </>

    )
}

export default Home;