import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subHeader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import PublicRent from "./subrent/public_rent";
import RentInfo from "./subrent/rent_info";
// import RentPay from "./subrent/rent_pay";
// import RentData from "./subrent/rent_data";
// import RentForm from "./subrent/rent_form";
import ConvenInfo from "./subrent/conven_info";
// import ConvenPay from "./subrent/conven_pay";
// import ConvenForm from "./subrent/conven_form";

function Rent() {
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

    return(
        <div className="sub_container">
            <div className="sub_header">
                <h1 className="sub_title">대관</h1>
                <div className="sub_icon"></div>
                <div className='sub_nav'>
                    <ul>
                        <li className="home_button" style={{width: '60px', height: '60px'}}>
                            <Link to="/"><FontAwesomeIcon icon={faHouse} className="home_icon"/></Link>
                        </li>
                        <li className="sub_nav_list" onClick={com1}><h2>대관공고</h2></li>
                        <li className="sub_nav_list" onClick={com2}>
                            <h2>공연장대관</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>대관안내</li>
                                    <li>대관료</li>
                                    <li>무대기술자료</li>
                                    <li>대관서식</li>
                                </ul>
                            </div>    
                        </li>
                        <li className="sub_nav_list" onClick={com3}>
                            <h2>컨벤션홀대관</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>대관안내</li>
                                    <li>대관료</li>
                                    <li>대관서식</li>
                                </ul>
                            </div>    
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sub_content">
                {num === 1 && <PublicRent />}
                {num === 2 && <RentInfo />}
                {num === 3 && <ConvenInfo />}
            </div>
        </div>
    );
}

export default Rent;