import React from "react";
import "../css/discount_info.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";


function DiscountInfo() {
    return(
        <div className="discount_info">
            <div className="discount_title">
                <h1>할인안내</h1>
            </div>

            <div className="discount_warning">
                <div className="discount_warning_icon">!</div>
                <div className="discount_warning_title">
                    <h3>대전예술의전당에서 주최한 기획공연 예매 시 아래의 할인 혜택을 드립니다.</h3>
                    <h4><strong>대관공연 및 공동주최 공연은 적용되지 않거나 변동</strong>이 있을 수 있습니다.</h4>
                    <h5>※ 공연문의 : 042-270-8333</h5>
                </div>
            </div>

            <div className="discount_container">
                <div className="handicap_discount">
                    <div className="handicap_title">장애인·국가유공자<br />우대할인</div>
                    <div className="howto_hendicap_discount">
                        <table>
                            <tr>
                                <th style={{width:'500px', borderLeft: 'none' }}>할인대상</th>
                                <th>할인율</th>
                                <th style={{borderRight: 'none'}}>비고</th>
                            </tr>
                            <tr>
                                <td style={{borderLeft: 'none', backgroundColor:'#edebeb'}}>국가유공자증, 독립유공자증, 5.18민주유공자증, 특수임무유공자증, 의상자증 소지자</td>
                                <td style={{color:'#555',textAlign: 'center'}}>동반 1인까지 50% 할인</td>
                                <td rowSpan="2" style={{borderRight: 'none', color:'#555', textAlign: 'center'}}>국가유공자증/유족증 등 제시</td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: 'none', backgroundColor:'#edebeb'}}>
                                    국가유공자 유족증, 독립유공자 유족증, 5.18민주유공자 유족증, 의사자 유족증,<br />
                                    참전유공자증, 고엽제후유의증환자증 소지자 및 국군등록포로ㆍ억류지 출신 포로가족
                                </td>
                                <td style={{borderRight: 'none', color:'#555', textAlign: 'center'}}>본인에 한해 50% 할인</td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: 'none', backgroundColor:'#edebeb'}}>장애의 정도가 심한 장애인</td>
                                <td style={{color:'#555', textAlign: 'center'}}>동반 1인까지 50% 할인</td>
                                <td rowSpan="2" style={{borderRight: 'none', color:'#555', textAlign: 'center'}}>장애인증 제시</td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: 'none', backgroundColor:'#edebeb'}}>장애의 정도가 심하지 않은 장애인</td>
                                <td style={{borderRight: 'none', color:'#555', textAlign: 'center'}}>동반 1인까지 50% 할인</td>
                            </tr>
                        </table>

                        <h3><p>●</p>전화예매</h3>
                        <h4><span>ㅡ</span>대전예술의전당 전용콜센터(1544-1556)를 통해 예매하실 수 있습니다.</h4>
                        <h4><span>ㅡ</span>대전예술의전당 전용콜센터(1544-1556)를 통해 예매하실 수 있습니다.</h4>
                        <h3><p>●</p>인터넷예매</h3>
                        <h4><span>ㅡ</span>전화예매가 불편하신 장애인은 인터넷으로 예매하신 후 예매티켓수령창구에서 본인임을 확인 후 티켓을 수령하시기 바랍니다.</h4>
                        <h5>(복지카드 지참, 본인이 아닐경우 차액을 지불하셔야 합니다.)</h5>
                        <h3><p>●</p>방문예매</h3>
                        <h4><span>ㅡ</span>고객서비스센터로 방문하셔서 예매하실 수 있으나, 티켓은 공연당일 장애인 또는 국가유공자 본인이 “예매티켓수령창구”에서 수령하셔야 합니다.</h4>
                        <h4 style={{marginTop:'40px', paddingTop:'15px', paddingLeft:'15px', height:'150px', backgroundColor:'#F0F2F6'}}>
                            ※ 예매시 휠체어석 사용 여부를 말씀해 주시면 휠체어석으로 예매하실 수 있습니다.<br/>
                            ※ 공연 관람시 거동이 불편하신 분은 공연장 로비에 있는 하우스매니저의 안내를 받으시기 바랍니다.<br/>
                            ※ 위 할인혜택을 받으시는 분들은 공연관람 당일 확인할 수 있는 신분증을 반드시 지참바랍니다.<br/>
                            (신분증 : 학생증ㆍ청소년증ㆍ주민등록증ㆍ장애인증ㆍ유공자증ㆍ유족증ㆍ의료보험증ㆍ예술인패스ㆍ명예시민증 등)<br/>
                            * 신분증 미지참 시 현장에서 차액을 지불하셔야 합니다.<br/>
                            * 모든 할인은 중복 적용이 되지 않으며, 대리 수령 및 양도는 불가합니다.<br/>
                            * 공연유형에 따라 할인율은 변동될 수 있습니다.
                        </h4>
                    </div>
                </div>

                <div className="elderly_discount">
                    <div className="elderly_title">경로우대할인</div>
                    <div className="howto_elderly_discount">
                        <h3><p>●</p>만 65세이상 본인에 한하여 50%할인(신분증소지자) ※공연일 기준 생일이 지난 자</h3>
                    </div>
                </div>

                <div className="first_discount">
                    <div className="first_title">조기예매할인</div>
                    <div className="howto_first_discount">
                        <h3><p>●</p>공연일로부터 60일 이전 예매자 10%할인</h3>
                    </div>
                </div>

                <div className="group_discount">
                    <div className="group_title">단체할인</div>
                    <div className="howto_group_discount">
                        <h3><p>●</p>20인 이상 20% 할인</h3>
                        <h4>※ 단체20명이상, 대전명예시민증소지자 할인은 대전예술의전당 전용콜센터 1544-1556 를 통한 전화예매만 가능합니다.</h4>
                    </div>
                </div>

                <div className="etc_discount">
                    <div className="etc_title">기타할인</div>
                    <div className="howto_etc_discount">
                        <h3><p>●</p>꿈나무 사랑카드 20% 할인 (관람가능한 연령의 등재인 모두 할인)</h3>
                        <h3><p>●</p>대전명예시민증소지자 동반1인(배우자에 한함)까지 50%할인</h3>
                        <h3><p>●</p>예술인패스소지자 본인에 한해 30%할인</h3>
                        <h4>※ 대전명예시민증소지자 할인은 대전예술의전당 전용콜센터 1544-1556 를 통한 전화예매만 가능합니다.</h4>
                    </div>
                </div>

                <div className="minor_discount">
                    <div className="minor_title">어린이·청소년할인</div>
                    <div className="howto_minor_discount">
                        <h3><p>●</p>입장가능연령부터 고등학생 이하 50%할인</h3>
                        <h3><p>●</p>20세이상부터 만24세 이하 30%할인 ※공연일 기준 생일이 지나지 않은 자</h3>
                        <h4>※ 어린이·청소년할인(신분증소지자)은 본인에 한해 할인되며, 공연에 따라 할인율은 변동될 수 있습니다.</h4>
                    </div>
                </div>

                <div className="membership_discount">
                    <div className="membership_title">유료회원 할인안내</div>
                    <div className="howto_membership_discount">
                        <h3><p>●</p>법인회원 : 50매 한도, 30 ~ 20% 할인</h3>
                        <h3><p>●</p>골드회원 : 4매 한도, 30 ~ 20% 할인</h3>
                        <h3><p>●</p>블루회원 : 2매 한도, 20 ~ 10% 할인</h3>
                        <div className="membership_button">
                            <h2>유료회원 서비스 자세히보기</h2>
                            <FontAwesomeIcon icon={faCircleChevronRight} id="membership_btn_icon" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default DiscountInfo;