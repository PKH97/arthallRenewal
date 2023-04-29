import React from "react";
import "../css/mon_perfo.css";

function MonPerfo() {
    return(
        <div className="mon_perfo">
            <div className="perfo_title">
                <h1>월간공연정보</h1>
            </div>

            {/* 달력 년월 표기 */}
            <div className="mon_title">
                <div className="year_buttons">
                    <button className="last_year">◀</button>
                    <h2 className="this_year">2023년</h2>
                    <button className="next_year">▶</button>
                </div>

                <div className="mon_lists">
                    <ul>
                        <li><p>01월</p></li>
                        <li><p>02월</p></li>
                        <li><p>03월</p></li>
                        <li><p>04월</p></li>
                        <li><p>05월</p></li>
                        <li><p>06월</p></li>
                        <li><p>07월</p></li>
                        <li><p>08월</p></li>
                        <li><p>09월</p></li>
                        <li><p>10월</p></li>
                        <li><p>11월</p></li>
                        <li><p>12월</p></li>
                    </ul>
                </div>
            </div> 

            {/* 달력 내용 */}
            <div className="mon_content">
                <div className="mon_checkboxs">
                    <ul>
                        <li>
                            <input type={"checkbox"}></input>
                            <div className="check_btnA">A</div>
                            <h3>아트홀</h3>
                        </li>
                        <li>
                            <input type={"checkbox"}></input>
                            <div className="check_btnE">E</div>
                            <h3>앙상블홀</h3>
                        </li>
                        <li>
                            <input type={"checkbox"}></input>
                            <div className="check_btnC">C</div>
                            <h3>컨벤션홀</h3>
                        </li>
                        <li>
                            <input type={"checkbox"}></input>
                            <div className="check_btnT">T</div>
                            <h3>원형극장</h3>
                        </li>
                    </ul>
                </div>

                <div className="mon_table">
                    <table>
                        <tr className="week_title">
                            <th style={{color: '#DF3B42'}}>일</th>
                            <th>월</th>
                            <th>화</th>
                            <th>수</th>
                            <th>목</th>
                            <th>금</th>
                            <th style={{color: "#015DAC"}}>토</th>
                        </tr>
                        <tr className="week_body">
                            <td style={{backgroundColor: '#f8f9fa'}}><p></p></td>
                            <td style={{backgroundColor: '#f8f9fa'}}><p></p></td>
                            <td style={{backgroundColor: '#f8f9fa'}}><p></p></td>
                            <td><p>1</p></td>
                            <td><p>2</p></td>
                            <td><p>3</p></td>
                            <td><p>4</p></td>
                        </tr>
                        <tr className="week_body">
                            <td><p>5</p></td>
                            <td><p>6</p></td>
                            <td><p>7</p></td>
                            <td><p>8</p></td>
                            <td><p>9</p></td>
                            <td><p>10</p></td>
                            <td><p>11</p></td>
                        </tr>
                        <tr className="week_body">
                            <td><p>12</p></td>
                            <td><p>13</p></td>
                            <td><p>14</p></td>
                            <td><p>15</p></td>
                            <td><p>16</p></td>
                            <td><p>17</p></td>
                            <td><p>18</p></td>
                        </tr>
                        <tr className="week_body">
                            <td><p>19</p></td>
                            <td><p>20</p></td>
                            <td><p>21</p></td>
                            <td><p>22</p></td>
                            <td><p>23</p></td>
                            <td><p>24</p></td>
                            <td><p>25</p></td>
                        </tr>
                        <tr className="week_body">
                            <td><p>26</p></td>
                            <td><p>27</p></td>
                            <td><p>28</p></td>
                            <td><p>29</p></td>
                            <td><p>30</p></td>
                            <td><p>31</p></td>
                            <td style={{backgroundColor: '#f8f9fa'}}><p></p></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MonPerfo;