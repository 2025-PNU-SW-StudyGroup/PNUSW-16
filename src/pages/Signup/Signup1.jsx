import './Signup1.css'

function Signup1(){
    return (
    <>
      <div className="container">
        <h2>해당하는 항목을 선택해 주세요.</h2>
        <div className="button-group">
          <button className="gender-button">여성</button>
          <button className="gender-button">남성</button>
        </div>
      </div>
    </>
  );
}

export default Signup1;