import React from "react";
import "../css/reservation_info.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

function ReservationInfo() {
    return(
        <div className="reservation_info">
            <div className="reservationinfo_title">
                <h1>첫 예매 필수 안내</h1>
            </div>

            <div className="reservationinfo_container">
                <div className="reservationinfo_warning">
                    <div className="reservationinfo_warning_icon">!</div>
                    <h2>대전 예술의 전당을 이용해주셔서 감사합니다.<br/>대전 예술의전당 공연예매는 인터파크 공연예매 서비스와 연계되어 있습니다.</h2>
                </div>

                <div className="reservationinfo_content">
                    <img className="reservationinfo_memberimg" src="../images/member_img01.png"></img>
                    <h3>
                        최초 예매시 인터파크와 정보연동을 위하여 아래 연동하기를 클릭해주세요.<br/>
                        <strong>클릭하신 후 재로그인 하시면 예매가 정상적으로 진행</strong>됩니다.
                    </h3>
                    <div className="reservation_list">
                        <img src="../images/member_img02.png"></img>
                        <img src="../images/member_img03.png"></img>
                        <img src="../images/member_img04.png"></img>
                    </div>
                    <h4>※본 안내사항은 최초 가입자에 한하며, 기 예매자의 경우 해당되지 않습니다.</h4>
                    <div className="reservation_button">
                        <h5>인터파크 연동하기</h5>
                        <FontAwesomeIcon icon={faCircleRight} className="reservation_icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationInfo;