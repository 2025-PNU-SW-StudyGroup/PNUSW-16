import './Signup1.css';
import { useNavigate } from 'react-router-dom';

function Signup1() {
  const navigate = useNavigate(); // 

  const handleGenderClick = (gender) => {
    navigate('/signup2', { state: { gender } }); // 
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
