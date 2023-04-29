import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subHeader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import CenterMap from "./subcustomer/center_map";
import Faq from "./subcustomer/faq";
import MainNotice from "./subcustomer/main_notice";
import ReservationInfo from "./subcustomer/reservation_info";

function Customer() {
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
                <h1 className="sub_title">고객센터</h1>
                <div className="sub_icon"></div>
                <div className='sub_nav'>
                    <ul>
                        <li className="home_button" style={{width: '60px', height: '60px'}}>
                            <Link to="/"><FontAwesomeIcon icon={faHouse} className="home_icon"/></Link>
                        </li>
                        <li className="sub_nav_list" onClick={com1}>
                            <h2>이용안내</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>오시는길</li>
                                    <li>관람예절</li>
                                    <li>장애인이용안내</li>
                                </ul>
                            </div>
                        </li>
                        <li className="sub_nav_list" onClick={com2}>
                            <h2>고객문의</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>FAQ</li>
                                    <li>고객의 소리</li>
                                </ul>
                            </div>
                        </li>
                        <li className="sub_nav_list" onClick={com3}><h2>공지사항</h2></li>
                        <li className="sub_nav_list" onClick={com4}><h2>첫 예매 필수 안내</h2></li>
                    </ul>
                </div>
            </div>

            <div className="sub_content">
                {num === 1 && <CenterMap />}
                {num === 2 && <Faq />}
                {num === 3 && <MainNotice />}
                {num === 4 && <ReservationInfo />}
            </div>
        </div>
    );
}

export default Customer;