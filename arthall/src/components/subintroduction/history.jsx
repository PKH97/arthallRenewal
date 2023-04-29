import React from "react";
import "../css/history.css";

function History() {
    return(
        <div className="history">
            <div className="history_title">
                <h1>연혁</h1>
            </div>

            <div className="history_container">
                <div className="history_list">
                    <div className="history_list_title">주요연혁</div>
                    <ul>
                        <li>
                            <div className="history_list_circle">2020's</div>
                            <div className="text_2020">
                                <h3><p>●</p>2021.04.01</h3>
                                <h4>대전예술의전당 홍선희 7대관장 취임</h4>
                            </div>
                        </li>
                        <li>
                            <div className="history_list_circle">2010's</div>
                            <div className="text_2010">
                                <div className="text_2010_left">
                                    <h3><p>●</p>2019.04.01</h3>
                                    <h3><p>●</p>2015.04.01</h3>
                                    <h3><p>●</p>2014.04.11</h3>
                                    <h3><p>●</p>2013.04.01</h3>
                                    <h3><p>●</p>2010.10.27</h3>
                                </div>
                                <div className="text_2010_right">
                                    <h4>대전예술의전당 김상균 6대관장 취임</h4>
                                    <h4>대전예술의전당 오병권 5대관장 취임</h4>
                                    <h4>대전문화예술의전당에서「대전예술의전당」으로 기관명칭 변경</h4>
                                    <h4>대전문화예술의전당 이용관 4대관장 취임</h4>
                                    <h4>대전문화예술의전당 임해경 3대관장 취임</h4>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="history_list_circle">2000's</div>
                            <div className="text_2000">
                                <div className="text_2000_left">
                                    <h3><p>●</p>2007.11.01</h3>
                                    <h3><p>●</p>2004.03.26</h3>
                                    <h3><p>●</p>2004.02.25</h3>
                                    <h3><p>●</p>2003.11.22</h3>
                                    <h3><p>●</p>2003.10.01</h3>
                                    <h3><p>●</p>2003.08.30</h3>
                                    <h3><p>●</p>2003.07.10</h3>
                                </div>
                                <div className="text_2000_right">
                                    <h4>대전문화예술의전당 김용환 2대관장 취임</h4>
                                    <h4>대전문화예술의전당 재개관</h4>
                                    <h4>대전문화예술의전당 홈페이지 오픈</h4>
                                    <h4>재개관을 위한 임시 휴관</h4>
                                    <h4>대전문화예술의전당 개관</h4>
                                    <h4>대전문화예술의전당 조석준 초대관장 취임</h4>
                                    <h4>대전문화예술의전당 건축공사 준공</h4>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="history_list_circle">1990's</div>
                            <div className="text_1990">
                                <h3><p>●</p>1996.03.16</h3>
                                <h4>대전문화예술의전당 공사 착공</h4>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="history_images">
                    <div className="history_images_title">사진으로보는 건설과정</div>
                    <ul>
                        <li>
                            <img src="../images/history_01.jpg"></img>
                        </li>
                        <li>
                            <img src="../images/history_02.jpg"></img>
                        </li>
                        <li>
                            <img src="../images/history_03.jpg"></img>
                        </li>
                        <li>
                            <img src="../images/history_04.jpg"></img>
                        </li>
                        <li>
                            <img src="../images/history_05.jpg"></img>
                        </li>
                        <li>
                            <img src="../images/history_06.jpg"></img>
                        </li>
                        <li>
                            <img src="../images/history_07.jpg"></img>
                        </li>
                        <li>
                            <img src="../images/history_08.jpg"></img>
                        </li>
                        <li>
                            <img src="../images/history_09.jpg"></img>
                        </li>
                        <li>
                            <img src="../images/history_10.jpg"></img>
                        </li>
                        <li>
                            <img src="../images/history_11.jpg"></img>
                        </li>
                        <li>
                            <img src="../images/history_12.jpg"></img>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    );
}

export default History;