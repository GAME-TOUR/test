import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const movePage = useNavigate();

  function gohome() {
    movePage('/')
  }

  return (
    <div className="searchPage">
      검색 결과입니다. 
      <br></br><br></br>
      <button onClick={gohome}>홈으로 이동</button>
    </div>
  );
}