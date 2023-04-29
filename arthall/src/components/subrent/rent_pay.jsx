import React from "react";
import "../css/rent_pay.css";

function RentPay() {
    return(
        <div className="rent_pay">
            <div className="rentpay_title">
                <h1>대관료</h1>
            </div>

            <div className="rentpay_container">
                <div className="arthall_pay">
                    <div className="arthallpay_title">공연 대관료</div>
                    <div className="arthallpay_content">
                        <div className="rentpay_unit">(단위:원)</div>
                        <table>
                            <tr>
                                <th rowSpan="2" style={{width:'124px', height:'90px'}}>구분</th>
                                <th rowSpan="2" style={{width:'176px', height:'90px'}}>좌석수</th>
                                <th colSpan="2" style={{width:'454px', height:'45px'}}>장르</th>
                                
                                <th rowSpan="2" style={{width:'279px', height:'90px'}}>1회 사용시간</th>
                            </tr>
                            <tr>
                                
                                
                                <td style={{width:'227px', height:'45px'}}>음악,연극,무용,합창</td>
                                <td style={{width:'227px', height:'45px'}}>오페라,발레,뮤지컬</td>
                                
                            </tr>
                            <tr>
                                <td rowSpan="2" style={{width:'124px', height:'90px', fontSize:'15px', fontWeight:'600', color:'#36364f', backgroundColor:'#f6f7f8'}}>아트홀</td>
                                <td rowSpan='2'>
                                    1,546<br/>
                                    오케스트라피트 포함
                                </td>
                                <td>연극,무용 1,500,000</td>
                                <td>오페라,발레 2,000,000</td>
                                <td rowSpan="4">
                                    * 공연 1회당
                                    * 공연 1시간전부터 공연 종료 시까지
                                </td>
                            </tr>
                            <tr>
                                
                                
                                <td>음악,합창 1,800,000	</td>
                                <td>뮤지컬 2,500,000</td>
                                
                            </tr>
                            <tr>
                                <td rowSpan="2" style={{width:'124px', height:'90px', fontSize:'15px', fontWeight:'600', color:'#36364f', backgroundColor:'#f6f7f8'}}>앙상블홀</td>
                                <td rowSpan='2'>
                                    643<br/>
                                    오케스트라피트 포함
                                </td>
                                <td>연극,무용 500,000</td>
                                <td>오페라,발레 700,000</td>
                                
                            </tr>
                            <tr>
                                

                                <td>음악,합창 500,000</td>
                                <td>뮤지컬 800,000</td>
                                
                            </tr>
                        </table>
                        <div className="rentpay_box">
                            <h3><p>●</p>1회란 오전, 오후, 야간 중 하나를 말함</h3>
                            <h3><p>●</p>리허설은 당일 사용을 원칙으로 하며, 1회 리허설 비용은 기본 대관료에 포함됨<br/>다만, 1일 2회 이상 리허설 시 공연 준비 대관료 적용 부과</h3>
                            <h3><p>●</p>부대설비 사용료(스타인웨이 피아노, 녹음 등) 별도</h3>
                            <h3><p>●</p>시연회 및 공개리허설은 공연 대관료의 30% 할인(다만, 무료공연에 한함)</h3>
                            <h3><p>●</p>심야공연(공연 시작시간 22:00～24:00)은 공연 대관료의 50% 할증</h3>
                            <h3><p>●</p>3주 이상 또는 21회 이상 공연이나 특별한 형식의 공연 대관료는 시장이 별도로 정함</h3>
                        </div>
                    </div>
                </div>

                <div className="before_after">
                    <div className="banaf_title">공연 준비ㆍ철수 대관료</div>
                    <div className="banaf_content">
                        <div className="rentpay_unit">(단위:원)</div>
                        <table>
                            <tr>
                                <th rowSpan='2' style={{width:'124px', height:'90px'}}>구분</th>
                                <th rowSpan='2' style={{width:'176px', height:'90px'}}>장르별</th>
                                <th>오전</th>
                                <th>오후</th>
                                <th>야간</th>
                                <th>철야</th>
                            </tr>
                            <tr>
                                

                                <td>09:00~12:00</td>
                                <td>13:00~17:00</td>
                                <td>18:00~22:00</td>
                                <td>22:00 이후 매 3시간당</td>
                            </tr>
                            <tr>
                                <td rowSpan='4' style={{width:'124px', height:'180px', fontSize:'15px', fontWeight:'600', color:'#36364f', backgroundColor:'#f6f7f8'}}>아트홀</td>
                                <td>연극, 무용</td>
                                <td>375,000</td>
                                <td>375,000</td>
                                <td>750,000</td>
                                <td>1,125,000</td>
                            </tr>
                            <tr>
                                
                                <td>음악, 합창</td>
                                <td>450,000</td>
                                <td>450,000</td>
                                <td>900,000</td>
                                <td>1,350,000</td>
                            </tr>
                            <tr>
                                
                                <td>오페라, 발레</td>
                                <td>500,000</td>
                                <td>500,000</td>
                                <td>1,000,000</td>
                                <td>1,500,000</td>
                            </tr>
                            <tr>
                                
                                <td>뮤지컬</td>
                                <td>625,000</td>
                                <td>625,000</td>
                                <td>1,250,000</td>
                                <td>1,875,000</td>
                            </tr>
                            <tr>
                                <td rowSpan='3' style={{width:'124px', height:'135px', fontSize:'15px', fontWeight:'600', color:'#36364f', backgroundColor:'#f6f7f8'}}>앙상블홀</td>
                                <td>연극, 무용, 음악, 합창</td>
                                <td>125,000</td>
                                <td>125,000</td>
                                <td>250,000</td>
                                <td>375,000</td>
                            </tr>
                            <tr>
                                
                                <td>오페라</td>
                                <td>175,000</td>
                                <td>175,000</td>
                                <td>350,000</td>
                                <td>525,000</td>
                            </tr>
                            <tr>
                                
                                <td>뮤지컬</td>
                                <td>200,000</td>
                                <td>200,000</td>
                                <td>400,000</td>
                                <td>600,000</td>
                            </tr>
                        </table>
                        <div className="rentpay_box">
                            <h3><p>●</p>공연 후 1시간 이내의 철수작업은 별도의 사용료를 부과하지 않음</h3>
                            <h3><p>●</p>철야는 부득이한 경우를 제외하고 원칙적으로 불허함</h3>
                            <h3><p>●</p>공연 준비를 위한 사용일 경우 공연기간 중이라도 공연 준비 사용료에 준함</h3>
                        </div>
                    </div>
                </div>

                <div className="rentpay_info">
                    <div className="payinfo_title">공연 대관료에 포함되는<br/>사항</div>
                    <div className="payinfo_content">
                        <div className="rentpay_box">
                            <h3><p>●</p>해당 공연장의 무대 및 객석</h3>
                            <h3><p>●</p>해당 분장실 사용 : 준비기간 및 공연기간</h3>
                                <h4><span>ㅡ</span>아트홀: 16실 이내</h4>
                                <h4><span>ㅡ</span>앙상블홀 : 8실 이내</h4>
                            <h3><p>●</p>하우스 매니저와 안내원 등 객석관리 인원</h3>
                            <h3><p>●</p>기본 조명·음향기기 및 기계장치</h3>
                            <h3><p>●</p>공연 및 총 연습 중 냉·난방</h3>
                            <h3><p>●</p>출연자 휴게실과 공통시설 및 공간</h3>
                            <h3><p>●</p>그 밖에 대관료를 받지 않는 부대설비</h3>
                        </div>
                    </div>
                </div>

                <div className="rent_etc">
                    <div className="etc_title">그 밖의 대관료<h5 style={{fontSize:"14.5px", fontWeight:'600'}}>(방송, 영화, 녹음, 녹화, CF제작 등)</h5></div>
                    <div className="etc_content">
                        <div className="rentpay_unit">(단위:원)</div>
                            <table>
                                <tr>
                                    <th style={{width:'248px', height:'45px'}}>구분</th>
                                    <th>오전</th>
                                    <th>오후</th>
                                    <th>야간</th>
                                    <th>철야</th>
                                </tr>
                                <tr>
                                    <td style={{height:'45px'}}>아트홀</td>
                                    <td>4,000,000</td>
                                    <td>4,000,000</td>
                                    <td>6,000,000</td>
                                    <td>10,000,000</td>
                                </tr>
                                <tr>
                                    <td style={{height:'45px'}}>앙상블홀</td>
                                    <td>2,000,000</td>
                                    <td>2,000,000</td>
                                    <td>3,000,000</td>
                                    <td>5,000,000</td>
                                </tr>
                            </table>
                        <div className="rentpay_box">
                            <h3><p>●</p>분장실 2개, 기본조명 지원(녹음 사용료는 50% 할인)</h3>
                            <h3><p>●</p>무대를 제외한 객석만을 대관하는 경우 30% 할인</h3>
                            <h3><p>●</p>로비만을 대관하는 경우 50% 할인</h3>
                            <h3><p>●</p>부대설비 사용료 별도</h3>
                        </div>
                    </div>
                </div>

                <div className="outdoor">
                    <div className="outdoor_title">야외 원형극장</div>
                    <div className="outdoor_content">
                        <div className="rentpay_unit">(단위:원)</div>
                            <table>
                                <tr>
                                    <th>면적(m²)</th>
                                    <th>사용목적(좌석수)</th>
                                    <th>사용시간 및 사용료</th>
                                </tr>
                                <tr>
                                    <td style={{height:'45px'}}>450</td>
                                    <td style={{height:'45px'}}>850</td>
                                    <td style={{height:'45px'}}>100,000</td>
                                </tr>
                            </table>
                        <div className="rentpay_box">
                            <h3><p>●</p>1회 4시간 기준 (공연에 한함)</h3>
                            <h3><p>●</p>분장실 기본 2실 사용</h3>
                            <h3><p>●</p>공연준비 및 철수 사용료(09:00～18:00)는 각각 50% 할인</h3>
                            <h4><span>ㅡ</span>18:00 이후 3시간당 공연 준비 및 철수 사용료의 50% 추가</h4>
                            <h3><p>●</p>향, 조명용 전원 100Kw이내 사용 가능</h3>
                            <h4><span>ㅡ</span>100Kw이상 사용할 경우 발전차 사용 (단체부담)</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RentPay;