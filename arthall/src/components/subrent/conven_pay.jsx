import React from "react";
import "../css/conven_pay.css";

function ConvenPay() {
    return(
        <div className="conven_pay">
            <div className="convenpay_title">
                <h1>대관료</h1>
            </div>
            <div className="convenpay_container">
                <div className="convenpay_subtitle">컨벤션홀 대관료</div>
                <div className="convenpay_content">
                    <div className="convenpay_unit">(단위:원)</div>
                    <table>
                        <tr>
                            <th rowSpan='2' style={{width:'145px', height:'90px'}}>면적(m²)</th>
                            <th rowSpan='2' style={{width:'206px', height:'90px'}}>사용목적(좌석수)</th>
                            <th colSpan='3' style={{width:'680px', height:'45px'}}>사용시간 및 사용료 / 부가세 10% 별도</th>
                            
                            
                        </tr>
                        <tr>
                            
                            
                            <td style={{width:'225px', height:'45px', backgroundColor:'#F6F7F8', fontSize:'15px', fontWeight:'600', color:'#36364f'}}>오전 09:00~12:00</td>
                            <td style={{width:'225px', height:'45px', backgroundColor:'#F6F7F8', fontSize:'15px', fontWeight:'600', color:'#36364f'}}>오후 13:00~17:00</td>
                            <td style={{width:'225px', height:'45px', backgroundColor:'#F6F7F8', fontSize:'15px', fontWeight:'600', color:'#36364f'}}>야간 18:00~22:00</td>
                        </tr>
                        <tr>
                            <td rowSpan='2' style={{width:'145px', height:'90px', backgroundColor:'#F6F7F8', fontSize:'15px', fontWeight:'600', color:'#36364f'}}>439.67</td>
                            <td>세미나(80석)</td>
                            <td>200,000</td>
                            <td>200,000</td>
                            <td>200,000</td>
                        </tr>
                        <tr>
                            
                            <td>연회(60석)</td>
                            <td>500,000</td>
                            <td>500,000</td>
                            <td>1,000,000</td>
                        </tr>
                    </table>
                    <h4>※ 세미나 사용목적으로 대관신청 시 음식물 반입은 불가합니다.</h4>
                    <h3><p>●</p>대관료 면제 : 국가 또는 대전광역시가 주최하는 행사</h3>
                    <h3><p>●</p>대관료 50% 할인 : 국가 또는 대전광역시가 후원하는 행사</h3>
                    <h3><p>●</p>납부방식 : 납입 고지서(우편 발송)에 기재된 가상계좌로 납부</h3>
                </div>
            </div>
        </div>
    );
}

export default ConvenPay;