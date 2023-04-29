import React from "react";
import "../css/year_perfo.css";

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!')
    );
  
    return (
      <button
        type="button"
        style={{
            display:'flex',
            width:'100%',
            backgroundColor: '#fff'
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
}

function YearPerfo() {
    return(
        <div className="year_perfo">
            <div className="year_title">
                <h1>연간공연정보</h1>
            </div>

            <div className="year_top">
                <div className="year_buttons">
                    <button className="last_year">◀</button>
                    <h2 className="this_year">2023년</h2>
                    <button className="next_year">▶</button>
                </div>
                <ul>
                    <li>
                        <div className="check_btnA">A</div>
                        <h3>아트홀</h3>
                    </li>
                    <li>
                        <div className="check_btnE">E</div>
                        <h3>앙상블홀</h3>
                    </li>
                    <li>
                        <div className="check_btnT">T</div>
                        <h3>원형극장</h3>
                    </li>
                </ul>
            </div>

            <div className="year_accordion">
                <Accordion defaultActiveKey="0">
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="0">
                                <div className="toggle-btn">1월</div>
                                <h2 className="toggle-name">1월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="1">
                                <div className="toggle-btn">2월</div>
                                <h2 className="toggle-name">2월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="2">
                                <div className="toggle-btn">3월</div>
                                <h2 className="toggle-name">3월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="3">
                                <div className="toggle-btn">4월</div>
                                <h2 className="toggle-name">4월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="4">
                                <div className="toggle-btn">5월</div>
                                <h2 className="toggle-name">5월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="5">
                                <div className="toggle-btn">6월</div>
                                <h2 className="toggle-name">6월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="6">
                                <div className="toggle-btn">7월</div>
                                <h2 className="toggle-name">7월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="6" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="7">
                                <div className="toggle-btn">8월</div>
                                <h2 className="toggle-name">8월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="7" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="8">
                                <div className="toggle-btn">9월</div>
                                <h2 className="toggle-name">9월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="8" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="9">
                                <div className="toggle-btn">10월</div>
                                <h2 className="toggle-name">10월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="9" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="10">
                                <div className="toggle-btn">11월</div>
                                <h2 className="toggle-name">11월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="10" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ border:'none', borderRadius:'0%' }}>
                        <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                            <CustomToggle eventKey="11">
                                <div className="toggle-btn">12월</div>
                                <h2 className="toggle-name">12월의 공연리스트 <strong>총 14건</strong>의 공연이 등록되었습니다.</h2>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="11" style={{ border:'none' }}>
                            <Card.Body>
                                2023년 1월 3일(화) / 1일 1회
                                앙상블홀제12회 에라토앙상블 정기연주회
                                2023년 1월 4일(수)/ 1일 1회
                                앙상블홀위드어스 앙상블 제2회 정기연주회 [Rumex: 친근한 정]
                                2023년 1월 5일(목) / 1일 1회
                                아트홀2023 신년음악회 [김대진×박재홍]
                                2023년 1월 5일(목) / 1일 1회
                                앙상블홀이영은 피아노 리사이틀
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}

export default YearPerfo;