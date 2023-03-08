import React from "react";
import './main.css';

import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Main() {
    return(
        <div id="main_container">
            <Carousel>
                <Carousel.Item>
                    <img className="main-img" src="/images/main01.jpg" alt="" />   
                </Carousel.Item>
                <Carousel.Item>
                    <img className="main-img" src="/images/main02.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="main-img" src="/images/main03.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="main-img" src="/images/main04.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="main-img" src="/images/main05.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="main-img" src="/images/main06.jpg" alt="" />
                </Carousel.Item>
            </Carousel>

            <div className="scheduler">
                <div className="scheduler_title">
                    <FontAwesomeIcon icon={faCalendarDays} id="scheduler_title_icon"/>
                    <h4>연간일정</h4>
                </div>
                <div className="scheduler_mon">
                    <div className="scheduler_button">
                        <FontAwesomeIcon icon={faChevronLeft} id="scheduler_btn_icon"/>
                        <h3>2023.3</h3>
                        <FontAwesomeIcon icon={faChevronRight} id="scheduler_btn_icon"/>
                    </div>
                    <h4>
                        1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5&nbsp;&nbsp;6&nbsp;&nbsp;7&nbsp;&nbsp;8&nbsp;&nbsp;9&nbsp;&nbsp;10&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;21&nbsp;&nbsp;22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;27&nbsp;&nbsp;28&nbsp;&nbsp;29&nbsp;&nbsp;30&nbsp;&nbsp;31
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Main;