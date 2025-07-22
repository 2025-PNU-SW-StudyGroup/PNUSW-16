import './Signup3.css'

function Signup3(){
    const userType = [
    '감성적인','차분한','활발한','독립적인','내향적인','액티비티한','판타지',
    '힐링','모험적인','계획적인','즉흥적인','음악','독서','게임',
    '요리','영화','만화','수영','빈티지','자연친화','트렌디'
  ]
  return (
    <>
      <div className="container">
        <h2>해당하는 항목을 선택해 주세요.</h2>
        <p className="sub-text">3개 이상</p>
        <div className="selected-info-group">
          <div className="selected-info">여성</div>
          <div className="selected-info">10대</div>
        </div>

        <div className="type">
          {userType.map((label,index) => (
            <button key={index} className="type-button">{label}</button>
          ))}
        </div>

        <button className="submit-button">선택 완료</button>
      </div>
    </>
  );
}

export default Signup3;