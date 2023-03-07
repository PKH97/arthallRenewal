import React from "react";
import { Link, Route } from "react-router-dom";
// import "./performance.css";

import Festival from "./subperform/festival";
import Packge from "./subperform/package";
import PerformInfo from "./subperform/performinfo";
import Reservation from "./subperform/reservation";

function Performance() {
    return(
        <div>
            <div className="subimg">
                <img src="/images/banner.jpg" alt=""></img>
                <h1>공연</h1>
                <div className="sub_icon"></div> 
                <ul className='nav'>
                    <li><Link to="./subperform/performinfo" component={PerformInfo}>공연안내</Link></li>
                    <li><Link to="./subperform/reservation" component={Reservation}>예매/취소안내</Link></li>
                    <li><Link to="./subperform/featival" component={Festival}>페스티벌</Link></li>
                    <li><Link to="./subperform/package" component={Packge}>패키지</Link></li>
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