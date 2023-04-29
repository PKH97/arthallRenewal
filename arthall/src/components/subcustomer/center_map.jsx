import React from "react";
import "../css/center_map.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPaste } from "@fortawesome/free-regular-svg-icons";

function CenterMap() {
    return(
        <div className="center_map">
            <div className="centermap_title">
                <h1>오시는길</h1>
            </div>

            <div className="centermap_container">
                <div className="map_image">
                    <img src="../images/sample_map.jpg"></img>
                    <div className="map_data">
                        <div className="mapdata_info">
                            <FontAwesomeIcon icon={faLandmark} id="home_icon" />
                            <h3>대전광역시 서구 둔산대로 135(만년동396)</h3>
                            <h3>대표전화 : 042-270-8333</h3>
                            <h3>FAX : 042-270-8149</h3>
                        </div>
                        <div className="mapdata_btn">
                            <h3>네이버 지도보기</h3>
                            <FontAwesomeIcon icon={faMapLocationDot} className="mapbtn_icon" />
                        </div>
                    </div>
                </div>

                <div className="centermap_content">
                    <div className="centermap_parking">
                        <div className="parking_title">주차안내</div>
                        <div className="parking_content">
                            <h3><p>●</p>전당입구 야외주차장, 지하주차장 등 둔산대공원 내 주차장 이용가능하며, 둔산대공원 주차장 유료화 운영기준에 따른 요금은 아래와 같습니다.</h3>
                            <table>
                                <tr>
                                    <th></th>
                                    <th>최초 ~ 3시간까지</th>
                                    <th>무료주차 이후 매 15분 기준</th>
                                    <th>1일 주차</th>
                                </tr>
                                <tr>
                                    <th>일반차량</th>
                                    <td rowSpan="2">무료</td>
                                    <td>600원</td>
                                    <td>12,000원</td>
                                </tr>
                                <tr>
                                    <th>16인승 이상 승합차</th>
                                    
                                    <td>1,800원</td>
                                    <td>36,000원</td>
                                </tr>
                            </table>
                            <h3><p>●</p>공연관람객은 “당일”공연관람 티켓을 무료주차권으로 대체 가능합니다.</h3>
                                <h4><span>ㅡ</span>당일 공연관람티켓 소지자에 한하며, 공연관람 후 출차 시 공연관람티켓을 제시해 주시기 바랍니다.</h4>
                                <h4><span>ㅡ</span>일반시민을 대상으로 하는 공연에 한하며, 이외의 특정 기관·단체, 특정인 등을 대상으로 하는 공연은 제외</h4>
                            <h3><p>●</p>주차장 안내도</h3>
                            <img src="../images/parking_img.jpg"></img>
                        </div>
                    </div>

                    <div className="centermap_traffic">
                        <div className="traffic_title">찾아오시는 길</div>
                        <div className="traffic_content">
                            <h3><p>●</p>시내버스</h3>
                            <table className="traffic_bus01">
                                <tr>
                                    <th colSpan="6">예술의 전당 정문앞</th>
                                    
                                    
                                    
                                    
                                </tr>
                                <tr>
                                    <th style={{width:'103px'}}>노선번호</th>
                                    <th style={{width:'103px'}}>배차간격</th>
                                    <th style={{width:'123px'}}>기점</th>
                                    <th style={{width:'460px'}}>주요경유지</th>
                                    <th style={{width:'123px'}}>종점</th>
                                    <th style={{width:'123px'}}>하차</th>
                                </tr>
                                <tr>
                                    <th style={{width:'103px'}}>911</th>
                                    <td>13분</td>
                                    <td>자운동</td>
                                    <td style={{textAlign:'left', paddingLeft:'5px'}}>유성온천역 → 갑천역 → 월평역 → 갈마역 → 대전시청 → 꿈나무@ → 예술의전당 → 서구보건소</td>
                                    <td>DCC</td>
                                    <td>전당입구</td>
                                </tr>
                                <tr>
                                    <th style={{width:'103px'}}>606</th>
                                    <td>15분</td>
                                    <td>자운동</td>
                                    <td style={{textAlign:'left', paddingLeft:'5px'}}>신성중 → 대덕중 → 샘머리@ → 예술의전당 → 대전역</td>
                                    <td>신흥동</td>
                                    <td>전당입구</td>
                                </tr>
                                <tr>
                                    <th style={{width:'103px'}}>618</th>
                                    <td>20분</td>
                                    <td>대전대</td>
                                    <td style={{textAlign:'left', paddingLeft:'5px'}}>동구청 → 한밭도서관 → 서대전4가 → 시청환승지 → 정부청사역 → 예술의전당</td>
                                    <td>DCC</td>
                                    <td>전당입구</td>
                                </tr>
                            </table>
                            <table className="traffic_bus02">
                                <tr>
                                    <th colSpan="6">만년동(대덕대로) 경유 - 서구보건소 하차, 시립미술관 방향 도보가능(10분 소요)</th>
                                    
                                    
                                    
                                    
                                    
                                </tr>
                                <tr>
                                    <th style={{width:'103px'}}>노선번호</th>
                                    <th style={{width:'103px'}}>배차간격</th>
                                    <th style={{width:'123px'}}>기점</th>
                                    <th style={{width:'460px'}}>주요경유지</th>
                                    <th style={{width:'123px'}}>종점</th>
                                    <th style={{width:'123px'}}>하차</th>
                                </tr>
                                <tr>
                                    <th style={{width:'103px'}}>104</th>
                                    <td>18분</td>
                                    <td>수통골</td>
                                    <td style={{textAlign:'left', paddingLeft:'5px'}}>한밭대 → 현충원역 → 장대중 → 서구보건소 → 누리@후문 → 샤크존</td>
                                    <td>탄방역</td>
                                    <td>서구보건소</td>
                                </tr>
                                <tr>
                                    <th style={{width:'103px'}}>604</th>
                                    <td>15분</td>
                                    <td>자운동</td>
                                    <td style={{textAlign:'left', paddingLeft:'5px'}}>대덕대학 → 금강유역환경청 → 서구보건소 → 둔산경찰서 → 경성큰마을 → 충남여고 → 충무체육관</td>
                                    <td>신흥동</td>
                                    <td>서구보건소</td>
                                </tr>
                                <tr>
                                    <th style={{width:'103px'}}>301</th>
                                    <td>13분</td>
                                    <td>봉상동</td>
                                    <td style={{textAlign:'left', paddingLeft:'5px'}}>송강초 → 대덕중 → 서구보건소 → 둔산경찰서 → 대아@ → 산성사거리</td>
                                    <td>대전동물원</td>
                                    <td>서구보건소</td>
                                </tr>
                                <tr>
                                    <th style={{width:'103px'}}>318</th>
                                    <td>16분</td>
                                    <td>대전동물원</td>
                                    <td style={{textAlign:'left', paddingLeft:'5px'}}>산성동사무소 → 문화초 → 서대전역 → 롯데백화점 → 타임월드 → 서구보건소 → 표준과학연구원</td>
                                    <td>대덕대학교</td>
                                    <td>서구보건소</td>
                                </tr>
                                <tr>
                                    <th style={{width:'103px'}}>705</th>
                                    <td>14분</td>
                                    <td>신탄진</td>
                                    <td style={{textAlign:'left', paddingLeft:'5px'}}>대덕구보건소 → 대덕경찰서 → 테크노벨리11,12단지 → 무역전시관 → 서구보건소</td>
                                    <td>대전역</td>
                                    <td>서구보건소</td>
                                </tr>
                                <tr>
                                    <th style={{width:'103px'}}>918</th>
                                    <td>15분</td>
                                    <td>탑립동</td>
                                    <td style={{textAlign:'left', paddingLeft:'5px'}}>동화 → 세종@ → 대덕중 → 서구보건소 → 한밭초 → 시청환승지</td>
                                    <td>시청</td>
                                    <td>서구보건소</td>
                                </tr>
                            </table>

                            <h3><p>●</p>지하철</h3>
                                <h4><span>ㅡ</span>정부청사역 하차 3번 출구</h4>
                                <h4><span>ㅡ</span>둔산경찰서에서 우회전, 도보로 15~20분 소요. 정부청사 북문 맞은편</h4>
                            <h3><p>●</p>고속버스</h3>
                                <h4><span>ㅡ</span>대전복합터미널(문의전화:1577-2259) / 시내버스 105번 동부네거리 승차 → 수정타운아파트 하차 606번 환승</h4>
                                <h4><span>ㅡ</span>유성고속버스터미널(문의전화:042-822-0386) / 시내버스 911번</h4>
                                <h4><span>ㅡ</span>둔산대전청사고속버스승강장(문의전화:042-485-0181) / 도보 10분</h4>
                                <h4><span>ㅡ</span>둔산시외버스정류장(문의전화:042-486-7788) / 도보 10분</h4>
                            <h3><p>●</p>기차</h3>
                                <h4><span>ㅡ</span>대전역(문의전화:042-259-2429) / 시내버스 606번(대전역 3번출구) 또는 지하철 이용</h4>
                                <h4><span>ㅡ</span>서대전역(문의전화:042-535-6191) / 시내버스 618번(오룡역 5번출구) 또는 지하철 이용</h4>
                            <h3><p>●</p>항공</h3>
                                <h4><span>ㅡ</span>공항 연계버스 시간표 문의전화 : 042-486-7788/7949(둔산시외버스정류장)</h4>
                                <h4><span>ㅡ</span>공항 연계버스 예매 : www.busterminal.or.kr / www.djbusterminal.co.kr</h4>
                                <h4><span>ㅡ</span>김포공항 → 대전청사 07:30 11:00 12:00 14:00 15:00 17:00 18:50 20:30</h4>
                                <h4><span>ㅡ</span>대전복합터미널 → 김포공항 07:10 08:10 10:00 11:10 12:50 14:50 16:20 19:30 (청사 경유시간은 출발시간에서 약 15분정도 소요됩니다)</h4>
                                <h4><span>ㅡ</span>대전청사(시외버스정류장) → 김포공항 07:25 08:25 10:15 11:25 13:05 15:05 16:35 19:45</h4>
                                <h4><span>ㅡ</span>청주공항 → 대전복합터미널 11:20 14:40 18:05 18:50 21:55</h4>
                                <h4><span>ㅡ</span>대전복합터미널 → 청주공항 06:35 07:30 09:20 12:50 16:00 16:30</h4>
                                <h4><span>ㅡ</span>버스운행시간이 변경될 수 있으니 문의전화 및 예매사이트에서 확인하시기 바랍니다.</h4>
                        </div>
                    </div>
                    <div className="centermap_buttons">
                        <div className="centerbtn_airline">
                            <h5>한국공항공사 사이트 바로가기</h5>
                            <FontAwesomeIcon icon={faPaste} className="centerbtn_icon"/>
                        </div>
                        <div className="centerbtn_terminal">
                            <h5>대전복합터미널 사이트 바로가기</h5>
                            <FontAwesomeIcon icon={faPaste} className="centerbtn_icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CenterMap;