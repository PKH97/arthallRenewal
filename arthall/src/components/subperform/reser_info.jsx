import React from "react";
import "../css/reser_info.css";

function ReserInfo() {
    return(
        <div className="reser_info">
            <div className="reser_title">
                <h1>예매안내</h1>
            </div>

            <div className="reser_warning">
                <div className="reser_warning_icon">!</div>
                <div className="reser_warning_title">
                    <h3><strong style={{color:'#555'}}>대전예술의전당</strong>은 항상 고객 여러분의 편안하고 즐거운 공연관람을 위해 최선의 노력을 다하겠습니다.</h3>
                    <h4>서비스개선, 불편사항 또는 건의할 사항이 있으시면 언제든지 말씀해 주십시오.</h4>
                    <h5>※ 공연문의 : 042-270-8333</h5>
                </div>
            </div>

            <div className="reser_container">
                <div className="internet_reser">
                    <div className="internet_title">인터넷예매</div>
                    <div className="howto_internet">
                        <h3><p>●</p>대전예술의전당 www.daejeon.go.kr/djac (예술의전당 홈페이지는 예매대행업체인 인터파크와 연동)</h3>
                        <h3><p>●</p>기획공연 : 공연시작 3시간 전까지 인터넷, 콜센터 예매가능</h3>
                        <h3><p>●</p>대관공연 : 공연 하루 전 오후 5시까지(일요일 공연은 토요일 오전 11시 마감)<br />
                            * 각 공연 별 마감은 변동될 수 있으니 주최 측에 확인 필수</h3>
                        <h3><p>●</p>카드 결제 가능하며 온라인 입금은 공연일 4일전까지 가능</h3>
                    </div>
                </div>

                <div className="will_call">
                    <div className="willcall_title">현장예매</div>
                    <div className="howto_willcall">
                        <h3><p>●</p>공연장 로비에 위치한 매표소 방문</h3>
                        <h3><p>●</p>잔여석 있는 경우 공연시간 1시간 전부터 예매</h3>
                    </div>
                </div>

                <div className="reser_call">
                    <div className="call_title">전화예매</div>
                    <div className="howto_call">
                        <h3><p>●</p>인터파크 : 1544 - 1556</h3>
                        <table>
                            <tr>
                                <th style={{borderLeft:"none"}}>평일</th>
                                <th>토요일</th>
                                <th>일요일</th>
                                <th style={{borderRight:"none"}}>휴일</th>
                            </tr>
                            <tr>
                                <td colspan="4">09:00 ~ 18:00</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="center_reser">
                    <div className="center_title">방문예매</div>
                    <div className="howto_center">
                        <h3><p>●</p>공연장 로비에 위치하고 있는 고객서비스센터로 방문</h3>
                        <h3><p>●</p>고객서비스센터 운영시간 : 평일 09:00~18:00 (점심시간 12:00~13:00, 토ㆍ일 공휴일은 쉼)</h3>
                    </div>
                </div>

                <div className="reser_cancel">
                    <div className="cancel_title">예매취소</div>
                    <div className="howto_cancel">
                        <h3><p>●</p>예매 후 7일이내 취소시 수수료 부과안됨<br />
                            - 단, 취소일이 예매 후 7일 이내라도 예매일이 공연일로부터 10일 이내인 경우 수수료 10% 부과</h3>
                        <h3><p>●</p>예매 당일 밤 12시 이전 취소 시 : 취소수수료 부과 안됨 (당일 공연일 경우 취소 불가)</h3>
                        <h3><p>●</p>관람일 9일 전부터 ~ 하루 전까지 : 10% 공제 후 환급(타 예매처 홈페이지에서 예매시 해당 예매처 취소정책에 따라 수수료 부과가 다를 수 있습니다.)</h3>
                        <h3><p>●</p>입장권 취소 및 환불은 해당 예매처(www.daejeon.go.kr/djac 1544-1556)로 하시면 됩니다.</h3>
                        <h3><p>●</p>티켓이 배송된 이후(우편배송, 방문예매 고객) 취소 및 환불 시에는 해당 티켓을 소지 하신 후, <br />
                            대전예술의전당 고객서비스센터에 방문하셔야 취소 및 환불 가능하십니다. (이때, 티켓 배송료는 환불되지 않습니다.)</h3>
                        <h3><p>●</p>카드 예매 취소시 예매 취소 시점과 해당 카드사의 환불 처리기준에 따라 취소금액의 환급방법과 환급일은 다소 차이가 있을 수 있습니다.</h3>
                        <h4>※ 위 내용은 전당 기획공연에 한해 적용되며, 대관공연은 각 공연주최별 취소 정책에 따라 가능합니다.</h4>
                    </div>
                </div>
                
                <div className="seat_change">
                    <div className="change_title">예매좌석변경</div>
                    <div className="howto_change">
                        <h3>
                            동일 공연에 대해서 날짜, 시간, 좌석, 가격 등급, 결제 등의 일부 변경을 원하시는 경우, 기존 예매 건을 취소하시고 재예매하셔야 하며,<br />
                            예매하신 콜센터로 취소 마감시간 전까지 요청하셔야 합니다. (예매처별로 별도의 수수료가 부과될 수 있으며 할인은 재예매시점을 기준으로 적용됩니다.)
                        </h3>
                    </div>
                </div>

                <div className="get_ticket">
                    <div className="ticket_title">입장권 수령</div>
                    <div className="howto_get">
                        <h3><p>●</p>공연당일 입장권을 수령할 경우</h3>
                        <h4><span>ㅡ</span>공연시작 1시간전부터 매표소를 오픈합니다.</h4>
                        <h4><span>ㅡ</span>"예약자명의 신분증"이나 "예매번호"를 정확히 알고 오시면 빠르게 티켓을 찾으실 수 있습니다.</h4>
                        <h3><p>●</p>공연일 이전에 입장권을 수령할 경우</h3>
                        <h4><span>ㅡ</span>고객서비스센터로 "예약자명의 신분증" 이나 "예매번호"를 정확히 알고 오시면 티켓을 찾으실 수 있습니다.(예술의전당 홈페이지 예매자)</h4>
                        <h5>※ 당일 수령만 가능한 예매티켓</h5>
                        <h5>- 국가유공자할인, 장애인할인, 경로할인,청소년할인, 꿈나무 사랑카드할인, 예술인패스할인, 대전명예시민증할인</h5>
                        <h6>※ 위의 모든 내용은 전당 기획공연에 한하며 일부 대관공연의 경우 다르게 적용됩니다.</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReserInfo;