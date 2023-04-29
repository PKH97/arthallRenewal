import React from "react";
import "../css/main_notice.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function  MainNotice() {
    return(
        <div className="main_notice">
            <div className="mainnotice_title">
                <h1>공지</h1>
            </div>

            <div className="mainnotice_top">
                <div className="mainnotice_toptitle">
                    <h2>총<strong>1269</strong>건ㅣ<strong>1</strong>/<strong>127</strong>페이지</h2>
                </div>
                <div className="mainnotice_search">
                    <input className="mainnotice_input" type="text" placeholder="검색어를 입력하세요"></input>
                    <button className="mainnotice_btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="mainnotice_icon" />
                    </button>
                </div>
            </div>

            <div className="mainnotice_container">
                <table className="mainnotice_table">
                    <tr>
                        <th style={{width:'85px', height:'56px'}}>번호</th>
                        <th style={{width:'620px', height:'56px'}}>제목</th>
                        <th style={{width:'160px', height:'56px'}}>작성자</th>
                        <th style={{width:'280px', height:'56px'}}>작성일</th>
                        <th style={{width:'160px', height:'56px'}}>조회수</th>
                        <th style={{width:'130px', height:'56px'}}>첨부파일</th>
                    </tr>
                    <tr>
                        <td>
                            <h3>공지</h3>
                        </td>
                        <td style={{textAlign:'left', color:'#333'}}>
                            <a>2023 스프링페스티벌 음악 [브람스 아벤트] 오디션 합격자 발표</a>
                        </td>
                        <td>관리자</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="mainnotice_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>공지</h3>
                        </td>
                        <td style={{textAlign:'left', color:'#333'}}>
                            <a>2023 스프링페스티벌 음악 [브람스 아벤트] 오디션 합격자 발표</a>
                        </td>
                        <td>관리자</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="mainnotice_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>공지</h3>
                        </td>
                        <td style={{textAlign:'left', color:'#333'}}>
                            <a>2023 스프링페스티벌 음악 [브람스 아벤트] 오디션 합격자 발표</a>
                        </td>
                        <td>관리자</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="mainnotice_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>공지</h3>
                        </td>
                        <td style={{textAlign:'left', color:'#333'}}>
                            <a>2023 스프링페스티벌 음악 [브람스 아벤트] 오디션 합격자 발표</a>
                        </td>
                        <td>관리자</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="mainnotice_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>공지</h3>
                        </td>
                        <td style={{textAlign:'left', color:'#333'}}>
                            <a>2023 스프링페스티벌 음악 [브람스 아벤트] 오디션 합격자 발표</a>
                        </td>
                        <td>관리자</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="mainnotice_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>공지</h3>
                        </td>
                        <td style={{textAlign:'left', color:'#333'}}>
                            <a>2023 스프링페스티벌 음악 [브람스 아벤트] 오디션 합격자 발표</a>
                        </td>
                        <td>관리자</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="mainnotice_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>공지</h3>
                        </td>
                        <td style={{textAlign:'left', color:'#333'}}>
                            <a>2023 스프링페스티벌 음악 [브람스 아벤트] 오디션 합격자 발표</a>
                        </td>
                        <td>관리자</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="mainnotice_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>공지</h3>
                        </td>
                        <td style={{textAlign:'left', color:'#333'}}>
                            <a>2023 스프링페스티벌 음악 [브람스 아벤트] 오디션 합격자 발표</a>
                        </td>
                        <td>관리자</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                            <FontAwesomeIcon icon={faPaperclip} className="mainnotice_table_icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>공지</h3>
                        </td>
                        <td style={{textAlign:'left', color:'#333'}}>
                            <a>2023 스프링페스티벌 음악 [브람스 아벤트] 오디션 합격자 발표</a>
                        </td>
                        <td>관리자</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="mainnotice_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                         <td>
                            <h3>공지</h3>
                        </td>
                        <td style={{textAlign:'left', color:'#333'}}>
                            <a>2023 스프링페스티벌 음악 [브람스 아벤트] 오디션 합격자 발표</a>
                        </td>
                        <td>관리자</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        <FontAwesomeIcon icon={faPaperclip} className="mainnotice_table_icon" />
                        </td>
                    </tr>
                </table>
                <div className="mainnotice_pagebtns">
                    <div className="mainnotice_pagebtn">
                        <FontAwesomeIcon icon={faAnglesLeft} className="move_page_btn"/>
                    </div>
                    <div className="mainnotice_pagebtn">
                        <FontAwesomeIcon icon={faAngleLeft} className="move_page_btn"/>
                    </div>
                    <div className="mainnotice_pagebtn">1</div>
                    <div className="mainnotice_pagebtn">2</div>
                    <div className="mainnotice_pagebtn">3</div>
                    <div className="mainnotice_pagebtn">4</div>
                    <div className="mainnotice_pagebtn">5</div>
                    <div className="mainnotice_pagebtn">6</div>
                    <div className="mainnotice_pagebtn">7</div>
                    <div className="mainnotice_pagebtn">8</div>
                    <div className="mainnotice_pagebtn">9</div>
                    <div className="mainnotice_pagebtn">10</div>
                    <div className="mainnotice_pagebtn">
                        <FontAwesomeIcon icon={faAngleRight} className="move_page_btn"/>
                    </div>
                    <div className="review_pagebtn">
                        <FontAwesomeIcon icon={faAnglesRight} className="move_page_btn"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainNotice;