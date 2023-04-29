import React from "react";
import "../css/fieldtrip_sign.css";

function FieldtripSign() {
    return(
        <div className="fieldtrip_sign">
            <div className="fieldsign_title">
                <h1>견학신청하기</h1>
            </div>
            <div className="fieldsign_container">

                <div className="fieldsign_warning">
                    <div className="fieldsign_warning_left">
                        <div className="fieldsign_warning_icon">!</div>
                        <h2>신청 시 유의사항</h2>
                    </div>
                    <div className="fieldsign_warning_right">
                        <h3><p>*</p>견학신청은 2주일 전까지 사전 예약만 가능하며, 신청 취소는 전화로만 가능합니다.</h3>
                        <h3><p>*</p>견학 신청일은 대전예술의전당 사정(공연일정, 시설설비)등에 의해 제한, 변경될 수 있습니다.</h3>
                        <h3><p>*</p>신청결과는 조회 시에 확인 가능합니다.</h3>
                        <h3><p>*</p>한 팀당 본인포함 최소 10~40명 신청가능합니다. 제한된 인원 외 신청시 담당자와 협의가 필요합니다.<br/>(담당자 : 042-270-8144)</h3>
                    </div>
                </div>

                <div className="fieldsign_content">
                    <div className="month_buttons">
                        <button className="last_month">◀</button>
                        <h2 className="this_month">2023년 03월</h2>
                        <button className="next_month">▶</button>
                    </div>

                    <div className="fieldsign_calendar">
                        <table className="fieldsign_table">
                            <tr>
                                <th style={{color:'#cb0000'}}>SUN</th>
                                <th>MON</th>
                                <th>TUE</th>
                                <th>WED</th>
                                <th>THU</th>
                                <th>FRI</th>
                                <th style={{color:'#015DB3'}}>SAT</th>
                            </tr>
                            <tr>
                                <td style={{color:'#cb0000'}}></td>
                                <td></td>
                                <td></td>
                                <td>01</td>
                                <td>02</td>
                                <td>03</td>
                                <td style={{color:'#015DB3'}}>04</td>
                            </tr>
                            <tr>
                                <td style={{color:'#cb0000'}}>05</td>
                                <td>06</td>
                                <td>07</td>
                                <td>08</td>
                                <td>09</td>
                                <td>10</td>
                                <td style={{color:'#015DB3'}}>11</td>
                            </tr>
                            <tr>
                                <td style={{color:'#cb0000'}}>12</td>
                                <td>13</td>
                                <td>14</td>
                                <td>15</td>
                                <td>16</td>
                                <td>17</td>
                                <td style={{color:'#015DB3'}}>18</td>
                            </tr>
                            <tr>
                                <td style={{color:'#cb0000'}}>19</td>
                                <td>20</td>
                                <td>21</td>
                                <td>22</td>
                                <td>23</td>
                                <td>24</td>
                                <td style={{color:'#015DB3'}}>25</td>
                            </tr>
                            <tr>
                                <td style={{color:'#cb0000'}}>26</td>
                                <td>27</td>
                                <td>28</td>
                                <td>29</td>
                                <td>30</td>
                                <td>31</td>
                                <td style={{color:'#015DB3'}}></td>
                            </tr>
                        </table>

                        <table className="fieldsign_list">
                            <tr>
                                <th style={{width:'150px'}}>날짜</th>
                                <th style={{widows:'388px'}}>견학 가능시간</th>
                                <th style={{widows:'150px'}}>신청가능 팀</th>
                                <th style={{widows:'195px'}}>신청상태</th>
                            </tr>
                            <tr>
                                <td colSpan="4">현재 접수하실 수 있는 견학 신청일이 없습니다.</td>
                            </tr>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default FieldtripSign;