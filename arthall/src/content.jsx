import React from "react";
// import './content.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const PosterContent = styled.div`
    margin: 0 auto;
    width: 100%;
    padding-top: 200px;

    @media all and (max-width: 480px) {
        margin: 0 auto;
        width: 480px;
        padding-top: 140px;
    }
`

/* 공연 포스터 리스트 */
const MainList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    width: 100%;
    height: 650px;
    background-color: #eaedf2;
    
    @media all and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        width: 480px;
        height: 750px;
        background-color: #eaedf2;
    }
`
const ListButttons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
    width: 810px;
    height: 70px;

    & > button {
        width: 200px;
        height: 70px;
        font-size: 18px;
        font-weight: 600;
    }

    @media all and (max-width: 480px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 20px;
        width: 400px;
        height: 150px;

        & > button {
            width: 195px;
            height: 70px;
            margin-top: 5px;
            font-size: 18px;
            font-weight: 600;
        }
    }
`
const ListPosters = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1300px;

    @media all and (max-width: 480px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 375px;
    }
`
const ListPoster = styled.div`
    width: 270px;
    height: 425px;

    & > img {
        width: 270px;
        height: 350px;
    }
    & > div {
        width: 270px;
        height: 75px;
        background-color: #fff;
    }
    & > div > h2 {
        padding-top: 10px;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
    }
    & > div > h3 {
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        color: rgb(85, 85, 85);
    }

    @media all and (max-width: 480px) {
        margin-top: 15px;
        width: 180px;
        height: 240px;

        & > img {
            width: 180px;
            height: 240px;
        }
        & > div {
            display: none;
        }
        & > div > h2 {
            padding-top: 10px;
            text-align: center;
            font-size: 20px;
            font-weight: 600;
        }
        & > div > h3 {
            text-align: center;
            font-size: 15px;
            font-weight: 600;
            color: rgb(85, 85, 85);
        }
    }
`

/* 공지사항 */
const Notice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 470px;  

    @media all and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 480px;
        height: 1250px;
    }
`
const NoticeArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 450px;

    @media all and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 450px;
        height: 750px;
    }
`
const NoticeButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    margin-left: 30px;
    width: 700px;
    height: 60px;

    & > button {
        width: 170px;
        height: 60px;
        background-color: #eaedf2;
    }

    @media all and (max-width: 480px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0;
        width: 350px;
        height: 130px;

        & > button {
            width: 170px;
            height: 60px;
            background-color: #eaedf2;
        }
    }
`
const NoticeLists = styled.div`
    padding-top: 50px;
    width: 1000px;
    height: 300px;

    @media all and (max-width: 480px) {
        padding-top: 15px;
        width: 450px;
        height: 620px;
    }
`
const NoticeListUl = styled.ul`
    display: flex;
    justify-content: space-between;

    @media all and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`
const NoticeList = styled.li`
    padding: 25px;
    width: 300px;
    height: 250px;
    border: 1px solid #ddd;
    cursor: pointer;

    & > h2 {
        font-size: 20px;
        font-weight: 600;
    }
    & > h3 {
        margin-top: 25px;
        font-size: 15px;
        font-family: 400;
    }
    & > p {
        margin-top: 20px;
        font-size: 12px;
    }
    & > p > div {
        font-size: 12px;
    }

    @media all and (max-width: 480px) {
        padding: 25px;
        margin-top: 15px;
        width: 380px;
        height: 180px;
        border: 1px solid #ddd;
        cursor: pointer;

        & > h2 {
            font-size: 20px;
            font-weight: 600;
        }
        & > h3 {
            margin-top: 25px;
            font-size: 15px;
            font-family: 400;
        }
        & > p {
            display: none;
        }
        & > p > div {
            display: none;
        }
    }
`
const Popup = styled.div`
    width: 365px;
    height: 450px;
    margin-left: 50px;

    @media all and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 480px;
        height: 450px;
        margin: 0px;
    }
`
const PopupTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    & > h1 {
        width: 150px;
        height: 60px;
        padding-top: 30px;
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }

    @media all and (max-width: 480px) {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        width: 365px;

        & > h1 {
            width: 150px;
            height: 60px;
            padding-top: 30px;
            font-size: 22px;
            font-weight: 600;
            text-align: center;
        }
    }
`
const PopupIcons = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
    width: 150px;
    height: 60px;

    & > div {
        font-size: 20px;
    }

    @media all and (max-width: 480px) {
        display: flex;
        justify-content: space-around;
        padding-top: 30px;
        width: 150px;
        height: 60px;

        & > div {
            font-size: 20px;
        }
    }
`
const PopupImg = styled.img`
    margin: 0px;
`

/* 안내사항 */
const Info = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    width: 100%;
    height: 260px;
    background-color: #eaedf2;

    @media all and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 0px;
        width: 480px;
        height: 600px;
        background-color: #eaedf2;
    }
`
const Sns = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 35px;
    padding-top: 5px;
    width: 485px;
    height: 150px;
    background-color: #fff;

    @media all and (max-width: 480px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0;
        padding-top: 5px;
        width: 480px;
        height: 150px;
        background-color: #fff;
    }
`
const SnsButton = styled.button`
    width: 80px;
    height: 100px;

    & > img {
        width: 50px;
        height: 50px;
    }
    & > p {
        text-align: center;
        font-size: 15px;
        font-weight: 600;
    }

    @media all and (max-width: 480px) {
        width: 80px;
        height: 100px;

        & > img {
            width: 50px;
            height: 50px;
        }
        & > p {
            text-align: center;
            font-size: 15px;
            font-weight: 600;
        }
    }
`
const ArtCenter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 890px;
    height: 150px;
    background-color: #fff;

    @media all and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 0px;
        margin-top: 20px;
        width: 480px;
        height: 350px;
        background-color: #fff;
    }
`
const CenterReserv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 7px;
    width: 360px;
    height: 85px;
    border-right: 1px dashed #ddd;

    & > img {
        margin-right: 15px;
        width: 72px;
        height: 72px;
    }

    @media all and (max-width: 480px) {
        display: flex;
        justify-content: center;
        padding: 7px 10px;
        width: 100%;
        height: 100px;
        border-right: none;
        border-bottom: 1px dashed #ddd;

        & > img {
            margin-right: 15px;
            width: 72px;
            height: 72px;
        }
    }
`
const CenterIn = styled.div`
    display: flex;
    flex-direction: column;
    width: 205px;
    height: 72px;

    & > h2 {
        font-size: 20px;
        font-weight: 600;
        color: #6b6b6b; 
    }

    @media all and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        width: 205px;
        height: 72px;

        & > h2 {
            font-size: 20px;
            font-weight: 600;
            color: #6b6b6b; 
        }
    }
`
const ReservIn = styled.div`
    display: flex;
    justify-content: space-around;

    & > h3 {
        width: 90px;
        height: 25px;
        border-radius: 50px;
        margin-top: 3px;
        padding-top: 5px;
        font-size: 13px;
        font-weight: 400;
        text-align: center;
        color: #fff;
        background-color: #3b3b3b;
    }
    & > h4 {
        font-size: 23px;
        font-weight: 500;
    }

    @media all and (max-width: 480px) {
        display: flex;
        justify-content: space-around;

        & > h3 {
            width: 90px;
            height: 25px;
            border-radius: 50px;
            margin-top: 3px;
            padding-top: 5px;
            font-size: 13px;
            font-weight: 400;
            text-align: center;
            color: #fff;
            background-color: #3b3b3b;
        }
        & > h4 {
            font-size: 23px;
            font-weight: 500;
        }
    }
`
const CenterTel = styled.div`
    width: 190px;
    height: 85px;
    padding-top: 10px;
    border-right: 1px dashed #ddd;

    & > h2 {
        font-size: 27px;
        font-weight: 500;
    }
    & > h3 {
        font-size: 20px;
        font-weight: 600;
        color: #6b6b6b;
    }

    @media all and (max-width: 480px) {
        width: 100%;
        height: 85px;
        padding-top: 5px;
        padding-bottom: 10px;
        border-right: none;
        border-bottom: 1px dashed #ddd;
    
        & > h2 {
            font-size: 27px;
            font-weight: 500;
            text-align: center;
        }
        & > h3 {
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            color: #6b6b6b;
        }
    }
`
const CenterSeat = styled.div`
    display: flex;
    padding-top: 5px;
    width: 180px;
    height: 85px;

    & > img {
        width: 72px;
        height: 72px;
    }
    & > h3 {
        margin-top: 25px;
        margin-left: 8px;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
    }

    @media all and (max-width: 480px) {
        display: flex;
        justify-content: center;
        padding-top: 5px;
        width: 100%;
        height: 85px;
    
        & > img {
            width: 72px;
            height: 72px;
        }
        & > h3 {
            margin-top: 25px;
            margin-left: 8px;
            text-align: center;
            font-size: 20px;
            font-weight: 600;
            text-align: center;
        }
    }
`
/* 후원자 리스트 */
const Banner = styled.div`
    width: 100%;
    height: 122px;
    background-color: #fff;

    @media all and (max-width: 480px) {
        width: 480px;
        height: 30px;
        background-color: #fff;
    }
`

function Content() {
    return(
        <PosterContent>
            {/* 공연 포스터 리스트 */}
            <MainList>
                <ListButttons>
                    <button className="list_button">기획공연</button>
                    <button className="list_button">공동기획공연</button>
                    <button className="list_button">대관공연</button>
                    <button className="list_button">시립예술단공연</button>
                </ListButttons>

                <ListPosters>
                    <ListPoster>
                        <img className="poster_img" src="./images/list01.jpg" alt=""></img>
                        <div className="poster_title">
                            <h2>공연 제목</h2>
                            <h3>공연 일시</h3>
                        </div>
                    </ListPoster>
                    <ListPoster>
                        <img className="poster_img" src="./images/list02.jpg" alt=""></img>
                        <div className="poster_title">
                            <h2>공연 제목</h2>
                            <h3>공연 일시</h3>
                        </div>
                    </ListPoster>
                    <ListPoster>
                        <img className="poster_img" src="./images/list03.jpg" alt=""></img>
                        <div className="poster_title">
                            <h2>공연 제목</h2>
                            <h3>공연 일시</h3>
                        </div>
                    </ListPoster>
                    <ListPoster>
                        <img className="poster_img" src="./images/list04.jpg" alt=""></img>
                        <div className="poster_title">
                            <h2>공연 제목</h2>
                            <h3>공연 일시</h3>
                        </div>
                    </ListPoster>
                </ListPosters>
            </MainList>

            {/* 공지사항 */}
            <Notice>
                <NoticeArea>
                    <NoticeButtons>
                        <button className="notice_button">전체</button>
                        <button className="notice_button">공지사항</button>
                        <button className="notice_button">아카데미</button>
                        <button className="notice_button">오디션/공모사업</button>
                    </NoticeButtons>
                    {/* <div className="notice_more">
                        <FontAwesomeIcon icon={faPlus} id="more_icon" />
                    </div> */}
                    <NoticeLists>
                        <NoticeListUl>
                            <NoticeList>
                                <h2>파리 오페라 발레 [지젤] 출연진 변경 안내</h2>
                                <h3>파리 오페라 발레 [지젤] 3. 4.(토) 15시 공연 알브레히트 役 폴 마르크의 건강상 이유로 제르망 루베로 변경되었음을 알려드립니다.</h3>
                                <p>
                                    <div><FontAwesomeIcon id="notice_icon" icon={faArrowRightLong} /></div>
                                    2023-03-04
                                </p>
                            </NoticeList>
                            <NoticeList>
                                <h2>파리 오페라 발레 [지젤] 출연진 변경 안내</h2>
                                <h3>파리 오페라 발레 [지젤] 3. 4.(토) 15시 공연 알브레히트 役 폴 마르크의 건강상 이유로 제르망 루베로 변경되었음을 알려드립니다.</h3>
                                <p>
                                    <div><FontAwesomeIcon id="notice_icon" icon={faArrowRightLong} /></div>
                                    2023-03-04
                                </p>
                            </NoticeList>
                            <NoticeList>
                                <h2>파리 오페라 발레 [지젤] 출연진 변경 안내</h2>
                                <h3>파리 오페라 발레 [지젤] 3. 4.(토) 15시 공연 알브레히트 役 폴 마르크의 건강상 이유로 제르망 루베로 변경되었음을 알려드립니다.</h3>
                                <p>
                                    <div><FontAwesomeIcon id="notice_icon" icon={faArrowRightLong} /></div>
                                    2023-03-04
                                </p>
                            </NoticeList>
                        </NoticeListUl>
                    </NoticeLists>
                </NoticeArea>

                <Popup>
                    <PopupTitle>
                        <h1>팝업존</h1>
                        <PopupIcons>
                            <div><FontAwesomeIcon icon={faChevronLeft} id="pop_left_icon"/></div>
                            <div><FontAwesomeIcon icon={faPause} id="pop_pause_icon" /></div>
                            <div><FontAwesomeIcon icon={faChevronRight} id="pop_right_icon"/></div>
                        </PopupIcons>
                    </PopupTitle>
                    <PopupImg src="./images/notice01.jpg" alt="" />
                </Popup>
            </Notice>

            {/* 안내사항 */}
            <Info>
                <Sns>
                    <SnsButton>
                        <img src="./images/info_ic_pro.png" alt="" />
                        <p>공연안내 리플릿</p>
                    </SnsButton>
                    <SnsButton>
                        <img src="./images/info_ic_y.png" alt="" />
                        <p>유튜브</p>
                    </SnsButton>
                    <SnsButton>
                        <img src="./images/info_ic_f.png" alt="" />
                        <p>페이스북</p>
                    </SnsButton>
                    <SnsButton>
                        <img src="./images/info_ic_i.png" alt="" />
                        <p>인스타그램</p>
                    </SnsButton>
                </Sns>
                <ArtCenter>
                    <CenterReserv>
                        <img src="./images/info_ic_tel.png" alt=""></img>
                        <CenterIn>
                            <h2>공연예매</h2>
                            <ReservIn>
                                <h3>인터파크</h3>
                                <h4>1544.1556</h4>
                            </ReservIn>
                        </CenterIn>
                    </CenterReserv>
                    
                    <CenterTel>
                        <h3>공연안내</h3>
                        <h2>042.270.8333</h2>
                    </CenterTel>

                    <CenterSeat>
                        <img src="./images/info_ic_seat.png" alt=""></img>
                        <h3>좌석배치도</h3>
                    </CenterSeat>
                </ArtCenter>
            </Info>

            {/* 후원자 리스트 */}
            <Banner>
                <div></div>
                <div></div>
            </Banner>
        </PosterContent>
    );
}

export default Content;