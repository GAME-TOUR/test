import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Test() {

  const movePage = useNavigate(); 
  const [msg, setMsg] = useState('')

  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/test");
      setMsg(response.data);
    } catch (error) {
      console.error('데이터 불러오기 에러:', error);
    }
  }

  function gosrchpage() {
    movePage('/srch')
  }

  return (
      <div>
        리액트 스프링 부트 연동 테스트<br></br>

        백엔드 통신 성공? : {msg} <br></br><br></br>
        <button onClick={gosrchpage}>검색창으로 이동</button>
      </div>
  );
}

export default Test;