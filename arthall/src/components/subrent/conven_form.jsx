import React from "react";
import "../css/conven_form.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

function ConvenForm() {
    return(
        <div className="conven_form">
            <div className="convenform_title">
                <h1>컨벤션대관서식</h1>
            </div>

            <div className="convenform_top">
                <div className="convenform_toptitle">
                    <h2>총<strong>2</strong>건ㅣ<strong>1</strong>/<strong>1</strong>페이지</h2>
                </div>
                <div className="convenform_search">
                    <input className="convenform_input" type="text" placeholder="검색어를 입력하세요"></input>
                    <button className="convenform_btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="convenform_icon" />
                    </button>
                </div>
            </div>

            <div className="convenform_container">
                <table>
                    <tr>
                        <th style={{width:'85px', height:'56px'}}>번호</th>
                        <th style={{width:'620px', height:'56px'}}>제목</th>
                        <th style={{width:'160px', height:'56px'}}>작성자</th>
                        <th style={{width:'280px', height:'56px'}}>작성일</th>
                        <th style={{width:'160px', height:'56px'}}>조회수</th>
                        <th style={{width:'130px', height:'56px'}}>첨부파일</th>
                    </tr>
                    <tr>
                        <td style={{width:'85px', height:'56px'}}>2</td>
                        <td style={{width:'620px', height:'56px', textAlign:'left'}}>
                            <a>컨벤션홀 사용허가 신청서 [별지 제3호서식]</a>
                        </td>
                        <td style={{width:'160px', height:'56px'}}>전체관리자</td>
                        <td style={{width:'280px', height:'56px'}}>2010-12-08</td>
                        <td style={{width:'160px', height:'56px'}}>300</td>
                        <td style={{width:'130px', height:'56px'}}>
                            <FontAwesomeIcon icon={faPaperclip} className="convenform_button_icon" />
                            <FontAwesomeIcon icon={faPaperclip} className="convenform_button_icon" />
                        </td>
                    </tr>
                    <tr>
                        <td style={{width:'85px', height:'56px'}}>1</td>
                        <td style={{width:'620px', height:'56px', textAlign:'left'}}>
                            <a>컨벤션홀 사용허가변경(취소) 신청서 [별지 제7호서식]</a>
                        </td>
                        <td style={{width:'160px', height:'56px'}}>전체관리자</td>
                        <td style={{width:'280px', height:'56px'}}>2010-12-08</td>
                        <td style={{width:'160px', height:'56px'}}>290</td>
                        <td style={{width:'130px', height:'56px'}}>
                            <FontAwesomeIcon icon={faPaperclip} className="convenform_button_icon" />
                        </td>
                    </tr>
                </table>
                <div className="convenform_pagebtns">
                    <div className="convenform_pagebtn">1</div>
                </div>
            </div>
        </div>
    );
}

export default ConvenForm;