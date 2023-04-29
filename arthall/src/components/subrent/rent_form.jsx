import React from "react";
import "../css/rent_form.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

function RentForm() {
    return(
        <div className="rent_form">
            <div className="rentform_title">
                <h1>대관서식</h1>
            </div>

            <div className="rentform_top">
                <div className="rentform_toptitle">
                    <h2>총<strong>9</strong>건ㅣ<strong>1</strong>/<strong>1</strong>페이지</h2>
                </div>
                <div className="rentform_search">
                    <input className="rentform_input" type="text" placeholder="검색어를 입력하세요"></input>
                    <button className="rentform_btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="rentform_icon" />
                    </button>
                </div>
            </div>

            <div className="rentform_container">
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
                        <td>9</td>
                        <td style={{textAlign:'left'}}>
                            <a>공연진행 체크리스트(스태프회의 시 지참)</a>
                        </td>
                        <td>관리자</td>
                        <td>2023-02-15</td>
                        <td>67</td>
                        <td>
                            <FontAwesomeIcon icon={faPaperclip} className="formdown_icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td style={{textAlign:'left'}}>
                            <a>공연장 사용허가 신청서 [별지 제1호서식]</a>
                        </td>
                        <td>전체관리자</td>
                        <td>2010-12-08</td>
                        <td>333</td>
                        <td>
                            <FontAwesomeIcon icon={faPaperclip} className="formdown_icon" />
                            <FontAwesomeIcon icon={faPaperclip} className="formdown_icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td style={{textAlign:'left'}}>
                            <a>공연계획서 [별지 제2호서식]</a>
                        </td>
                        <td>전체관리자</td>
                        <td>2010-12-08</td>
                        <td>237</td>
                        <td>
                            <FontAwesomeIcon icon={faPaperclip} className="formdown_icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td style={{textAlign:'left'}}>
                            <a>부대설비 사용허가 신청서 [별제 제4호서식]</a>
                        </td>
                        <td>전체관리자</td>
                        <td>2010-12-08</td>
                        <td>311</td>
                        <td>
                            <FontAwesomeIcon icon={faPaperclip} className="formdown_icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td style={{textAlign:'left'}}>
                            <a>	추가설비 사용허가 신청서 [별지 제5호서식]</a>
                        </td>
                        <td>전체관리자</td>
                        <td>2010-12-08</td>
                        <td>227</td>
                        <td>
                            <FontAwesomeIcon icon={faPaperclip} className="formdown_icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td style={{textAlign:'left'}}>
                            <a>공연장 사용허가변경(취소) 신청서 [별지 제6호서식]</a>
                        </td>
                        <td>전체관리자</td>
                        <td>2010-12-08</td>
                        <td>229</td>
                        <td>
                            <FontAwesomeIcon icon={faPaperclip} className="formdown_icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td style={{textAlign:'left'}}>
                            <a>	공연장 사용계약서 [별지 제8호서식]</a>
                        </td>
                        <td>전체관리자</td>
                        <td>2010-12-08</td>
                        <td>237</td>
                        <td>
                            <FontAwesomeIcon icon={faPaperclip} className="formdown_icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td style={{textAlign:'left'}}>
                            <a>	사용료 감면신청서 [별지 제10호서식]</a>
                        </td>
                        <td>전체관리자</td>
                        <td>2010-12-08</td>
                        <td>202</td>
                        <td>
                            <FontAwesomeIcon icon={faPaperclip} className="formdown_icon" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td style={{textAlign:'left'}}>
                            <a>	입장권 검인신청서 [별지 제11호서식]</a>
                        </td>
                        <td>전체관리자</td>
                        <td>2010-12-08</td>
                        <td>183</td>
                        <td>
                            <FontAwesomeIcon icon={faPaperclip} className="formdown_icon" />
                            <FontAwesomeIcon icon={faPaperclip} className="formdown_icon" />
                        </td>
                    </tr>
                    
                </table>
                <div className="rentform_pagebtns">
                    <div className="rentform_pagebtn">1</div>
                </div>
            </div>

        </div>
    );
}

export default RentForm;