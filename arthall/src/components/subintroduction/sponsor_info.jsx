import React from "react";
import "../css/sponsor_info.css";

function SponsorInfo() {
    return(
        <div className="sponsor_info">
            <div className="sponsor_info_title">
                <h1>후원회소개</h1>
            </div>

            <div className="sponsor_info_container">
                <div className="sponsor_info_warning">
                    <div className="sponsor_info_warning_icon">!</div>
                    <h2>
                        지역문화 예술발전에 기여하는<strong> 대전예술의전당 후원회</strong>를 소개합니다.
                    </h2>
                </div>

                <div className="sponsor_info_content">
                    <div className="sponsor_introduction">
                        <div className="sponsor_introduction_title">후원회소개</div>
                        <div className="sponsor_introduction_box">
                            <h2>
                                사단법인 대전예술의전당 후원회는2003년 10월 대전예술의전당 개관과 함께 
                                2004년 4월, 후원회 구성의 태동을 알리는 발기인 대회를 개최, 이어 5월 21일 
                                지역의 대학 총·학장, 대덕연구단지 연구소장, 지역 기업가, 법조계, 의료계등 
                                사회각계에서 활동하는 120여명 회원들의 적극적인 성원과 참여속에 지역 문화
                                예술발전에 도움을 주고자 하는 취지로 출범 하였습니다.
                            </h2>
                            <h2>
                                출범이후, 전당과의 공동 기획공연 추진, 소년소녀 가장 돕기 및 소외계층 초청 
                                행사, 지역예술 신예 유망주 육성을 위한 투자 참여, 공연감상문 공모전 등 활발
                                한 활동을 벌이고 있는 ‘대전예술의전당 후원회’는 2008년 9월 사단 법인으로의 
                                재출범과 함께 기업 이윤의 사회 환원과 지역문화예술발전에 후원하고 지원하는 
                                메세나 운동과 명실상부한 지역문화의 중심으로 자리 매김하고 있습니다.향후 
                                ‘대전예술의전당 후원회’는 대전광역시의 브랜드 가치를 높이고 시민의 감성을 
                                살찌게하며 대전예술의전당의 문화, 예술 사업에 대한 후원과 회원의 유기적인 
                                활동을 통해 전당이 대전광역시의 대표적인 문화예술기관으로서 국내는 물론 
                                세계를 향하여 성장해 나가는데 기여할 것입니다.
                            </h2>
                        </div>
                    </div>

                    <div className="sponsor_list">
                        <div className="sponsor_list_title">후원회 임원 명단</div>
                        <div className="sponsor_list_box">
                            <table>
                                <tr>
                                    <th>구분</th>
                                    <th>성명</th>
                                    <th>비고</th>
                                </tr>
                                <tr>
                                    <th>회장</th>
                                    <td>신동진</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>부회장</th>
                                    <td>박성일, 박준용, 오재욱, 김복경, 양종대</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>상임이사</th>
                                    <td>송인암, 나경수, 한기선, 박종영, 김숙현, 강도묵, 박미숙, 윤성희, 손외수, 오진화, 최이석, 진규현, 강경애, 정운영</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>감사</th>
                                    <td>이충식</td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="sponsor_consultant">
                        <div className="sponsor_consultant_title">고문 및 자문위원</div>
                        <div className="sponsor_consultant_box">
                            <table>
                                <tr>
                                    <th>구분</th>
                                    <th>성명</th>
                                    <th>비고</th>
                                </tr>
                                <tr>
                                    <th>고문</th>
                                    <td>임철중, 장정민, 최규남</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>자문위원</th>
                                    <td>강근식, 김종천</td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="sponsor_director">
                        <div className="sponsor_director_title">보직이사 명단</div>
                        <div className="sponsor_director_box">
                            <table>
                                <tr>
                                    <th>구분</th>
                                    <th>성명</th>
                                    <th>비고</th>
                                </tr>
                                <tr>
                                    <th>총무이사</th>
                                    <td>오재욱 / 위원_김숙현, 박미숙</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>기획이사</th>
                                    <td>한기선 / 위원_윤성희, 최이석</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>홍보이사</th>
                                    <td>박종영 / 위원_이성춘, 오진화</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>장학이사</th>
                                    <td>강도묵 / 위원_김복경</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>조직이사</th>
                                    <td>손외수 / 위원_양종대</td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="sponsor_business">
                        <div className="sponsor_business_title">사업목적</div>
                        <div className="sponsor_business_box">
                            <h2>
                                메세나 사업의 일환으로 문화소외계층의 공연기회 제공과 지역 유망 연주자 및 음악영재 
                                발굴 및 양성사업, 청소년 공연 감상문 사업등을 통한 공연관람 기회 확대와 대전예술의
                                전당 활성화를 통한 지역 문화예술발전에 기여 하고자 함.
                            </h2>
                        </div>
                    </div>

                    <div className="sponsor_direction">
                        <div className="sponsor_direction_title">추진방향</div>
                        <div className="sponsor_direction_box">
                            <h3><p>●</p>공연예술저변확대를 위한 소외계층 공연관람 후원사업</h3>
                            <h3><p>●</p>청소년대상 공연감상문 공모사업</h3>
                            <h3><p>●</p>기업 및 공연예술단체 및 예술인 결연지원 사업</h3>
                            <h3><p>●</p>지역문화예술 활성화 지원사업을 통한 공연예술 향유기회 확대</h3>
                        </div>
                    </div>

                    <div className="sponsor_detail">
                        <div className="sponsor_detail_title">세부 추진계획</div>
                        <div className="sponsor_detail_box">
                            <h3><p>●</p>기획공연 ‘아침을 여는 클래식’ 공연 협찬</h3>
                            <h3><p>●</p>청소년을 위한 공연 감상문 공모전 개최</h3>
                            <h3><p>●</p>문화소외계층 공연관람 추진</h3>
                            <h3><p>●</p>어린이날 기념 사업(소년소녀가장등 공연관람 기회 제공)</h3>
                            <h3><p>●</p>국내외 유명단체 초청공연 메세나 지원사업</h3>
                            <h3><p>●</p>회원음악회 지원 사업</h3>
                            <h3><p>●</p>대전예술의전당 페스티벌 기업참여 유도 및 협찬</h3>
                        </div>
                    </div>

                    <div className="sponsor_future">
                        <div className="sponsor_future_title">향후계획</div>
                        <div className="sponsor_future_box">
                            <h3><p>●</p>사단법인 및 ‘지정기부금단체’로의 출발을 통한 공연후원사업 확대 및 활성화</h3>
                                <h4><span>ㅡ</span>기업 및 기관, 연구소 등을 대상으로 대전예술의전당 공연홍보 및 후원유도</h4>
                                <h4><span>ㅡ</span>기업 후원유도를 통한 소외계층 공연관람기회 확대 운영</h4>
                                <h4><span>ㅡ</span>공모사업활성화를 통한 청소년 공연관람기회 확대 및 참여대상 확대운영</h4>
                                <h4><span>ㅡ</span>지역 공중파 방송사, 케이블 방송, 신문사와 공동으로 기부문화 활성화를 위한 캠페인 진행</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsorInfo;