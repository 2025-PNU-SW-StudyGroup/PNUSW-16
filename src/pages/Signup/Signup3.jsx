import './Signup3.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Signup3() {
  const location = useLocation();
  const gender = location.state?.gender || '성별 미선택';
  const age = location.state?.age || '나이대 미선택';

  const userTypeList = [
    '감성적인','차분한','활발한','독립적인','내향적인','액티비티한','판타지',
    '힐링','모험적인','계획적인','즉흥적인','음악','독서','게임',
    '요리','영화','만화','수영','빈티지','자연친화','트렌디'
  ];

  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleType = (label) => {
    setSelectedTypes(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  const isSelected = (label) => selectedTypes.includes(label);
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (selectedTypes.length >= 3) {
      alert(`성별: ${gender}, 나이대: ${age}, 취향: ${selectedTypes.join(', ')}`);
      navigate('/home')
      // 여기서 서버 전송 또는 다음 페이지 이동 가능
    } else {
      alert("취향을 3개 이상 선택해 주세요!");
    }
  };

  return (
    <div className="container">
      <h2>해당하는 항목을 선택해 주세요.</h2>
      <p className="sub-text">3개 이상</p>

      <div className="selected-info-group">
        <div className="selected-info">{gender}</div>
        <div className="selected-info">{age}</div>
      </div>

      <div className="type">
        {userTypeList.map((label, index) => (
          <button
            key={index}
            className={`type-button ${isSelected(label) ? 'selected' : ''}`}
            onClick={() => toggleType(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        선택 완료
      </button>
    </div>
  );
}

export default Signup3;
