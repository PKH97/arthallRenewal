import React from "react";
import "../css/rent_data.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function RentData() {
    return(
        <div className="rent_data">
            <div className="rentdata_title">
                <h1>무대기술자료</h1>
            </div>
            <div className="rentdata_container">
                <div className="arthall_data">
                    <div className="arthalldata_title">ART HALL</div>
                    <div className="arthalldata_content">
                        <h3>
                            아트홀은 뛰어난 건축 미학과 함께 수용인원 1,546석의 객석과 300여명이 동시출연 가능한 무대, 120여명의 오케스트라단원을 수용할 수 있는 피트를 가진 대규모 공연장으로 그
                            랜드 오페라, 발레, 뮤지컬등의 전문공연기능을 효율적으로 수행할 수 있는 종합문화예술 공간입니다. 객석은 갤러리 형식으로 1,2,3층으로 나뉘어져 있고, 인체공학적으로 설계
                            제작된 의자는 안락한 공연관람을 도와주며 좌석간 간격(1m)이 넓어 관람객의 편의를 최대한 높였습니다. 아트홀은 음향과 시설 모두 세계적인 수준을 자랑하는데, 특히 공연자의
                            발끝까지 볼 수 있도록 최대 5.7도까지 기울어지는 경사무대 시스템등이 큰 특징이며, 주무대와 같은 크기의 좌,우,후(회전무대기능보유)의 십자형 무대구조는 4막공연을 원활하
                            게 소화할 수 있는 최상의 무대입니다.
                        </h3>
                        <div className="rentdata_buttons">
                            <h4 style={{paddingLeft:'50px'}}>ART HALL 무대기술자료 다운로드</h4>
                            <FontAwesomeIcon icon={faDownload} id="rentdata_icon01"/>
                        </div>
                    </div>
                </div>
                <div className="ensemble_data">
                    <div className="ensembledata_title">ENSEMBLE HALL</div>
                    <div className="ensembledata_content">
                        <h3>
                            앙상블홀은 651석의 객석을 보유하고 있으며 150여명의 동시 출연이 가능합니다. 반경 10m의 회전이동무대와 60명 규모의 오케스트라피트, 112석 규모의 가변 객석무대와 후무
                            대, 좌측무대로 구성되어 있습니다. 분장실과 연습실은 각종 공연장르 연습에 적합하도록 배치되었고, 음악·연극등의 공연 및 예술활동 분야를 폭넓게 수용할 수 있는 기능을 가지
                            고 있습니다. 원형 돌출무대로 이용할 수 있도록 설계되어 원형무대의 장점과 프로씨니엄(Proscenium)아치의 장점을 조합한 오픈형식 무대는 관객과 얼굴을 마주칠 정도의 친밀
                            도가 높아 연주자와 관객이 함께 호흡할수 있는 감동의 무대를 연출할 수 있습니다. 뮤지컬, 연극, 무용, 실내악, 독주회 등이 가능한 기능성 공간입니다.
                        </h3>
                        <div className="rentdata_buttons">
                            <h4 style={{paddingLeft:'20px'}}>ENSEMBLE HALL 무대기술자료 다운로드</h4>
                            <FontAwesomeIcon icon={faDownload} id="rentdata_icon02"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RentData; 