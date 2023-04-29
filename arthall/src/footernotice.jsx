import React from "react";
import './footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";


function FooterNotice() {
    return(
        <div className="footer_notice">
            <div className="notice_button">
                <div className="notice_title"></div>
                <div className="notice_subbtn">
                    <button>+</button>
                </div>
            </div>
            <div className="notice_box">
                <div className="notice_view"></div>
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
    );
}

export default FooterNotice;