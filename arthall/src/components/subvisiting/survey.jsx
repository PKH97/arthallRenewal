import React from "react";
import "../css/survey.css";

function Survey() {
    return(
        <div className="survey">
            <div className="survey_title">
                <h1>설문조사</h1>
            </div>

            <div className="survey_container">
                <div className="survey_warning">
                    <div className="survey_warning_icon">!</div>
                    <h2>더 나은 대전예술의전당을 위해, 아래와 같이 설문조사를 진행하고 있습니다.<strong>대전예술의전당진행중인 설문조사</strong>를 선택하시면 설문에 참여하실 수 있습니다.</h2>
                </div>
                <div className="survey_content">
                    <table>
                        <tr>
                            <th style={{width:'85px', height:'50px'}}>순번</th>
                            <th style={{width:'590px', height:'50px'}}>주제</th>
                            <th style={{width:'170px', height:'50px'}}>조사기간</th>
                            <th style={{width:'170px', height:'50px'}}>참여인원</th>
                            <th style={{width:'170px', height:'50px'}}>조사현황</th>
                        </tr>
                        <tr>
                            <td colSpan="5">조회된 게시물이 없습니다.</td>
                        </tr>
                    </table>
                    <div className="survey_pagebtns">
                        <div className="survey_pagebtn">1</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Survey;