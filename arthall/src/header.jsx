import React from "react";
// import './Header.css';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// 헤더
const HeaderStyle = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 145px;
    box-shadow: 0px 3px 6px -1px #bbbbbb;

    @media all and (max-width: 480px){
        width: 480px;
        height: 145px;
        background-color: lightblue;
    }
`;

// 헤더인 버튼
const HeaderInStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    width: 100%;
    height: 45px;

    background-color: #FAFAFA;
    border-bottom: 1px solid #ccc;

    @media all and (max-width: 480px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 480px;
        height: 45px;
    }
`;
const LoginBtnStyle = styled.button`
    width: 95px;
    height: 45px;

    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background-color: #FAFAFA;

    @media all and (max-width: 480px) {
        width: 160px;
        height: 45px;
    }
`;
const EnglishBtnStyle = styled.button`
    width: 110px;
    height: 45px;

    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background-color: #FAFAFA;

    @media all and (max-width: 480px) {
        width: 160px;
        height: 45px;
    }
`;
const DaejeonBtnStyle = styled.button`
    width: 120px;
    height: 45px;

    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background-color: #FAFAFA;

    @media all and (max-width: 480px) {
        width: 160px;
        height: 45px;
    }
`;

// 헤더 메뉴
const HeaderMenuStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #fff;
    border-bottom: 1px solid #a1a1a1;
    box-shadow: 0 0px 4px -4px black;

    @media all and (max-width: 480px) {
        width: 480px;
        height: 100px;
        background-color: #fff;
    }
`;

// 헤더 메뉴 로고
const LogoStyle = styled.div`
    width: 23%;
    height: 100px;
    padding-top: 35px;
    padding-left: 90px;
    background-color: #fff;

    @media all and (max-width: 480px) {
        width: 320px;
        height: 100px;
        padding-top: 35px;
        padding-left: 70px;
        // background-color: red;
    }
`;


// 헤더 메뉴 나브
const HeaderManuListStyle = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 60%;
    height: 100px;
    background-color: #fff;

    & > li {
        display: flex;
        justify-content: center;
        width: 100px;
        height: 30px;
        margin-top: 35px;
        margin-right: 20px;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        color: #000;
    }

    @media all and (max-width: 480px) {
        display: none;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 145px;
        padding: 0;
        margin: 0;
        width: 480px;
        height: 600px;
        background-color: #555555d2;

        & > li {
            display: flex;
            justify-content: center;
            width: 300px;
            height: 50px;
            margin: 0;
            margin-top: 30px;
            margin-left: 90px;
            padding-top: 10px;
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            color: #fff;
            background-color: #222;
        }
    }
`;

// 헤더 메뉴 검색 
const SearchStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 8.5%;
    height: 100px;
    background-color: #fff;

    @media all and (max-width: 480px) {
        width: 80px;
        height: 100px;
        // background-color: green;
    }
`;
const SearchBarStyle = styled.button`
    width: 130px;
    height: 30px;
    border-bottom: 2px solid #000;
    font-size: 15px;
    font-weight: 600;
    text-align: left;
    color: #a1a1a1;
    cursor: pointer;

    @media all and (max-width: 480px) {
        display: none;
    }
`;
const SearchBtnStyle = styled.div`
    width: 30px;
    height: 30px;
    font-size: 25px;
    cursor: pointer;

    @media all and (max-width: 480px) {
        width: 30px;
        height: 30px;
        font-size: 25px;
        cursor: pointer;
    }
`;

const MobileNav = styled.div`
    width: 8.5%;
    height: 100px;
    padding-top: 35px;
    padding-left: 20px;
    background-color: #fff;
    & > div {
        width: 30px;
        height: 30px;
        font-size: 25px;
        cursor: pointer;
    }

    @media all and (max-width: 480px) {
        display: ${(props) => (props.mobile === "down" ? `none` : `flex`)};
        width: 80px;
        height: 100px;
        padding-left: 0px;
        // background-color: pink;
        & > div {
            width: 30px;
            height: 30px;
            font-size: 25px;
            cursor: pointer;
        }
    }
`;


function Header() {
    // const [toggle, setToggle] = useState(false);

    return(
        <HeaderStyle className='header'>
            <HeaderInStyle className='header_in'>
                <LoginBtnStyle className='login_btn'>
                    <Link to="/component/login" style={{textDecoration:'none', color: '#000'}}>로그인</Link>
                </LoginBtnStyle>
                <EnglishBtnStyle className='english_btn'>
                    <Link to="/component/english" style={{textDecoration:'none', color: 'red'}}>ENGLISH</Link>
                </EnglishBtnStyle>
                <DaejeonBtnStyle className='daejeon_btn'>
                    <Link to="/component/daejeon" style={{textDecoration:'none', color: '#000'}}>대전광역시청</Link>
                </DaejeonBtnStyle>
            </HeaderInStyle>

            <HeaderMenuStyle className="header_manu">
                <LogoStyle className="logo">
                    <Link to="/">
                        <img src="/images/logo.jpg" alt=""/>
                    </Link>
                </LogoStyle>
                
                <HeaderManuListStyle>
                    <li><Link to="/components/performance" style={{textDecoration:'none'}}>공연</Link></li>
                    <li><Link to="/components/rent" style={{textDecoration:'none'}}>대관</Link></li>
                    <li><a style={{textDecoration:'none'}} href="http://www.daejeon.go.kr/djac/ac/index.do?menuSeq=6748">아카데미</a></li>
                    <li><Link to="/components/membership" style={{textDecoration:'none'}}>회원제</Link></li>
                    <li><Link to="/components/visiting" style={{textDecoration:'none',}}>참여마당</Link></li>
                    <li><Link to="/components/customer" style={{textDecoration:'none'}}>고객센터</Link></li>
                    <li><Link to="/components/introduction" style={{textDecoration:'none'}}>기관소개</Link></li>
                </HeaderManuListStyle>

            
                <SearchStyle>
                    <SearchBarStyle className='search_btn'>공연검색</SearchBarStyle>
                    <SearchBtnStyle>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </SearchBtnStyle>
                </SearchStyle>

                <MobileNav>
                    <div><FontAwesomeIcon icon={faBars}/></div>
                </MobileNav>

            </HeaderMenuStyle>
        </HeaderStyle>
    );
}

export default Header;