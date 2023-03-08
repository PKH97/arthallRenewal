import React from "react";
import { Link, Route } from "react-router-dom";
import "../subHeader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import RentAd from "./subrent/rentad";
import RentHall from "./subrent/renthall";
import ConventionRent from "./subrent/conventionrent";

function Rent() {
    return(
        <div>
            <div className="sub_header">
                <img className="sub_img" src="/images/sub-banner.jpg" alt=""></img>
                <h1 className="sub_title">대관</h1>
                <div className="sub_icon"></div>

                <ul className='sub_nav'>
                    <div className="sub_home"><Link to="/"><FontAwesomeIcon icon={faHouse} id="home_btn" /></Link></div>
                    <li><Link to="./subrent/rentad" style={{textDecoration:'none', color: '#2f2f2f'}}>대관공고</Link></li>
                    <li><Link to="./subrent/renthall" style={{textDecoration:'none', color: '#2f2f2f'}}>공연장대관</Link></li>
                    <li><Link to="./subrent/conventionrent" style={{textDecoration:'none', color: '#2f2f2f'}}>컨벤션홀대관</Link></li>
                    <li></li>
                    <li></li>
                </ul>
                <div>
                    <Route path='./subrent/rentad' component={RentAd}></Route>
                    <Route path="./subrent/renthall" component={RentHall}></Route>
                    <Route path="./subrent/conventionrent" component={ConventionRent}></Route>
                </div> 
            </div>
            <RentAd />
        </div>
    );
}

export default Rent;