import React from "react";
import "../css/public_audition.css";

function PublicAudition() {
    return(
        <div className="public_audition">
            <div className="publicaudition_title">
                <h1>공모사업신청</h1>
            </div>

            <div className="publicaudition_container">
                <div className="publicaudition_warning">
                    <div className="publicaudition_warning_icon">!</div>
                    <h2><strong>대전예술의전당</strong>에서는 아래와 같이 오디션 및 공모사업을 신청받고 있습니다. 공고명을 클릭하시면 보다 자세한 내용을 보실 수 있으며, 인터넷 접수가 가능합니다.</h2>
                </div>
                <div className="publicaudition_content">
                    <table>
                        <tr>
                            <th style={{width:'85px', height:'56px'}}>순번</th>
                            <th style={{width:'620px', height:'56px'}}>공고명</th>
                            <th style={{width:'160px', height:'56px'}}>공고일</th>
                            <th style={{width:'280px', height:'56px'}}>접수기간</th>
                            <th style={{width:'130px', height:'56px'}}>접수현황</th>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td style={{textAlign:'left'}}>
                                <a>2015 자체제작 연극 [유령] 배우 오디션</a>
                            </td>
                            <td>2015-03-18</td>
                            <td>2015-04-08~2015-04-10</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td style={{textAlign:'left'}}>
                                <a>2015 자체제작 오페라 [돈 조반니] 오디션</a>
                            </td>
                            <td>2015-02-23</td>
                            <td>2015-03-23~2015-03-26</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td style={{textAlign:'left'}}>
                                <a>2014 Winter Festival 신청</a>
                            </td>
                            <td>2013-11-11</td>
                            <td>2013-11-14~2013-11-15</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td style={{textAlign:'left'}}>
                                <a>[아저씨를 위한 무책임한 땐쓰] 출연자 공개 오디션	</a>
                            </td>
                            <td>2013-01-11	</td>
                            <td>2013-01-14~2013-03-08</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td style={{textAlign:'left'}}>
                                <a>2013 Winter Festival 신청</a>
                            </td>
                            <td>2012-10-22</td>
                            <td>2012-11-19~2012-11-20</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td style={{textAlign:'left'}}>
                                <a>2012 Winter Festival 신청</a>
                            </td>
                            <td>2011-10-31</td>
                            <td>2011-10-31~2011-10-28</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                    </table>

                    <div className="publicaudition_pagebtns">
                        <div className="publicaudition_pagebtn">1</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublicAudition;