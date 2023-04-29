import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subHeader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import Greeting from "./subintroduction/greeting";
import History from "./subintroduction/history";
import OperatinGoals from "./subintroduction/operating_goals";
import Organization from "./subintroduction/organization";
import Ancillary from "./subintroduction/ancillary";
import SponsorInfo from "./subintroduction/sponsor_info";

function Introduction() {
    const [num, setNum] = useState(1)

    const com1 = () => {
        setNum(1)
    }
    const com2 = () => {
        setNum(2)
    }
    const com3 = () => {
        setNum(3)
    }
    const com4 = () => {
        setNum(4)
    }
    const com5 = () => {
        setNum(5)
    }
    const com6 = () => {
        setNum(6)
    }

    return(
        <div className="sub_container">
            <div className="sub_header">
                <h1 className="sub_title">기관소개</h1>
                <div className="sub_icon"></div>
                <div className='sub_nav'>
                    <ul>
                        <li className="home_button" style={{width: '60px', height: '60px'}}>
                            <Link to="/"><FontAwesomeIcon icon={faHouse} className="home_icon"/></Link>
                        </li>
                        <li className="sub_nav_list" onClick={com1}><h2>인사말</h2></li>
                        <li className="sub_nav_list" onClick={com2}><h2>연혁</h2></li>
                        <li className="sub_nav_list" onClick={com3}><h2>운영목표</h2></li>
                        <li className="sub_nav_list" onClick={com4}>
                            <h2>조직과 기구</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>조직과 기구</li>
                                    <li>상주단체</li>
                                </ul>
                            </div>
                        </li>
                        <li className="sub_nav_list" onClick={com5}>
                            <h2>시설안내</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>공연장안내</li>
                                    <li>부속시설</li>
                                    <li>좌석배치도</li>
                                    <li>편의시설</li>
                                    <li>비상대피시설안내</li>
                                </ul>
                            </div>
                        </li>
                        <li className="sub_nav_list" onClick={com6}>
                            <h2>후원회</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>후원회소개</li>
                                    <li>결산 및<br/>지정기부금내역</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="sub_content">
                {num === 1 && <Greeting />}
                {num === 2 && <History />}
                {num === 3 && <OperatinGoals />}
                {num === 4 && <Organization />}
                {num === 5 && <Ancillary />}
                {num === 6 && <SponsorInfo />}
            </div>
        </div>
    );
}

export default Introduction;