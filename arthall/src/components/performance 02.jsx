import React from "react";
import { Link, Route } from "react-router-dom";
import "../subHeader.css";

import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

// import MonPerfo from './components/subperform/mon_perfo'
// import YearPerfo from './components/subperform/year_perfo'

import MonPerfo from "./subperform/mon_perfo";
import YearPerfo from "./subperform/year_perfo";
//import ReserInfo from "./subperform/reser_info";

function Performance02() {
    return(
        <div>
            <div className="sub_header">
                <h1 className="sub_title">공연</h1>
                <div className="sub_icon"></div>
                <div className='sub_nav'>
                    <div className="sub_home"><Link to="/"><FontAwesomeIcon icon={faHouse} id="home_btn" /></Link></div>
                    <div id="perform_list">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{color: "#1F3042"}}>
                                공연안내
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link to='./subperform/mon_perfo'>월간공연정보</Link></Dropdown.Item>
                                <Dropdown.Item><Link to='./subperform/year_perfo'>연간공연정보</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic"  style={{color: "#1F3042"}}>
                                예매/취소안내
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link to="./subperform/reser_info"></Link>예매안내</Dropdown.Item>
                                <Dropdown.Item>할인안내</Dropdown.Item>
                                <Dropdown.Item>예매확인 및 취소</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic"  style={{color: "#1F3042"}}>
                                페스티벌
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >스프링페스티벌</Dropdown.Item>
                                <Dropdown.Item >그랜드시즌</Dropdown.Item>
                                <Dropdown.Item >빛깔있는 여름축제</Dropdown.Item>
                                <Dropdown.Item >윈터페스티벌</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button>
                            <Link to="./subperform/package" style={{textDecoration:'none', color: '#2f2f2f'}}>패키지</Link>
                        </button>
                    </div> 
                </div>
            </div>
            <div>
                {/* <Route exact={true} path='/components/subperform/mon_perfo' component={MonPerfo}></Route> */}
                <Route exact={true} path='/' component={MonPerfo}></Route>
                <Route path='/subperform/year_perfo' component={YearPerfo}></Route>
            </div>
            {/* <ReserInfo /> */}
            {/* <MonPerfo /> */}
            <YearPerfo />
            {/* 연결이 잘 안되고 있어서 확인을 위해서는 주석을 풀어야 보임 */}
        </div>
    );
}

export default Performance02;