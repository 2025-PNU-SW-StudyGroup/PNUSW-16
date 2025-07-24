import './Signup2.css'
import { useNavigate, useLocation } from 'react-router-dom';

function Signup2() {
  const navigate = useNavigate();
  const location = useLocation();
  const gender = location.state?.gender;

  const handleAgeClick = (age) => {
    navigate('/signup3', { state: { gender, age } });
  };

  return (
    <div className="container">
      <h2>해당하는 항목을 선택해 주세요.</h2>
      <div className="selected-gender">{gender}</div>

      <div className="button-group">
        <button className="age-button" onClick={() => handleAgeClick("10대")}>10대</button>
        <button className="age-button" onClick={() => handleAgeClick("20대")}>20대</button>
      </div>
      <div className="button-group">
        <button className="age-button" onClick={() => handleAgeClick("30대")}>30대</button>
        <button className="age-button" onClick={() => handleAgeClick("40대")}>40대</button>
      </div>
      <div className="button-group">
        <button className="age-button" onClick={() => handleAgeClick("50대")}>50대</button>
        <button className="age-button" onClick={() => handleAgeClick("그 외")}>그 외</button>
      </div>
    </div>
  );
}

export default Signup2;

