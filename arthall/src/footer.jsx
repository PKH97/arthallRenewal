import React from "react";
// import './footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { faPause } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterBody = styled.div`
    width: 100%;
    height: 200px;

    @media all and (max-width: 480px) {
        width: 480px;
        height: 200px;
    }
`
const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 56px;
    background-color: #474747;

    @media all and (max-width: 480px) {
        display: flex;
        justify-content: center;
        width: 480px;
        height: 56px;
        background-color: #474747;
    }
`
const FooterNotice = styled.div`
    display: flex;
    width: 80%;
    height: 56px;

    @media all and (max-width: 480px) {
        display: flex;
        justify-content: center;
        width: 480px;
        height: 56px;
    }
`
const FooterNoticeButton = styled.div`
    display: flex;
    width: 15%;
    height: 56px;
    background-color: #2c2a2b;

    @media all and (max-width: 480px) {
        display: flex;
        width: 100px;
        height: 56px;
        background-color: #2c2a2b;
    }
`
const NoticeTitle = styled.div`
    width: 75%;
    height: 56px;
    background-color: #2c2a2b;

    & > h2 {
        margin-top: 17px;
        font-size: 16px;
        font-weight: 800;
        text-align: center;
        color: #fff;
    }

    @media all and (max-width: 480px) {
        width: 70px;
        height: 56px;
        background-color: #2c2a2b;
    
        & > h2 {
            margin-top: 18px;
            font-size: 13px;
            font-weight: 600;
            text-align: center;
            color: #fff;
        }
    }
`
const NoticeSubbtn = styled.button`
    margin-top: 12px;
    width: 30px;
    height: 30px;
    font-weight: 100;
    color: #fff;
    outline: none;
    background-color: #4a4a4a;
    border-radius: 50%;

    @media all and (max-width: 480px) {
        margin-top: 12px;
        margin-right: 5px;
        width: 30px;
        height: 30px;
        font-weight: 100;
        color: #fff;
        outline: none;
        background-color: #4a4a4a;
        border-radius: 50%;
    }
`
const NoticeBox = styled.div`
    width: 65%;
    height: 56px;
    background-color: #474747;

    @media all and (max-width: 480px) {
        width: 250px;
        height: 56px;
        background-color: #474747;
    }
`
const NoticeView = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 3px;
    background-color: #fff;

    @media all and (max-width: 480px) {
        width: 100%;
        height: 50px;
        margin-top: 3px;
        background-color: #fff;
    }
`
const NoticeRemote = styled.div`
    padding-left: 30px;
    width: 20%;
    height: 56px;
    background-color: #474747;

    @media all and (max-width: 480px) {
        padding-left: 15px;
        width: 110px;
        height: 56px;
        background-color: #474747;
    }
`
const ViewDown = styled.button`
    width: 25%;
    height: 56px;
    font-size: 16px;
    font-weight: 200;
    color: #fff;
    background-color: #474747;
`
const ViewUp = styled.button`
    width: 25%;
    height: 56px;
    font-size: 16px;
    font-weight: 200;
    color: #fff;
    background-color: #474747;
`
const ViewStop = styled.button`
    width: 25%;
    height: 56px;
    font-size: 16px;
    font-weight: 200;
    color: #fff;
    background-color: #474747;
`

const WrapGide = styled.div`
    width: 100%;
    height: 60px;
    background-color: #333;

    @media all and (max-width: 480px) {
        width: 480px;
        height: 60px;
        background-color: #333;
    }
`
const WrapGideUl = styled.ul`
    display: flex;
    align-items: center;
    width: 70%;
    height: 60px;

    & > li {
        margin-right: 25px;
        font-size: 16px;
        font-weight: 800;
        text-align: center;
        color: #fff;
    }

    @media all and (max-width: 480px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 450px;
        height: 60px;

        & > li {
            margin-right: 0px;
            font-size: 10px;
            font-weight: 600;
            color: #fff;
        }
    }
`

const Address = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 84px;
    background-color: #2c2a2b;

    @media all and (max-width: 480px) {
        display: flex;
        justify-content: space-between;
        width: 480px;
        height: 84px;
        background-color: #2c2a2b;
    }
`
const AddressGide = styled.div`
    display: flex;
    flex-direction: column;

    & > h3 {
        margin-top: 20px;
        margin-left: 25px;
        font-size: 15px;
        color: #bebebe;
    }
    & > h4 {
        margin-left: 25px;
        font-size: 13px;
        color: #878787;
    }

    @media all and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    
        & > h3 {
            margin-top: 15px;
            margin-left: 0px;
            font-size: 12px;
            color: #bebebe;
        }
        & > h4 {
            margin-left: 0px;
            font-size: 10px;
            color: #878787;
        }
    }
`
const FooterLogo = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
    margin-right: 80px;

    & > img {
        width: 141px;
        height: 30px;
    }

    @media all and (max-width: 480px) {
        display: flex;
        justify-content: flex-end;
        margin-top: 15px;
        margin-right: 0px;
    
        & > img {
            width: 141px;
            height: 30px;
        }
    }
`

function Footer() {
    return(
        <FooterBody>
            <FooterContent>
                <FooterNotice>
                    <FooterNoticeButton>
                        <NoticeTitle>
                            <h2>공지사항</h2>
                        </NoticeTitle>
                        <NoticeSubbtn>
                            <FontAwesomeIcon icon={faPlus} />
                        </NoticeSubbtn>
                    </FooterNoticeButton> 

                    <NoticeBox>
                        <NoticeView />
                    </NoticeBox>

                    <NoticeRemote>
                        <ViewDown>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </ViewDown>
                        <ViewUp>
                            <FontAwesomeIcon icon={faChevronUp}/>
                        </ViewUp>
                        <ViewStop>
                            <FontAwesomeIcon icon={faPause} />
                        </ViewStop>
                    </NoticeRemote>
                </FooterNotice>
            </FooterContent>

            <WrapGide>
                <WrapGideUl>
                    <li><Link style={{textDecoration:'none', color: '#fff'}}>개인정보처리방침</Link></li>
                    <li><Link style={{textDecoration:'none', color: '#fff'}}>영상정보처리기기 운영 · 관리 방침</Link></li>
                    <li><Link style={{textDecoration:'none', color: '#fff'}}>이메일집단수집거부</Link></li>
                    <li><Link style={{textDecoration:'none', color: '#fff'}}>뷰어다운로드</Link></li>
                </WrapGideUl>
            </WrapGide>

            <Address>
                <AddressGide>
                    <h3>우)35204 대전광역시 서구 둔산대로 135 대전예술의전당 Tel. 042-270-8333 Fax. 042-270-8149</h3>
                    <h4>Copyright(c) 2020 DAEJEON ARTS CENTER. All Rights Reserved.</h4>
                </AddressGide>
                <FooterLogo>
                    <img src="/images/logo_footer.png" alt="" />                    
                </FooterLogo>
            </Address>
        </FooterBody>
    );
}

export default Footer;