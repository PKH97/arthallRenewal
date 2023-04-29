import React from "react";
import "../css/fieldtrip_check.css";

function FieldtripCheck() {
    return(
        <div className="fieldtrip_check">
            <div className="fieldcheck_title">
                <h1>견학신청조회</h1>
            </div>
            <div className="fieldcheck_container">
                <div className="fieldcheck_warning">
                    <div className="fieldcheck_warning_icon">!</div>
                    <div className="fieldcheck_warning_box">
                        <h2>신청 시 입력하신 정보를 정확하게 입력해주세요. 신청 취소는 전화로만 가능합니다.</h2>
                        <h3>견학담당자 : 홍보팀 (042)270-8144</h3>
                    </div>
                </div>

                <div className="fieldcheck_login">
                    <table>
                        <tr style={{borderTop:'1px solid #000'}}>
                            <th>단체명</th>
                            <td className="group_name">
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td className="phone_number">
                                <input type="tel"></input>
                                -
                                <input type="tel"></input>
                                -
                                <input type="tel"></input>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td className="password_number">
                                <input type="password"></input>
                            </td>
                        </tr>
                    </table>
                    <div className="fieldcheck_button">
                        <h4>조회</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FieldtripCheck;