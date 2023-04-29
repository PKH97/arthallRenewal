import React from "react";
import "../css/rent_info.css";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import RentManagement from "./rent_management";

function RentInfo() {
    return(
        <div className="rent_info">
            <div className="rentinfo_title">
                <h1>대관안내</h1>
            </div>

            <div className="rentinfo_tab">
                <Tabs id="fill-tab-example" className="mb-3" /*defaultActiveKey="request_info"*/ fill> 
                    <Tab eventKey="request_info" title="신청안내" id="request_tab" >
                        <div className="request_container">
                            <div className="request_01">
                                <div className="req01_title">신청안내</div>
                                <div className="req01_content">
                                    <div className="req01_top">
                                        <h2>정기대관</h2>
                                        <h3><p>●</p>상반기 대관</h3>
                                        <h4><span>ㅡ</span>대관기간 : 1월~6월</h4>
                                        <h4><span>ㅡ</span>신청ㆍ접수 : 전년도 6월 중 홈페이지 공지</h4>
                                        <h3><p>●</p>하반기 대관</h3>
                                        <h4><span>ㅡ</span>대관기간 : 7월~12월</h4>
                                        <h4><span>ㅡ</span>신청ㆍ접수 : 전년도 11월 중 홈페이지 공지</h4>
                                        <h3><p>●</p>결과회신 : 접수마감 후 15일 이내</h3>
                                    </div>
                                    <div className="req01_bottom">
                                        <h2>수시대관</h2>
                                        <h3><p>●</p>대관기간 : 정기대관 후 잔여일정이 있는 경우</h3>
                                        <h3><p>●</p>신청ㆍ접수 : 홈페이지 공지</h3>
                                        <h3><p>●</p>결과회신 : 접수마감 후 15일 이내</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="request_02">
                                <div className="req02_title">대관신청 시 제출서류</div>
                                <div className="req02_content">
                                    <h3><p>●</p>개인정보 수집·이용·제공 동의서 1부</h3>
                                    <h3><p>●</p>공연장 사용허가 신청서 1부</h3>
                                    <h3><p>●</p>공연계획서 1부</h3>
                                    <h3><p>●</p>부대설비 사용허가 신청서 1부</h3>
                                    <h3><p>●</p>사업자등록증 사본 1부(해당자에 한함)</h3>
                                    <h3><p>●</p>기타 참고서류</h3>
                                    <div className="req02_button">
                                        <h4>대관서식 다운로드</h4>
                                        <FontAwesomeIcon icon={faDownload} id='req02_icon' />
                                    </div>
                                </div>
                            </div>

                            <div className="request_03">
                                <div className="req03_title">대관신청 시 유의사항</div>
                                <div className="req03_content">
                                    <h3><p>●</p>대관신청서는 반드시 대전예술의전당 대관서식(소정 양식)을 사용해 주시기 바랍니다.</h3>
                                    <h3><p>●</p>
                                        공연명, 장소, 기간, 공연내용, 출연자 및 출연단체 프로필 등을 상세하게 기재하여 주시기 바랍니다.<br/>
                                        기타 참고서류(출연자와 계약서 등)가 있을 경우 첨부해 주시기 바랍니다.
                                    </h3>
                                    <h3><p>●</p>대관신청 시 신청자와 연락 가능한 전화번호, 주소, 이메일 등의 정확한 정보를 기재해 주시기 바랍니다.</h3>
                                    <h3><p>●</p>매주 월요일은 무대점검일로 대관이 불가합니다.</h3>
                                    <h3><p>●</p>대관신청 시 공연 셋업 기간 참고</h3>
                                    <h4><span>ㅡ</span>연극·무용 최소 2일</h4>
                                    <h4><span>ㅡ</span>발레 최소 3일</h4>
                                    <h4><span>ㅡ</span>오페라·뮤지컬 최소 4일</h4>
                                    <h3><p>●</p>
                                        공연 시작 시간은 평일 19시 30분, 주말·공휴일은 17시 또는 19시를 기준으로 하며, 동일 공연인 경우 1일 2회(15시, 19시) 대관 가능합니다.<br />
                                        단, 작품성격 및 소요시간 등에 따라 사전 협의 후 조정이 가능합니다.
                                    </h3>
                                    <h3><p>●</p>대관신청 자료의 허위 기재 및 내용이 부실한 경우 대관심의 시 불리할 수 있습니다.</h3>
                                    <h3><p>●</p>공고된 일정에 한해서만 대관이 가능한 점 유의하여 주시기 바랍니다.</h3>
                                </div>
                            </div>
                            
                            <div className="request_04">
                                <div className="req04_title">대관승인 및 계약 체결</div>
                                <div className="req04_content">
                                    <h3><p>●</p>대관승인: 대관심의 후 우편으로 개별 통보</h3>
                                    <h3><p>●</p>계약금 납부: 기본 대관료의 30% 납부(계약금 미납 시 대관 취소)</h3>
                                    <h3><p>●</p>계약 체결: 계약금 납부 후 계약 체결</h3>
                                </div>
                            </div>

                            <div className="request_05">
                                <div className="req05_title">대관료 납부방식</div>
                                <div className="req05_content">
                                    <h3><p>●</p>납입 고지서(우편 발송)에 기재된 가상계좌로 납부</h3>
                                    <h3><p>●</p>대관료 계약금: 사용허가일로부터 30일 이내 기본 대관료의 30% 납부</h3>
                                    <h3><p>●</p>대관료 잔    금: 사용예정일 30일 전까지 납부</h3>
                                    <h3><p>●</p>다만, 사용허가일로부터 사용예정일까지의 기간이 30일 이내인 경우 대관료 전액 납부</h3>
                                </div>
                            </div>

                            <div className="request_06">
                                <div className="req06_title">대관료 환불</div>
                                <div className="req06_content">
                                    <h3><p>●</p>사용예정일 전일까지 취소하는 경우: 총 대관료 30%을 제외한 차액 환불</h3>
                                    <h3><p>●</p>사용예정일 이후에 취소하는 경우: 총 대관료 30%을 제외한 금액에서 사용일수만큼 일할계산 금액을 제외한 차액 환불</h3>
                                </div>
                            </div>

                            <div className="request_07">
                                <div className="req07_title">유의사항</div>
                                <div className="req07_content">
                                    <h3><p>●</p>대관심의에서 승인된 내용을 임의로 변경하여 공연할 수 없습니다.</h3>
                                    <h3><p>●</p>무대 휴게시간을 준수하여 주시기 바랍니다. 정해진 무대 휴게시간에는 무대를 사용할 수 없으며 불가피하게 사용이 필요한 경우에는 사전 협의 후 조정이 가능합니다.</h3>
                                    <h3><p>●</p>무대 휴게시간</h3>
                                    <table>
                                        <tr>
                                            <th style={{borderLeft:'none'}}>중식</th>
                                            <th style={{borderRight:'none'}}>석식</th>
                                        </tr>
                                        <tr>
                                            <td style={{borderLeft:'none'}}>12:00~13:00</td>
                                            <td style={{borderRight:'none'}}>17:00~18:00</td>
                                        </tr>
                                    </table>
                                    <h3><p>●</p>도시락을 포함한 식사는 출연자 휴게공간에서만 가능합니다.</h3>
                                    <h3><p>●</p>경연 대회 및 시상식과 같은 예술성이 배제된 일반 기념행사는 대관이 불가합니다.</h3>
                                    <h3><p>●</p>전문인을 양성하는 목적으로 설립된 학교(예술고등학교 및 공연예술대학)의 경우 연 1회 대관신청이 가능합니다.</h3>
                                    <h3><p>●</p>제출된 서류 및 자료는 반환되지 않습니다.</h3>
                                </div>
                            </div>

                            <div className="request_08">
                                <div className="req08_title">대관문의 및 접수</div>
                                <div className="req08_content">
                                    <h3><p>●</p>대전예술의전당 공연기획과 기획운영팀</h3>
                                    <h4><span>ㅡ</span>문의전화 : 042)270-8138</h4>
                                </div>
                            </div>
                            
                        </div>
                    </Tab>
                    <Tab eventKey="rent_step" title="대관절차" id="step_tab">
                        <div className="step_container">
                            <div className="step_image">
                                <img src="../images/rent_step_img01.jpg"/>
                            </div>
                            <ul className="step_content">
                                <li>
                                    <div className="circle_title">01</div>
                                    <div className="step_body">
                                        <h2>대관신청</h2>
                                        <h3>
                                            대관신청서 다운로드 후 작성하여 대관 담당자에게 신청<br />
                                            방문 또는 우편접수
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle_title">02</div>
                                    <div className="step_body">
                                        <h2>대관심의</h2>
                                        <h3>
                                            문화예술분야의 학식과 경험이 풍부한 각 분야의 전문인들로 구성된<br />
                                            대관심의위원회에서 공연의 성격과 단체, 출연자, 작품 내용을 심사하여 승인작품 선정
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle_title">03</div>
                                    <div className="step_body">
                                        <h2>결과통보</h2>
                                        <h3>
                                            심의 결과에 따른 공연장 사용 승인서, 미승인서 우편 송부
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle_title">04</div>
                                    <div className="step_body">
                                        <h2>대관계약</h2>
                                        <h3>
                                            계약금 납부 후 계약 체결<br />
                                            계약 시 대관단체(대표자 또는 개인의 경우 본인) 직인 필요
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle_title">05</div>
                                    <div className="step_body">
                                        <h2>공연등록</h2>
                                        <h3>
                                            계약체결 후 공연 홍보자료 대관 담당자에게 제출<br />
                                            대전예술의전당 홈페이지 등록
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle_title">06</div>
                                    <div className="step_body">
                                        <h2>공연준비</h2>
                                        <h3>
                                            공연 홍보자료, 입장권 판매 등 대관 담당자와 전반적인 공연진행 협의
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle_title">07</div>
                                    <div className="step_body">
                                        <h2>입장권 발권</h2>
                                        <h3>
                                            기본대관료 납부 완료 후 입장권 발권 및 판매 가능
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle_title">08</div>
                                    <div className="step_body">
                                        <h2>무대 스탭회의</h2>
                                        <h3>
                                            공연 2~3주 전, 무대팀과 스탭회의 진행<br />
                                            추가설비 사용료 납부
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle_title">09</div>
                                    <div className="step_body">
                                        <h2>공연</h2>
                                        <h3>
                                            대관 승인조건에 의거 공연 진행<br />
                                            임의로 변경 불가
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle_title">10</div>
                                    <div className="step_body">
                                        <h2>공연종료</h2>
                                        <h3>
                                            공연장 로비, 매표소 정리 및 무대철수
                                        </h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Tab>
                    <Tab eventKey="rent_management" title="관리운영조례" id="management_tab">
                       <RentManagement />
                    </Tab>
                    <Tab eventKey="management_rule" title="조례시행규칙" id="rule_tab">
                        <div className="rule_container">
                            <div className="rule_title">조례시행규칙</div>
                            <div className="rule_content">
                                <div className="arthall_rule00">
                                    <h3><p>●</p>대전예술의전당 관리·운영조례 시행규칙</h3>
                                    <h4><span>ㅡ</span>제정 〔2003. 09. 26 규칙 제2518호〕</h4>
                                    <h4><span>ㅡ</span>일부개정 〔2006. 02. 24 규칙 제2620호〕 제명띄어쓰기</h4>
                                    <h4><span>ㅡ</span>일부개정 〔2008. 02. 29 규칙 제2699호〕</h4>
                                    <h4><span>ㅡ</span>일부개정 〔2009-08-14 규칙 제 2760호〕</h4>
                                    <h4><span>ㅡ</span>일부개정 〔2012-04-13 규칙 제 2863호〕</h4>
                                    <h4><span>ㅡ</span>일부개정 〔2013-05-03 규칙 제 2908호〕</h4>
                                    <h4><span>ㅡ</span>일부개정 〔2014-04-11 규칙 제 2050호〕제명변경</h4>
                                    <h4><span>ㅡ</span>일부개정 〔2014-04-18 규칙 제 2952호〕제명변경</h4>
                                    <h4><span>ㅡ</span>전부개정 〔2021-05-07 규칙 제 3216호〕</h4>
                                </div>
                                <div className="arthall_rule01">
                                    <h3><p>●</p>제1조</h3>
                                    <div className="rule_box">
                                        이 규칙은 「대전예술의전당 관리·운영조례」의 시행에 관하여 필요한 사항을 규정함을 목적으로 한다.
                                    </div>
                                </div>
                                <div className="arthall_rule02">
                                    <h3><p>●</p>제2조<h5>(사용허가의 처리)</h5></h3>
                                    <h4><span>ㅡ</span>
                                        ①「대전예술의전당 관리·운영조례」(이하 “조례”라 한다) 제4조제1항의 규정에 의하여 대전예술의전당의 시설을 사용하고자 하는 자(이하 “사용자”라 한다)는 다음 각 호의 서류를 대전예술의전당관장(이하 “관장”이라 한다)에게 제출하여야 한다.
                                    </h4>
                                    <div className="rule_box">
                                        1. 공 연 장 : 공연장 사용허가 신청서(별지 제1호서식) 및 공연계획서(별지 제2호서식)<br/>
                                        2. 컨벤션홀 : 컨벤션홀 사용허가 신청서(별지 제3호서식)<br/>
                                        3. 공연장의 부대설비 : 부대설비 사용허가 신청서(별지 제4호서식)<br/>
                                        4. 공연장의 추가설비 : 추가설비 사용허가 신청서(별지 제5호서식)
                                    </div>
                                    <h4><span>ㅡ</span>② 조례 제4조제1항에 따른 사용허가 사항을 변경(취소)하고자 하는 자는 다음 각 호의 신청서를 관장에게 제출하여야 한다.</h4>
                                    <div className="rule_box">
                                        1. 공 연 장 : 공연장 사용허가 변경(취소)신청서(별지 제6호서식)<br/>
                                        2. 컨벤션홀 : 컨벤션홀 사용허가 변경(취소)신청서(별지 제7호서식)
                                    </div>
                                    <h4><span>ㅡ</span>
                                        ③ 관장은 조례 제4조제3항에 따른 공연장 상반기·하반기, 정기 및 수시 사용 신청을 접수한 경우에는 대전예술의전당 대관심의위원회 심의를 거쳐 마감일부터 15일 이내에 사용자에게 사용가능 여부를 통지하여야 하며, 그 외 신청은 7일 이내에 사용자에게 신청 결과를 통지하여야 한다.
                                    </h4>
                                </div>
                                <div className="arthall_rule03">
                                    <h3><p>●</p>제3조<h5>(사용계약 체결)</h5></h3>
                                    <div className="rule_box">
                                    조례 제7조제3항에 따른 사용계약은 공연장 사용 계약서(별지 제8호서식) 및 컨벤션홀 사용 계약서(별지 제9호서식)에 따른다.
                                    </div>
                                </div>
                                <div className="arthall_rule04">
                                    <h3><p>●</p>제4조<h5>(사용료의 감면)</h5></h3>
                                    <div className="rule_box">
                                    조례 제8조에 따라 사용료를 감면 받고자 하는 자는 사용료 감면 신청서(별지 제10호서식)를 관장에게 제출하여야 한다.
                                    </div>
                                </div>
                                <div className="arthall_rule05">
                                    <h3><p>●</p>제5조<h5>(입장권의 검인)</h5></h3>
                                    <h4><span>ㅡ</span>① 조례 제13조제1항에 따라 입장권을 검인 받고자 하는 자는 입장권 검인 신청서(별지 제11호서식)를 관장에게 제출하여야 한다.</h4>
                                    <h4><span>ㅡ</span>② 관장은 제1항에 따라 입장권 검인 신청서를 접수하였을 때에는 검인대장에 등재한 후 검인한다. 다만, 전산망을 이용하여 발행한 입장권은 검인을 생략할 수 있다.</h4>
                                </div>
                                <div className="arthall_rule06">
                                    <h3><p>●</p>제6조<h5>(입장권의 발행)</h5></h3>
                                    <h4><span>ㅡ</span>① 조례 제13조제1항에 따라 사용자가 입장권을 발행하는 경우에는 지정 좌석번호, 공연명, 일시, 장소, 관람 가능연령, 주최, 문의번호를 입장권에 명확히 적어야 한다.</h4>
                                    <h4><span>ㅡ</span>② 각 공연장의 좌석수는 다음 각 호와 같으며 사용자는 시설별 좌석수에 따른 입장권 발행에 대하여 발매 전 관장과 협의하여야 한다.</h4>
                                    <div className="rule_box">
                                        1. 아 트 홀 : 1,546석(오케스트라 피트 125석 포함)<br/>
                                        2. 앙상블홀 : 643석(오케스트라 피트 112석 포함)<br/>
                                        3. 원형극장 : 850여석
                                    </div>
                                    <h4><span>ㅡ</span>③ 관장은 공연의 원활한 진행을 위하여 사용자와 협의하여 일부 좌석을 예비좌석으로 확보할 수 있으며, 그 수량 및 좌석번호는 다음 각 호와 같다.</h4>
                                    <div className="rule_box">
                                        1. 아 트 홀 : 1층 B열 79～91번, 2층 C열 10～13번(17석)<br/>
                                        2. 앙상블홀 : 1층 C열 28～35번(8석)<br/>
                                        3. 원형극장 : 각 공연 매 회당 20석
                                    </div>
                                    <h4><span>ㅡ</span>④ 관장은 사고 대비, 언론홍보용(프레스석), 공연 모니터링 등을 위해 필요한 경우 예비좌석을 사용할 수 있다.</h4>
                                    <h4><span>ㅡ</span>⑤ 사용자가 교환권을 발행하는 경우에는 관장과 사전 협의하여야 하며, 교환권은 지정좌석수의 130퍼센트 이하로 발행하는 것을 원칙으로 한다.</h4>
                                </div>
                                <div className="rule_buttons">
                                    <div className="rule_btn">
                                        <h5>별지서식(공연장)</h5>
                                        <FontAwesomeIcon icon={faDownload} id='rule01_icon' />
                                    </div>
                                    <div className="rule_btn">
                                        <h5>별지서식(컨벤션홀)</h5>
                                        <FontAwesomeIcon icon={faDownload} id='rule02_icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default RentInfo;