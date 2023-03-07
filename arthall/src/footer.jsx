import React from "react";
import './css/footer.css';
// import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { faPause } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";


function Footer() {
    return(
        <footer className="footer">
            <div className="footer_content">
                <div className="footer_notice">

                    <div className="footer_notice_button">
                        <div className="notice_title">
                            <h2>공지사항</h2>
                        </div>
                        <button className="notice_subbtn">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div> 

                    <div className="notice_box">
                        <div className="notice_view">

                        </div>
                    </div>

                    <div className="notice_remote">
                        <button className="view_down">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <button className="view_up">
                            <FontAwesomeIcon icon={faChevronUp}/>
                        </button>
                        <button className="view_stop">
                            <FontAwesomeIcon icon={faPause} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="wrap_gide">
                <ul>
                    <li><Link>개인정보처리방침</Link></li>
                    <li><Link>영상정보처리기기 운영 · 관리 방침</Link></li>
                    <li><Link>이메일집단수집거부</Link></li>
                    <li><Link>뷰어다운로드</Link></li>
                </ul>
            </div>

            <div className="address">
                <div className="address_gide">
                    <h3>우)35204 대전광역시 서구 둔산대로 135 대전예술의전당 Tel. 042-270-8333 Fax. 042-270-8149</h3>
                    <h4>Copyright(c) 2020 DAEJEON ARTS CENTER. All Rights Reserved.</h4>
                </div>
                <div className="footer_logo">
                    <img src="/images/logo_footer.png" alt="" />                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;