import React from "react";
import "../css/organization.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Organization() {
    return(
        <div className="organization">
            <div className="organization_title">
                <h1>조직과 기구</h1>
            </div>

            <div className="organization_container">
                <div className="organization_warning">
                    <div className="organization_warning_icon">!</div>
                    <h2>
                        대전예술의전당은 <strong>1관장 2과 9팀</strong>으로 최고의 공연을 위한 탄탄한 조직으로 구성되어 있습니다.
                    </h2>
                </div>

                <div className="organization_image">
                    <img src="../images/mapping.png"></img>
                </div>

                <div className="organization_content">
                    <div className="organization_top">
                        <div className="organization_toptitle">
                            <h2>총<strong>815</strong>건ㅣ<strong>1</strong>/<strong>82</strong>페이지</h2>
                        </div>

                        <div className="organization_search">
                            <form className="organization_inputs">
                                <select className="organization_select">
                                    <option value="type">분류검색</option>
                                    <option value="name">성명</option>
                                    <option value="work">담당업무</option>
                                    <option value="phone_numer">전화번호</option>
                                </select>
                            </form>
                            <input className="organization_input" type="text" placeholder="검색어를 입력하세요"></input>
                            <button className="organization_btn">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="organization_icon" />
                            </button>
                        </div>
                    </div>

                    <div>
                        <table className="organization_table">
                            <tr>
                                <th>성명</th>
                                <th>직책</th>
                                <th>담당업무</th>
                                <th>전화번호</th>
                            </tr>
                            <tr>
                                <td>홍선희</td>
                                <td>관장</td>
                                <td>
                                    <h4><span>-</span>대전예술의전당 업무 총괄</h4>
                                </td>
                                <td>042-270-8101</td>
                            </tr>
                            <tr>
                                <td>우희재</td>
                                <td>공연기획과장</td>
                                <td>
                                    <h4><span>-</span>공연기획과 업무 총괄</h4>
                                </td>
                                <td>042-270-8110</td>
                            </tr>
                            <tr>
                                <td>김철희</td>
                                <td>공연지원팀장</td>
                                <td>
                                    <h4><span>-</span>예술의전당 공연지원팀 총괄</h4>
                                    <h4><span>-</span>예술의전당 인력 총괄관리</h4>
                                    <h4><span>-</span>경리담당 주무(지출원, 물품출납원 등)</h4>
                                    <h4><span>-</span>공무원(임기제 포함) 인사, 복무관리</h4>
                                    <h4><span>-</span>공무직 및 기간제근로자 복무관리</h4>
                                </td>
                                <td>042-270-8111</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>우희재</td>
                                <td>공연기획과장</td>
                                <td>
                                    <h4><span>-</span>공연기획과 업무 총괄</h4>
                                </td>
                                <td>042-270-8110</td>
                            </tr>
                            <tr>
                                <td>우희재</td>
                                <td>공연기획과장</td>
                                <td>
                                    <h4><span>-</span>공연기획과 업무 총괄</h4>
                                </td>
                                <td>042-270-8110</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>우희재</td>
                                <td>공연기획과장</td>
                                <td>
                                    <h4><span>-</span>공연기획과 업무 총괄</h4>
                                </td>
                                <td>042-270-8110</td>
                            </tr>
                            <tr>
                                <td>우희재</td>
                                <td>공연기획과장</td>
                                <td>
                                    <h4><span>-</span>공연기획과 업무 총괄</h4>
                                </td>
                                <td>042-270-8110</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                            <tr>
                                <td>권수아</td>
                                <td>주무관</td>
                                <td>
                                    <h4><span>-</span>의회 관련업무(주요업무보고, 조례 등)</h4>
                                    <h4><span>-</span>예산 편성 및 결산에 관한 사항</h4>
                                    <h4><span>-</span>각종 회의자료 작성(주간업무계획 등)</h4>
                                    <h4><span>-</span>공유재산 관리에 관한 사항</h4>
                                    <h4><span>-</span>BSC 성과관리 및 종합평가에 관한 사항</h4>
                                    <h4><span>-</span>세입세출외현금출납원</h4>
                                    <h4><span>-</span>관용차량, 컨벤션홀 대관에 관한 사항</h4>
                                </td>
                                <td>042-270-8112</td>
                            </tr>
                        </table>

                        <div className="organization_pagebtns">
                            <div className="organization_pagebtn">1</div>
                            <div className="organization_pagebtn">2</div>
                            <div className="organization_pagebtn">3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Organization;