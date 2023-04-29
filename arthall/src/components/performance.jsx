import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subHeader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import MonPerfo from "./subperform/mon_perfo";
// import YearPerfo from "./subperform/year_perfo";
import ReserInfo from "./subperform/reser_info";
// import DiscountInfo from "./subperform/discount_info";
import SpringFes from "./subperform/spring_fes";
// import GrandSeason from "./subperform/grand_season";
// import SummerFes from "./subperform/summer_fes";
// import WinterFes from "./subperform/winter_fes";
import Package from "./subperform/package";

function Performance() {
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

    return(
        <div className="sub_container">
            <div className="sub_header">
                <h1 className="sub_title">공연</h1>
                <div className="sub_icon"></div>
                <div className='sub_nav'>
                    <ul>
                        <li className="home_button" style={{width: '60px', height: '60px'}}>
                            <Link to="/"><FontAwesomeIcon icon={faHouse} className="home_icon"/></Link>
                        </li>
                        <li className="sub_nav_list" onClick={com1}>
                            <h2>공연안내</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>월간공연정보</li>
                                    <li>연간공연정보</li>
                                </ul>
                            </div>
                        </li>
                        <li className="sub_nav_list" onClick={com2}>
                            <h2>예매/취소안내</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>예매안내</li>
                                    <li>할인안내</li>
                                    <li>예매안내 및 취소</li>
                                </ul>
                            </div>
                        </li>
                        <li className="sub_nav_list" onClick={com3}>
                            <h2>페스티벌</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>스프링페스티벌</li>
                                    <li>그랜드시즌</li>
                                    <li>빛깔 있는 여름축제</li>
                                    <li>위터축제</li>
                                </ul>
                            </div>    
                        </li>
                        <li className="sub_nav_list" onClick={com4}><h2>패키지</h2></li>
                    </ul>
                </div>
            </div>
            <div className="sub_content">
                {num === 1 && <MonPerfo />}
                {num === 2 && <ReserInfo />}
                {num === 3 && <SpringFes />}
                {num === 4 && <Package />}
            </div>
        </div>
    );
}

export default Performance;