import React from "react";
import "../css/fieldtrip_info.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

function FieldtripInfo() {
    return(
        <div className="fieldtrip_info">
            <div className="fieldinfo_tile">
                <h1>견학안내</h1>
            </div>

            <div className="fieldinfo_container">
                <div className="fieldinfo_warning">
                    <div className="fieldinfo_warning_icon">!</div>
                    <h2>코로나19 확산 방지를 위하여 당분간 견학을 진행하지 않습니다. 이 점 양해하여 주시기 바랍니다.</h2>
                </div>

                <div className="fieldinfo_content">
                    <div className="fieldinfo_grup">
                        <div className="grupfield_title">단체견학신청시<br/>유의사항</div>
                        <div className="grupfield_content">
                            <h3><p>●</p>예정된 관람일 <strong>2주일 전</strong>까지 전화신청을 통해 사전 예약해 주시기 바랍니다.</h3>
                            <h3><p>●</p>견학대상은 초등학생 이상의 단체로 단체관람 인원은 <strong>40명</strong> 내외로 합니다.</h3>
                            <h3><p>●</p>소요시간은 <strong>30분</strong> 내외입니다.</h3>
                            <h3><p>●</p>무대투어는 안전을 위해 대학생 이상 가능합니다.</h3>
                        </div>
                    </div>

                    <div className="fieldinfo_rute">
                        <div className="ruteinfo_title">견학진행코스</div>
                        <div className="ruteinfo_content">
                            <div className="full_circle">
                                <span>01</span>
                                <h4>담당자 미팅<br/>(대전예술의전당<br/>1층 로비)</h4>
                            </div>
                            <FontAwesomeIcon icon={faAnglesRight} className="ruteinfo_icon"/>
                            <div className="emty_circle">
                                <span>02</span>
                                <h4>공간별<br/>전체적인 설명</h4>
                            </div>
                            <FontAwesomeIcon icon={faAnglesRight} className="ruteinfo_icon"/>
                            <div className="full_circle">
                                <span>03</span>
                                <h4>아트홀 내부시설<br/>관림 및 설명</h4>
                            </div>
                            <FontAwesomeIcon icon={faAnglesRight} className="ruteinfo_icon"/>
                            <div className="emty_circle">
                                <span>04</span>
                                <h4>앙상블홀 내부시설<br/>관림 및 설명</h4>
                            </div>
                            <FontAwesomeIcon icon={faAnglesRight} className="ruteinfo_icon"/>
                            <div className="full_circle">
                                <span>05</span>
                                <h4>야외음악당<br/>관람 및 설명</h4>
                            </div>
                        </div>
                    </div>

                    <div className="fieldinfo_request">
                        <div className="fieldinfo_request_title">단체견학신청안내</div>
                        <div className="fieldinfo_request_content">
                            <h3><p>●</p>대전예술의전당 견학을 원하시는 단체는<strong>전화상담 후 온라인 신청</strong>을 하시기 바랍니다.</h3>
                            <h3><p>●</p>견학담당자 : 홍보팀 (042)270-8144</h3>
                            <div className="fieldinfo_request_box">
                                <h4>※ 예당사정(공연일정,시설설비 등) 에 따라 제한, 변경 될 수 있습니다.</h4>
                                <h4>※ 공휴일(국경일포함)은 견학을 진행하지 않습니다.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FieldtripInfo;