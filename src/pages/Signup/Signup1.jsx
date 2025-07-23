import './Signup1.css';
import { useNavigate } from 'react-router-dom'; // ✅ 이거 꼭 필요해!

function Signup1() {
  const navigate = useNavigate(); // ✅ 페이지 이동을 위한 함수

  const handleGenderClick = (gender) => {
    navigate('/signup2', { state: { gender } }); // ✅ 성별 정보를 다음 페이지로 전달
  };

  return (
    <div className="container">
      <h2>해당하는 항목을 선택해 주세요.</h2>
      <div className="button-group">
        <button className="gender-button" onClick={() => handleGenderClick("여성")}>여성</button>
        <button className="gender-button" onClick={() => handleGenderClick("남성")}>남성</button>
      </div>
    </div>
  );
}

export default Signup1;
