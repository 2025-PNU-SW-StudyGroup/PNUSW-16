import './Login.css'
import mapimage from '../../assets/map.svg';
import kakaoicon from '../../assets/kakaos.svg';
import navericon from '../../assets/navers.svg';
import accounticon from '../../assets/account.svg';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate(); 

    const handleAccountStart = () => {
        navigate('/signup1'); 
    };
    return (
        <div className="start-container">
            <div className="map">
                  <img src={mapimage} alt="위치 아이콘" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="login-group">
                <button className="normal-start" onClick={handleAccountStart}>
                    <img src={accounticon} alt="계정" className="icon" /> 계정으로 시작하기</button>
                <button className="kakao-start">
                    <img src={kakaoicon} alt="카카오" className="icon" /> 카카오로 시작하기</button>
                <button className="naver-start">
                    <img src={navericon} alt="네이버" className="icon" /> 네이버로 시작하기</button>
            </div>
        </div>
    )
}

export default Login;