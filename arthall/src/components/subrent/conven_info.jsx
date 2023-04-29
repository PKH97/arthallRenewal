import React from "react";
import "../css/conven_info.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function ConvenInfo() {
    return(
        <div className="conven_info">
            <div className="conveninfo_title">
                <h1>대관안내</h1>
            </div>
            <div className="conveninfo_container">
                <div className="conveninfo_warning">
                    <div className="conven_warning_icon">!</div>
                    <div className="conven_warning_content">
                        대전예술의전당에서는 세미나, 회의 등을 개최할 수 있는 컨벤션홀의 대관신청을 받고 있습니다.
                    </div>
                </div>

                <div className="conveninfo_plays">
                    <div className="conven_plays_title">대관공간</div>
                    <div className="conven_plays_content">
                        <h3><p>●</p>컨벤션홀(80석 이내)</h3>
                    </div>
                </div>

                <div className="conveninfo_paper">
                    <div className="conven_paper_title">대관신청 시 제출서류</div>
                    <div className="conven_paper_content">
                        <h3><p>●</p>개인정보 수집·이용·제공 동의서 1부</h3>
                        <h3><p>●</p>대관신청서 1부</h3>
                        <h3><p>●</p>사업자등록증 1부(사업자로 신청시)</h3>
                        <div className="conven_paper_button">
                            <h5>대관서식 다운로드</h5>
                            <FontAwesomeIcon icon={faDownload} id='conven_paper_icon' />
                        </div>
                    </div>
                </div>

                <div className="conveninfo_check">
                    <div className="conven_check_title">대관신청 시 유의사항</div>
                    <div className="conven_check_content">
                        <h3><p>●</p>대관신청서는 반드시 대전예술의전당 대관서식(소정 양식)을 사용해 주시기 바랍니다.</h3>
                        <h3><p>●</p>대관신청은 사용일로부터 14일~30일 전까지 가능합니다. (대관신청서 접수일로부터 유효)</h3>
                        <h3><p>●</p>대관신청 시 아래의 항목에 해당하는 경우에는 대관신청을 제한합니다.</h3>
                            <h4><span>ㅡ</span>공공질서의 유지와 미풍양속을 해할 우려가 있는 경우</h4>
                            <h4><span>ㅡ</span>시설 또는 설비를 훼손할 우려가 있는 경우</h4>
                            <h4><span>ㅡ</span>특정종교의 선교·포교</h4>
                            <h4><span>ㅡ</span>정치적인 목적의 공연</h4>
                            <h4><span>ㅡ</span>예술성이 배제된 일반 기념행사</h4>
                            <h4><span>ㅡ</span>그 밖에 심의위원회에서 부적합하다고 심의한 경우</h4>
                    </div>
                </div>

                <div className="conveninfo_support">
                    <div className="conven_support_title">지원시설</div>
                    <div className="conven_support_content">
                        <h3><p>●</p>빔프로젝트 / 음향장비 / 유선마이크 1대, 무선마이크 2대</h3>
                        <h6>※ 프레젠테이션에 필요한 노트북(PC), 레이저 포인터는 지원되지 않습니다.</h6>
                    </div>
                </div>
                <div className="conveninfo_etc">
                    <div className="convent_ect_title">기타</div>
                    <div className="convent_ect_content">
                        <h3><p>●</p>현수막 사이즈 : 가로 6m, 세로 90cm</h3>
                    </div>
                </div>
                <div className="conveninfo_inquiry">
                    <div className="conven_inquiry_title">대관문의 및 접수</div>
                    <div className="conven_inquiry_content">
                        <h3><p>●</p>대전예술의전당 공연기획과 공연지원팀</h3>
                        <h4><span>ㅡ</span>문의전화 : 042)270-8112</h4>
                        <h3><p>●</p>대관신청은 홈페이지를 통해 서식작성 후 반드시 우편으로 접수해주시기 바랍니다.</h3>
                    </div>
                </div>
                <div className="conveninfo_payback">
                    <div className="conven_payback_title">대관료 환불</div>
                    <div className="conven_payback_content">
                        <h3><p>●</p>사용예정일 전일까지 취소하는 경우: 총 대관료 30%을 제외한 차액 환불</h3>
                        <h3><p>●</p>사용예정일 이후에 취소하는 경우: 총 대관료 30%을 제외한 금액에서 사용일수만큼 일할계산 금액을 제외한 차액 환불</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ConvenInfo;