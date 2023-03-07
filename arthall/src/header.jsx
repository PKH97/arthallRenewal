import React from "react";
import './css/Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return(
        <div className='header'>
            <div className='header_in'>
                <button className='login_btn'><Link to="/component/login">로그인</Link></button>
                <button className='english_btn'><Link to="/component/english">ENGLISH</Link></button>
                <button className='daejeon_btn'><Link to="/component/daejeon">대전광역시청</Link></button>
            </div>

            <div className="header_menu">
                <div className='logo'>
                    <Link to="/"><img src="/images/logo.jpg" alt=""/></Link>
                </div>
                
                <ul className='nav'>
                    <li><Link to="/components/performance" style={{textDecoration:'none'}}>공연</Link></li>
                    <li><Link to="/components/rent" style={{textDecoration:'none'}}>대관</Link></li>
                    <li><Link to="/components/academy" style={{textDecoration:'none'}}>아카데미</Link></li>
                    <li><Link to="/components/membership" style={{textDecoration:'none'}}>회원제</Link></li>
                    <li><Link to="/components/visiting" style={{textDecoration:'none'}}>참여마당</Link></li>
                    <li><Link to="/components/customer" style={{textDecoration:'none'}}>고객센터</Link></li>
                    <li>기관소개</li>
                </ul>

                <div className='search'>
                    <div className='search_bar'>
                        <button className='search_btn'>공연검색</button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <FontAwesomeIcon icon={faBars} />
                </div>

            </div>

        </div>
    );
}

export default Header;