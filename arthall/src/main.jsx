import React from "react";
// import './main.css';

import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const MainContainer = styled.div`
    position: relative;
    top: 145.25px;
    left: 0px;
    width: 100%;
    height: 565px;    

    @media all and (max-width: 480px) {
        position: relative;
        top: 145.25px;
        left: 0px;
        width: 480px;
        height: 300px;
    }
`
const SlideCard = styled.img`
    width: 100%;
    height: 565px;

    @media all and (max-width: 480px) {
        width: 480px;
        height: 300px;
    }
`
const Scheduler = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: #fff;

    @media all and (max-width: 480px) {
        display: none;
    }
`
const SchedulerTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding-top: 7px;
    width: 130px;
    height: 40px;
    border-radius: 50px;
    background-color: #DF3B42;

    & > div {
        width: 23px;
        height: 23px;
        color: #fff;
    }

    & > h4 {
        font-size: 16px;
        font-family: 800;
        padding-top: 3px;
        padding-left: 5px;
        color: #fff;
    }
`
const SchedulerMon = styled.div`
    display: flex;
    width: 65%;
    height: 60px;
    background-color: #fff;

    & > h4 {
        margin-top: 17px;
        margin-left: 15px;
        font-size: 18px;
    }
`
const SchedulerButton = styled.div`
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    width: 150px;
    height: 60px;
    background-color: #fff;

    & > h3 {
        margin-top: 15px;
        margin-left: 15px;
        font-size: 22px;
    }
`
const SchedulerButtonLeft = styled.div`
    margin-left: 15px; 
    margin-top: 18px;
    width: 13px;
    height: 13px;
    font-weight: 200;
    color: #000;
`
const SchedulerButtonRight = styled.div`
    margin-left: 15px; 
    margin-top: 18px;
    width: 13px;
    height: 13px;
    font-weight: 200;
    color: #000;
`

function Main() {
    return(
        <MainContainer>
            <Carousel>
                <Carousel.Item>
                    <SlideCard className="main-img" src="/images/main01.jpg" alt="" />   
                </Carousel.Item>
                <Carousel.Item>
                    <SlideCard className="main-img" src="/images/main02.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <SlideCard className="main-img" src="/images/main03.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <SlideCard className="main-img" src="/images/main04.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <SlideCard className="main-img" src="/images/main05.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <SlideCard className="main-img" src="/images/main06.jpg" alt="" />
                </Carousel.Item>
            </Carousel>

            <Scheduler>
                <SchedulerTitle>
                    <div><FontAwesomeIcon icon={faCalendarDays} id="scheduler_title_icon"/></div>
                    <h4>연간일정</h4>
                </SchedulerTitle>
                <SchedulerMon>
                    <SchedulerButton>
                        <SchedulerButtonLeft><FontAwesomeIcon icon={faChevronLeft} id="scheduler_btn_icon"/></SchedulerButtonLeft>
                        <h3>2023.3</h3>
                        <SchedulerButtonRight><FontAwesomeIcon icon={faChevronRight} id="scheduler_btn_icon"/></SchedulerButtonRight>
                    </SchedulerButton>
                    <h4>
                        1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5&nbsp;&nbsp;6&nbsp;&nbsp;7&nbsp;&nbsp;8&nbsp;&nbsp;9&nbsp;&nbsp;10&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;21&nbsp;&nbsp;22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;27&nbsp;&nbsp;28&nbsp;&nbsp;29&nbsp;&nbsp;30&nbsp;&nbsp;31
                    </h4>
                </SchedulerMon>
            </Scheduler>
        </MainContainer>
    );
}

export default Main;