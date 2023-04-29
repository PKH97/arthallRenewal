import React from "react";
import "../css/audition_sign.css";

function AuditionSign() {
    return(
        <div className="audition_sign">
            <div className="auditionsign_title">
                <h1>오디션신청</h1>
            </div>

            <div className="auditionsign_container">
                <div className="auditionsign_warning">
                    <div className="auditionsign_warning_icon">!</div>
                    <h2><strong>대전예술의전당</strong>에서는 아래와 같이 오디션 및 공모사업을 신청받고 있습니다. 공고명을 클릭하시면 보다 자세한 내용을 보실 수 있으며, 인터넷 접수가 가능합니다.</h2>
                </div>

                <div className="auditionsign_content">
                    <table>
                        <tr>
                            <th style={{width:'85px', height:'56px'}}>순번</th>
                            <th style={{width:'620px', height:'56px'}}>공고명</th>
                            <th style={{width:'160px', height:'56px'}}>공고일</th>
                            <th style={{width:'280px', height:'56px'}}>접수기간</th>
                            <th style={{width:'130px', height:'56px'}}>접수현황</th>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td style={{textAlign:'left'}}>
                                <a>제작오페라 베르디 [운명의 힘] 출연진 오디션 공고</a>
                            </td>
                            <td>2023-02-07</td>
                            <td>2023-02-28 09:00 ~ 2023-03-03 18:00</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td style={{textAlign:'left'}}>
                                <a>2023 스프링페스티벌 [브람스 아벤트] 출연자 오디션 공고</a>
                            </td>
                            <td>2023-02-16</td>
                            <td>2023-03-03 06:00 ~ 2023-03-07 18:00</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td style={{textAlign:'left'}}>
                                <a>대전예술의전당 2023 썸머뉴아티스트콘서트 오디션 공고</a>
                            </td>
                            <td>2023-01-30</td>
                            <td>2023-02-13 00:00 ~ 2023-02-14 17:00</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td style={{textAlign:'left'}}>
                                <a>2023 스프링페스티벌 제작연극 [갈릴레오 갈릴레이] 배우 오디션 공고</a>
                            </td>
                            <td>2023-01-30</td>
                            <td>2023-01-30 00:00 ~ 2023-01-31 18:00</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td style={{textAlign:'left'}}>
                                <a>2023 스프링페스티벌 무용 [Prayer] 오디션 공고</a>
                            </td>
                            <td>2022-12-23</td>
                            <td>2023-01-02 00:00 ~ 2023-01-06 18:00</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td style={{textAlign:'left'}}>
                                <a>2022 제작연극 [파우스트(가제)] 배우 오디션 공고</a>
                            </td>
                            <td>2022-08-09</td>
                            <td>2022-08-22 00:00 ~ 2022-08-24 18:00</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td style={{textAlign:'left'}}>
                                <a>2022 스프링페스티벌 [하이든 아벤트] 출연진 오디션 신청</a>
                            </td>
                            <td>2022-02-03</td>
                            <td>2022-02-04 00:00 ~ 2022-02-08 18:00</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td style={{textAlign:'left'}}>
                                <a>2022 스프링페스티벌 연극 [세계를 건너 너에게 갈게] 배우 오디션 신청</a>
                            </td>
                            <td>2022-01-24</td>
                            <td>2022-01-25 00:00 ~ 2022-01-26 18:00</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td style={{textAlign:'left'}}>
                                <a>2022 스프링페스티벌 [무용]분야 출연진 오디션 공고</a>
                            </td>
                            <td>2021-12-01</td>
                            <td>2021-12-10 09:00 ~ 2021-12-16 18:00</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td style={{textAlign:'left'}}>
                                <a>2022 살롱오페라 [결혼대소동] 오디션</a>
                            </td>
                            <td>2021-11-25</td>
                            <td>2021-12-13 00:00 ~ 2021-12-15 18:00</td>
                            <td>
                                <button>접수완료</button>
                            </td>
                        </tr>
                    </table>
                    
                    <div className="auditionsign_pagebtns">
                        <div className="auditionsign_pagebtn">1</div>
                        <div className="auditionsign_pagebtn">2</div>
                        <div className="auditionsign_pagebtn">3</div>
                        <div className="auditionsign_pagebtn">4</div>
                        <div className="auditionsign_pagebtn">5</div>
                        <div className="auditionsign_pagebtn">6</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuditionSign;