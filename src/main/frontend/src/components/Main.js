import React, { Component, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import './css/home.scss';
import pubgImage from './test_image/pubg.jpg';
import eldenImage from './test_image/eldenring.jpg';
import hadesImage from './test_image/hades.jpg';
import csgoImage from './test_image/csgo.jpg';
import darksoulImage from './test_image/darksoul.jpg';
import vrisingImage from './test_image/vrising.jpg';

export default function Home() {

  const handlelogin = () => {
    window.location.href = 'http://localhost:3000/login';
  }

  const [textValue, setTextValue] = useState("");
  const handleSetValue = (e) => {
    setTextValue(e.target.value);
  }

  return (
    <React.Fragment>

        <div className="home-header-banner">

            <div className='home-header-container'>
              <div className='home-header-content'>
                  <div className='left-content'>
                      {/* <i class="fas fa-bars"></i> */}
                      <div className='header-logo'></div>
                      <a className='game-tour-text'>GAME TOUR</a>
                      {/* <div className='game-tour-text'>GameTour</div> */}
                  </div>
                  {/* <div className='center-content'>
                      <div className='child-content'>
                          <div><b>Log in</b></div>
                          <div></div>
                      </div>
                      <div className='child-content'>
                          <div><b>Join</b></div>
                          <div></div>
                      </div>
                      <div className='child-content'>
                          <div><b>Games</b></div>
                          <div></div>
                      </div>
                      <div className='child-content'>
                          <div><b>Search</b></div>
                          <div></div>
                      </div>
                  </div> */}
                  <div className='right-content'>
                      <div className='srch'>
                        <textarea
                            placeholder='검색어를 입력해주세요'
                            value={textValue}
                            onChange={(e) => handleSetValue(e)}>
                        </textarea>
                        
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
            <div className='option-child-start'>
                <img src={pubgImage} alt="PUBG-Battleground" className='image-child' />
                <div className='text-child'> PUBG Battleground</div>
            </div>
            <div className='option-child'>
                <img src={eldenImage} alt="elden-Ring" className='image-child' />
                <div className='text-child'> Elden Ring</div>
            </div>
            <div className='option-child'>
                <img src={hadesImage} alt="Hades" className='image-child' />
                <div className='text-child'> Hades</div>
            </div>
            <div className='option-child'>
                <img src={csgoImage} alt="CSGO" className='image-child' />
                <div className='text-child'> CSGO</div>
            </div>
            <div className='option-child'>
                <img src={darksoulImage} alt="Dark-Soul" className='image-child' />
                <div className='text-child'> Dark Soul</div>
            </div>
            <div className='option-child'>
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