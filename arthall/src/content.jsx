import React from "react";
import './content.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { faPlus } from "@fortawesome/free-solid-svg-icons"

function Content() {
    return(
        <div className='content'>
            {/* 공연 포스터 리스트 */}
            <div className="main_list">
                <div className="list_buttons">
                    <button className="list_button">기획공연</button>
                    <button className="list_button">공동기획공연</button>
                    <button className="list_button">대관공연</button>
                    <button className="list_button">시립예술단공연</button>
                </div>

                <div className='list_posters'>
                    <div className='list_poster'>
                        <img className="poster_img" src="./images/list01.jpg" alt=""></img>
                        <div className="poster_title">
                            <h2>공연 제목</h2>
                            <h3>공연 일시</h3>
                        </div>
                    </div>
                    <div className='list_poster'>
                        <img className="poster_img" src="./images/list02.jpg" alt=""></img>
                        <div className="poster_title">
                            <h2>공연 제목</h2>
                            <h3>공연 일시</h3>
                        </div>
                    </div>
                    <div className='list_poster'>
                        <img className="poster_img" src="./images/list03.jpg" alt=""></img>
                        <div className="poster_title">
                            <h2>공연 제목</h2>
                            <h3>공연 일시</h3>
                        </div>
                    </div>
                    <div className='list_poster'>
                        <img className="poster_img" src="./images/list04.jpg" alt=""></img>
                        <div className="poster_title">
                            <h2>공연 제목</h2>
                            <h3>공연 일시</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* 공지사항 */}
            <div className="notice">
                <div className="notice_area">
                    <div className="notice_buttons">
                        <button className="notice_button">전체</button>
                        <button className="notice_button">공지사항</button>
                        <button className="notice_button">아카데미</button>
                        <button className="notice_button">오디션/공모사업</button>
                    </div>
                    {/* <div className="notice_more">
                        <FontAwesomeIcon icon={faPlus} id="more_icon" />
                    </div> */}
                    <div className="notice_lists">
                        <ul>
                            <li className="notice_list">
                                <h2>파리 오페라 발레 [지젤] 출연진 변경 안내</h2>
                                <h3>파리 오페라 발레 [지젤] 3. 4.(토) 15시 공연 알브레히트 役 폴 마르크의 건강상 이유로 제르망 루베로 변경되었음을 알려드립니다.</h3>
                                <p>
                                    <FontAwesomeIcon id="notice_icon" icon={faArrowRightLong} />
                                    2023-03-04
                                </p>
                            </li>
                            <li className="notice_list">
                                <h2>파리 오페라 발레 [지젤] 출연진 변경 안내</h2>
                                <h3>파리 오페라 발레 [지젤] 3. 4.(토) 15시 공연 알브레히트 役 폴 마르크의 건강상 이유로 제르망 루베로 변경되었음을 알려드립니다.</h3>
                                <p>
                                    <FontAwesomeIcon id="notice_icon" icon={faArrowRightLong} />
                                    2023-03-04
                                </p>
                            </li>
                            <li className="notice_list">
                                <h2>파리 오페라 발레 [지젤] 출연진 변경 안내</h2>
                                <h3>파리 오페라 발레 [지젤] 3. 4.(토) 15시 공연 알브레히트 役 폴 마르크의 건강상 이유로 제르망 루베로 변경되었음을 알려드립니다.</h3>
                                <p>
                                    <FontAwesomeIcon id="notice_icon" icon={faArrowRightLong} />
                                    2023-03-04
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="popup">
                    <div className="popup_title">
                        <h1>팝업존</h1>
                        <div className="popup_icons">
                            <FontAwesomeIcon icon={faChevronLeft} id="pop_left_icon"/>
                            <FontAwesomeIcon icon={faPause} id="pop_pause_icon" />
                            <FontAwesomeIcon icon={faChevronRight} id="pop_right_icon"/>
                        </div>
                    </div>
                    <img src="./images/notice01.jpg" alt="" />
                </div>
            </div>

            {/* 안내사항 */}
            <div className="info">
                <div className="sns">
                    <button className="sns_button">
                        <img src="./images/info_ic_pro.png" alt="" />
                        <p>공연안내 리플릿</p>
                    </button>
                    <button className="sns_button">
                        <img src="./images/info_ic_y.png" alt="" />
                        <p>유튜브</p>
                    </button>
                    <button className="sns_button">
                        <img src="./images/info_ic_f.png" alt="" />
                        <p>페이스북</p>
                    </button>
                    <button className="sns_button">
                        <img src="./images/info_ic_i.png" alt="" />
                        <p>인스타그램</p>
                    </button>
                </div>

                <div className="artcenter">
                    <div className="center_reserv">
                        <img src="./images/info_ic_tel.png" alt=""></img>
                        <div className="center_in">
                            <h2>공연예매</h2>
                            <div className="reserv_in">
                                <h3>인터파크</h3>
                                <h4>1544.1556</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="center_tel">
                        <h3>공연안내</h3>
                        <h2>042.270.8333</h2>
                    </div>

                    <button className="center_seat">
                        <img src="./images/info_ic_seat.png" alt=""></img>
                        <h3>좌석배치도</h3>
                    </button>

                </div>
            </div>

            {/* 후원자 리스트 */}
            <div className="banner">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Content;