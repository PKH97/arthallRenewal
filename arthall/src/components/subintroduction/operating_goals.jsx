import React from "react";
import "../css/operatin_goals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function OperatinGoals() {
    return(
        <div className="operatin_goals">
            <div className="operatin_goals_title">
                <h1>운영목표</h1>
            </div>

            <div className="operatin_goals_container">
                <div className="operatin_goals_mission">
                    <div className="goals_mission_title">미션</div>
                    <div className="goals_mission_content">
                        <h3><p>●</p>대전시민의 행복한 삶과 공연예술 진흥에 이바지</h3>
                    </div>
                </div>

                <div className="operatin_goals_vision">
                    <div className="goals_vision_title">비전</div>
                    <div className="goals_vision_content">
                        <h3><p>●</p>세계로 열린 무대, 예술의 환희 가득한 대전</h3>
                    </div>
                </div>

                <div className="operatin_goals_value">
                    <div className="goals_value_title">핵심가치</div>
                    <ul className="goals_value_content">
                        <li>
                            <FontAwesomeIcon icon={faMusic} className="value_icon"/>
                            <h3>예술성</h3>
                        </li>
                        <p>ㅡ</p>
                        <li>
                            <FontAwesomeIcon icon={faMapLocationDot} className="value_icon"/>
                            <h3>지역성</h3>
                        </li>
                        <p>ㅡ</p>
                        <li>
                            <FontAwesomeIcon icon={faGlobe} className="value_icon"/>
                            <h3>공공성</h3>
                        </li>
                    </ul>
                </div>
                
                <div className="operatin_goals_objective">
                    <div className="goals_objective_title">운영목표</div>
                    <ul className="goals_objective_content">
                        <li>
                            <div className="objective_title">최고의 작품</div>
                            <FontAwesomeIcon icon={faAnglesDown} className="objective_icon"/>
                            <div className="objective_box">
                                <h3><p>●</p>창조적 기획</h3>
                                <h3><p>●</p>역동적 실행</h3>
                                <h3><p>●</p>브랜드 강화</h3>
                            </div>
                        </li>
                        <li>
                            <div className="objective_title">문화도시 대전</div>
                            <FontAwesomeIcon icon={faAnglesDown} className="objective_icon"/>
                            <div className="objective_box">
                                <h3><p>●</p>예술가 발굴 육성</h3>
                                <h3><p>●</p>충청권 문화 벨트 구축</h3>
                                <h3><p>●</p>지역예술 경쟁력 제고</h3>
                            </div>
                        </li>
                        <li>
                            <div className="objective_title">고객중심 서비스</div>
                            <FontAwesomeIcon icon={faAnglesDown} className="objective_icon"/>
                            <div className="objective_box">
                                <h3><p>●</p>손안의 공연장 구현</h3>
                                <h3><p>●</p>미래관객 창출</h3>
                                <h3><p>●</p>마음을 읽는 서비스</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OperatinGoals;