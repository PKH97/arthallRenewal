import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subHeader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import Memberships from "./submembership/member_ships";
import Artner from "./submembership/artner";

function Membership() {
    const [num, setNum] = useState(1)

    const com1 = () => {
        setNum(1)
    }
    const com2 = () => {
        setNum(2)
    }

    return(
        <div className="sub_container">
            <div className="sub_header">
                <h1 className="sub_title">회원제</h1>
                <div className="sub_icon"></div>
                <div className='sub_nav'>
                    <ul>
                        <li className="home_button" style={{width: '60px', height: '60px'}}>
                            <Link to="/"><FontAwesomeIcon icon={faHouse} className="home_icon"/></Link>
                        </li>
                        <li className="sub_nav_list" onClick={com1}><h2>회원안내</h2></li>
                        <li className="sub_nav_list" onClick={com2}><h2>Artner</h2></li>
                    </ul>
                </div>
            </div>
            <div className="sub_content">
                {num === 1 && <Memberships />}
                {num === 2 && <Artner />}
            </div>
        </div>
    );
}

export default Membership;