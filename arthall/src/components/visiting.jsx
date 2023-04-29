import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subHeader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import FieldtripInfo from "./subvisiting/fieldtrip_info";
// import FieldtripSign from "./subvisiting/fieldtrip_sign";
// import FieldtripCheck from "./subvisiting/fieldtrip_check";
import AuditionSign from "./subvisiting/audition_sign";
// import PublicAudition from "./subvisiting/public_audition";
import Event from "./subvisiting/event";
import Survey from "./subvisiting/survey";
import Review from "./subvisiting/review";

function Visiting() {
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

    return(
        <div className="sub_container">
            <div className="sub_header">
                <h1 className="sub_title">참여마당</h1>
                <div className="sub_icon"></div>
                <div className='sub_nav'>
                    <ul>
                        <li className="home_button" style={{width: '60px', height: '60px'}}>
                            <Link to="/"><FontAwesomeIcon icon={faHouse} className="home_icon"/></Link>
                        </li>
                        <li className="sub_nav_list" onClick={com1}>
                            <h2>견학신청</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>견학안내</li>
                                    <li>견학신청하기</li>
                                    <li>견학신청조회</li>
                                </ul>
                            </div>
                        </li>
                        <li className="sub_nav_list" onClick={com2}>
                            <h2>오디션/공모사업 신청</h2>
                            <div className="nav_main">
                                <ul className="nav_main_button">
                                    <li>오디션신청</li>
                                    <li>공모사업신청</li>
                                </ul>
                            </div>
                        </li>
                        <li className="sub_nav_list" onClick={com3}><h2>이벤트</h2></li>
                        <li className="sub_nav_list" onClick={com4}><h2>설문조사</h2></li>
                        <li className="sub_nav_list" onClick={com5}><h2>공연관람평</h2></li>
                    </ul>
                </div>
            </div>

            <div className="sub_content">
                {num === 1 && <FieldtripInfo />}
                {num === 2 && <AuditionSign />}
                {num === 3 && <Event />}
                {num === 4 && <Survey />}
                {num === 5 && <Review />}
            </div>
        </div>
    );
}

export default Visiting;