import React from "react";
import "../css/ancillary.css";

function Ancillary() {
    return(
        <div className="ancillary">
            <div className="ancillary_title">
                <h1>부속시설</h1>
            </div>

            <div className="ancillary_container">
                <div className="practice_room">
                    <div className="practice_title">연습공간</div>
                    <div className="practice_content">
                        <div className="practice_text">
                            <h2>
                                아트홀과 앙상블홀 주무대크기와 똑같은 각각의 리허설 룸과 공연의 장르별 특성을 고려하여 
                                안배한 크고 작은 연습공간, 그리고 단체 및 개인별로 충분한 리허설을 할 수 있는 폭넓고 
                                안락한 공간인 29개의 개인 연습실이 준비되어 최고 수준의 완성된 작품을 추구할 수 있도록 
                                공연자들을 배려하였습니다.
                            </h2>
                            <h3><p>●</p>대연습실 9실 / 임대연습실 12개 / 기타연습실 8개</h3>
                        </div>
                        <div className="practice_image">
                            <img src="../images/aff_01.png"></img>
                        </div>
                    </div>
                </div> 
                <div>

                <div className="dressing_room">
                    <div className="dressing_title">분장실</div>
                        <div className="dressing_content">
                            <div className="dressing_text">
                                <h2>
                                    무대진행상황을 볼 수 있는 모니터와 편의시설을 갖춘 개인분장실 10실과 단체분장실 18실을 
                                    확보하고 있어 많은 인원이 출연하는 대형공연도 출연자들이 불편 없이 활용 할 수 있습니다.
                                    (250여명 동시 수용가능)
                                </h2>
                                <h3><p>●</p>아트홀 20실 / 앙상블홀 8실</h3>
                            </div>
                            <div className="dressing_image">
                                <img src="../images/aff_02.png"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="theater_lobby">
                    <div className="theater_title">극장로비</div>
                    <div className="theater_content">
                        <div className="theater_text">
                            <h2>
                                극장 로비공간은 일반인에게 항시 개방되어 시민들을 위한 공간으로 활용되고 있습니다. 
                                로비 요소요소에는 10개의 뛰어난 예술작품이 전시되어있어 문화예술을 향기를 느낄수 있으며 
                                공연이 있을때만 이용하는 것이 아니라 공연예술에 관한 각종정보제공과 예매 및 관련단체의 
                                모임 등이 이루어 질 수 있는 종합정보센터입니다.
                            </h2>
                            <h3><p>●</p>매표소 / 물품보관소 / 스낵코너</h3>
                        </div>
                        <div className="theater_image">
                            <img src="../images/aff_03.png"></img>
                        </div>
                    </div>
                </div> 

                <div className="system_gear">
                    <div className="system_title">각종시스템및장비</div>
                    <div className="system_content">
                        <div className="system_text">
                            <h2>
                                신의 시설 및 첨단기술을 도입한 대전예술의전당의 각종시설 및 장비들은 사회와 문화발전에 
                                기여할수 있는 집회, 국제적회의와 교육의 질을 높이기 위한 학술회, 세미나, 심포지움 각종행사를 
                                모두 수용할수 있는 최상의 메카니즘을 갖추고 있습니다.
                            </h2>
                        </div>
                        <div className="system_image">
                            <img src="../images/aff_04.png"></img>
                        </div>
                    </div>
                </div> 

                <div className="parking_admin">
                    <div className="parking_admin_title">주차장및관리동</div>
                    <div className="parking_admin_content">
                        <div className="parking_admin_text">
                            <h2>
                                주차장은 지상, 지하 2층으로 나누어 총 632대를 주차할 수 있고 관리동은 공연장 전체를 경영 
                                관리하는데 시설물의 유지보수 및 기획, 홍보, 마케팅 등의 역할을 하기 위한 사무실이 위치하며 
                                교향악단, 무용단, 성인합창단, 청소년합창단 등 4개의 시립단체 사무국과 전용 연습실 및 기타 
                                연습실로 활용되고 있습니다.
                            </h2>
                        </div>
                        <div className="parking_admin_image">
                            <img src="../images/aff_05.png"></img>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Ancillary;