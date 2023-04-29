import React from "react";
import "../css/review.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Review() {
    return(
        <div className="review">
            <div className="review_title">
                <h1>공연관람평</h1>
            </div>

            <div className="review_top">
                <div className="review_toptitle">
                    <h2>총<strong>815</strong>건ㅣ<strong>1</strong>/<strong>82</strong>페이지</h2>
                </div>
                <div className="review_search">
                    <input className="review_input" type="text" placeholder="검색어를 입력하세요"></input>
                    <button className="review_btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="review_icon" />
                    </button>
                </div>
            </div>

            <div className="review_container">
                <table className="review_table">
                    <tr>
                        <th style={{width:'85px', height:'56px'}}>번호</th>
                        <th style={{width:'620px', height:'56px'}}>제목</th>
                        <th style={{width:'160px', height:'56px'}}>작성자</th>
                        <th style={{width:'280px', height:'56px'}}>작성일</th>
                        <th style={{width:'160px', height:'56px'}}>조회수</th>
                        <th style={{width:'130px', height:'56px'}}>첨부파일</th>
                    </tr>
                    <tr>
                        <td>815</td>
                        <td style={{textAlign:'left'}}>
                            <a>지젤 공연</a>
                        </td>
                        <td>이강희</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="review_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>815</td>
                        <td style={{textAlign:'left'}}>
                            <a>지젤 공연</a>
                        </td>
                        <td>이강희</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="review_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>815</td>
                        <td style={{textAlign:'left'}}>
                            <a>지젤 공연</a>
                        </td>
                        <td>이강희</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="review_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>815</td>
                        <td style={{textAlign:'left'}}>
                            <a>지젤 공연</a>
                        </td>
                        <td>이강희</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="review_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>815</td>
                        <td style={{textAlign:'left'}}>
                            <a>지젤 공연</a>
                        </td>
                        <td>이강희</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="review_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>815</td>
                        <td style={{textAlign:'left'}}>
                            <a>지젤 공연</a>
                        </td>
                        <td>이강희</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="review_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>815</td>
                        <td style={{textAlign:'left'}}>
                            <a>지젤 공연</a>
                        </td>
                        <td>이강희</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="review_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>815</td>
                        <td style={{textAlign:'left'}}>
                            <a>지젤 공연</a>
                        </td>
                        <td>이강희</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                            <FontAwesomeIcon icon={faPaperclip} className="review_table_icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>815</td>
                        <td style={{textAlign:'left'}}>
                            <a>지젤 공연</a>
                        </td>
                        <td>이강희</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        {/* <FontAwesomeIcon icon={faPaperclip} className="review_table_icon" /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>815</td>
                        <td style={{textAlign:'left'}}>
                            <a>지젤 공연</a>
                        </td>
                        <td>이강희</td>
                        <td>2023-03-11</td>
                        <td>20</td>
                        <td>
                        <FontAwesomeIcon icon={faPaperclip} className="review_table_icon" />
                        </td>
                    </tr>
                </table>
                <div className="review_pagebtns">
                    <div className="review_pagebtn">
                        <FontAwesomeIcon icon={faAnglesLeft} className="move_page_btn"/>
                    </div>
                    <div className="review_pagebtn">
                        <FontAwesomeIcon icon={faAngleLeft} className="move_page_btn"/>
                    </div>
                    <div className="review_pagebtn">1</div>
                    <div className="review_pagebtn">2</div>
                    <div className="review_pagebtn">3</div>
                    <div className="review_pagebtn">4</div>
                    <div className="review_pagebtn">5</div>
                    <div className="review_pagebtn">6</div>
                    <div className="review_pagebtn">7</div>
                    <div className="review_pagebtn">8</div>
                    <div className="review_pagebtn">9</div>
                    <div className="review_pagebtn">10</div>
                    <div className="review_pagebtn">
                        <FontAwesomeIcon icon={faAngleRight} className="move_page_btn"/>
                    </div>
                    <div className="review_pagebtn">
                        <FontAwesomeIcon icon={faAnglesRight} className="move_page_btn"/>
                    </div>
                </div>
                <div className="review_writing_btn">글쓰기</div>
            </div>
        </div>
    );
}

export default Review;