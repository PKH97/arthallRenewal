import React from "react";
import "../css/faq.css";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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

function Faq() {
    return(
        <div className="faq">
            <div className="faq_title">
                <h1>공연전시 정보 및 자료</h1>
            </div>

            <div className="faq_container" id="aaa">
                <Tabs defaultActiveKey="perform_faq" id="fill-tab-example" className="mb-3" fill>
                    <Tab eventKey="perform_faq" title="공연전시 정보 및 자료">
                        <div className="faq_warning">
                            <div className="faq_warning_icon">!</div>
                            <h2><strong>사이트 이용시 자주 문의하시는 질문</strong>입니다. 여기에서 궁금증이 해결되지 않으셨다면 고객센터 고객의소리에 글을 올려 주세요. 자세히 답변해 드리겠습니다.</h2>
                        </div>
                        <div className="faq_content">
                            <Accordion defaultActiveKey="0">
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="0">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="1">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb'}}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="2">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="3">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="4">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="5">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </Tab>
                    <Tab eventKey="reserseate_faq" title="예매 및 좌석">
                        <Accordion defaultActiveKey="0">
                            <div className="faq_warning">
                                <div className="faq_warning_icon">!</div>
                                <h2><strong>사이트 이용시 자주 문의하시는 질문</strong>입니다. 여기에서 궁금증이 해결되지 않으셨다면 고객센터 고객의소리에 글을 올려 주세요. 자세히 답변해 드리겠습니다.</h2>
                            </div>
                            <div className="faq_content">
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="0">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="1">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb'}}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="2">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="3">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="4">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="5">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="6">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="7">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="7">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="8">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="8">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </div>
                        </Accordion>
                    </Tab>
                    <Tab eventKey="amenities_faq" title="주차 및 편의시설">
                        <Accordion defaultActiveKey="0">
                            <div className="faq_warning">
                                <div className="faq_warning_icon">!</div>
                                <h2><strong>사이트 이용시 자주 문의하시는 질문</strong>입니다. 여기에서 궁금증이 해결되지 않으셨다면 고객센터 고객의소리에 글을 올려 주세요. 자세히 답변해 드리겠습니다.</h2>
                            </div>
                            <div className="faq_content ">
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="0">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="1">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </div>
                        </Accordion>
                    </Tab>
                    <Tab eventKey="etc_faq" title="기타">
                        <Accordion defaultActiveKey="0">
                            <div className="faq_warning">
                                <div className="faq_warning_icon">!</div>
                                <h2><strong>사이트 이용시 자주 문의하시는 질문</strong>입니다. 여기에서 궁금증이 해결되지 않으셨다면 고객센터 고객의소리에 글을 올려 주세요. 자세히 답변해 드리겠습니다.</h2>
                            </div>
                            <div className="faq_content ">
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="0">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="1">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="2">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="3">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style={{ border:'none', borderRadius:'0%' }}>
                                    <Card.Header style={{ padding: '0px', backgroundColor:'#fff' }}>
                                        <CustomToggle eventKey="4">
                                            <div className="faqtoggle-btn">1월</div>
                                            <h3 className="faqtoggle-name">전화 예매에 대하여 알고 싶습니다</h3>
                                        </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body style={{ border:'none', backgroundColor:'#f7f7fb' }}>
                                            인터파크 : 1544-1556 (운영시간 : 09:00 ~ 18:00)
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </div>
                        </Accordion>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default Faq;