import React from "react";
import { Link, Route } from "react-router-dom";
import "../subHeader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import Festival from "./subperform/festival";
import Packge from "./subperform/package";
import PerformInfo from "./subperform/performinfo";
import Reservation from "./subperform/reservation";

function Performance() {
    return(
        <div>
            <div className="sub_header">
                <img className="sub_img" src="/images/sub-banner.jpg" alt=""></img>
                <h1 className="sub_title">공연</h1>
                <div className="sub_icon"></div>

                <ul className='sub_nav'>
                    <div className="sub_home"><Link to="/"><FontAwesomeIcon icon={faHouse} id="home_btn" /></Link></div>
                    <li><Link to="./subperform/performinfo" style={{textDecoration:'none', color: '#2f2f2f'}}>공연안내</Link></li>
                    <li><Link to="./subperform/reservation" style={{textDecoration:'none', color: '#2f2f2f'}}>예매/취소안내</Link></li>
                    <li><Link to="./subperform/featival" style={{textDecoration:'none', color: '#2f2f2f'}}>페스티벌</Link></li>
                    <li><Link to="./subperform/package" style={{textDecoration:'none', color: '#2f2f2f'}}>패키지</Link></li>
                    <li></li>
                </ul>
                <div> {/* 화면에 보이는 부분 */}
                    <Route path='./subperform/performinfo' component={PerformInfo}></Route>
                    <Route path="./subperform/reservation" component={Reservation}></Route>
                    <Route path="./subperform/featival" component={Festival}></Route>
                    <Route path="./subperform/package" component={Packge}></Route>
                </div> 
            </div>
            <PerformInfo />
        </div>
    );
}

export default Performance;