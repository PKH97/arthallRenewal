import React from "react";
import "../css/grand_season.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function GranSeason() {
    return(
        <div className="grand_season">
            <div className="grand_title">
                <h1>Grand Season</h1>
            </div>
            
            <div className="grand_container">
                <div className="grand_subtitle">
                    <img src="../images/grand_subtitle.jpg"></img>
                    <div className="grand_download">
                        <h4>2022 그랜드시즌 시즌북 다운로드</h4>
                        <FontAwesomeIcon icon={faDownload} id="download_icon" />
                    </div>
                </div>

                <div className="grand_content">
                    <h2>
                        2022년 그랜드시즌 주요 공연을 한눈에!
                    </h2>
                    <h3>
                        그랜드시즌은 한 해의 기획공연을 한번에 소개하고 오픈하는 대전예당의 대표 프로그램입니다.<br />
                        올 한해도 여러분의 많은 관심과 사랑 부탁드립니다.
                    </h3>
                    <p>
                        * 2022 그랜드시즌 패키지는 운영하지 않습니다.<br />
                        * 2022 그랜드시즌 티켓 오픈은 코로나19 방침에 따라 탄력적으로 운영됩니다.<br />
                        * 공연별 티켓오픈 일정은 대전예술의전당 홈페이지 및 SNS를 통해 추후 공지됩니다.<br />
                        * 공연정보 내 "관심 공연담기" 버튼을 누르시면 티켓오픈 시 알림 문자를 드립니다.
                    </p>
                </div>

                <div className="grand_img">
                    <img src="../images/grand_seaeon.jpg"></img>
                </div>
            </div>

        </div>
    );
}

export default GranSeason;