import React, { Component, useState } from 'react';
import { Link, useNavigate, useLocation, useSearchParams } from "react-router-dom";

import './css/home.scss';
import srchicon from './test_image/srchicon.svg';
import pubgImage from './test_image/pubg.jpg';
import eldenImage from './test_image/eldenring.jpg';
import hadesImage from './test_image/hades.jpg';
import csgoImage from './test_image/csgo.jpg';
import darksoulImage from './test_image/darksoul.jpg';
import vrisingImage from './test_image/vrising.jpg';

export default function Home() {

 const handlelogin = () => window.location.href = 'http://localhost:8080/login';
 const handleMain = () => navigate(`/`);
 const handleGame = (e) => navigate(`game/game:id`);

  // 검색어 변수 및 onChange 함수 선언 
  const [textValue, setTextValue] = useState("");
  const handleSetValue = (e) => {
    setTextValue(e.target.value);
  };  

  const navigate = useNavigate();
  const setSearchValue = useState("");

  const handleChange = (e) => {
    // setSearchValue(e.target.value);
    console.log(e.target.value);
    navigate(`search?q=${e.target.value}`, {
      state: {
        keyword: `${e.target.value}`
      },
    } );
    
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleChange(e);
  };

  return (
    <React.Fragment>

        <div className="home-header-banner">

            <div className='home-header-container'>
              <div className='home-header-content'>
                  <div className='left-content' onClick={handleMain}>
                      <div className='header-logo'></div>
                      <a className='game-tour-text'>GAME TOUR</a>
                      
                  </div>

                  <div className='right-content'>
                      <div className='srch'>
                        <img src={srchicon} width='20px'></img>
                        <textarea
                            placeholder='검색어를 입력해주세요'
                            value={textValue}
                            onChange={(e) => handleSetValue(e)}
                            onKeyDown={handleKeyDown}
                        />                       
                        {/* <textarea
                            placeholder='검색어를 입력해주세요'
                            value={textValue}
                            onChange={(e) => handleSetValue(e)}>
                        </textarea>                         */}
                      </div>
                      <button onClick={handlelogin}>로그인</button>
                      <button onClick={handlelogin}>회원가입</button>
                  </div>
              </div>
            </div>

          <div className='content-up'>
                  <div className="title1">WELCOME TO GAMETOUR</div>
                  <div className="title2">BEST GAME REVIEW WEBSITE</div>
          </div>
        </div>

        <div className='content-down'>
          <div className='content-down-text'>POPULAR GAMES</div>
          
          <div className="options">
            <div className='option-child-start' onClick={handleGame}>
                <img src={pubgImage} alt="PUBG-Battleground" className='image-child' />
                <div className='text-child'> PUBG Battleground</div>
            </div>
            <div className='option-child' onClick={handleGame}>
                <img src={eldenImage} alt="elden-Ring" className='image-child' />
                <div className='text-child'> Elden Ring</div>
            </div>
            <div className='option-child' onClick={handleGame}>
                <img src={hadesImage} alt="Hades" className='image-child' />
                <div className='text-child'> Hades</div>
            </div>
            <div className='option-child' onClick={handleGame}>
                <img src={csgoImage} alt="CSGO" className='image-child' />
                <div className='text-child'> CSGO</div>
            </div>
            <div className='option-child' onClick={handleGame}>
                <img src={darksoulImage} alt="Dark-Soul" className='image-child' />
                <div className='text-child'> Dark Soul</div>
            </div>
            <div className='option-child' onClick={handleGame}>
                <img src={vrisingImage} alt="VRising" className='image-child' />
                <div className='text-child'> V Rising</div>
            </div>
          </div>
        </div>

    </React.Fragment>

);

}

{/* <div className="search">
<i className="fas fa-search"></i>
<input type="text" placeholder="Find games" />
</div> */}

// const Searchbar = (props) => {
//     const [enterKeyword, setEnteredKeyword] = useState("");

//     const changeHandler = (e) => {
//         e.preventDefault(); 
//         setEnteredKeyword(e.target.value);
//     };

//     const enterHandler = (e) => {
//         if (e.keyCode == 13) {
//             props.searchHandler(enterKeyword, e.keyCode);
//             setEnteredKeyword("");
//         }
//     };
//   }

// interface Iprops {
//     handleSubmit: (
//         e:
//         | React.FormEvent<HTMLFormElement>
//         | React.KeyboardEvent<HTMLTextAreaElement>
//     ) => void;
//     isSubmitting: boolean;
// }

// function usePressEnterFetch({ handleSubmit, isSubmitting }: Iprops) {
//     const handlePressEnterFetch = (
//         e: React.KeyboardEvent<HTMLTextAreaElement>
//     ) => {
//         if (e.key === "Enter" && !e.shiftKey && !isSubmitting) {
//             e.preventDefault();
//             handleSubmit(e);
//         }
//     };

//     return { handlePressEnterFetch };
// }
