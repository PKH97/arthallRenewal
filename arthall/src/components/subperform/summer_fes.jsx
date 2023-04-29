import React from "react";
import "../css/summer_fes.css";

function SummerFes() {
    return(
        <div className="summer_fes">
            <div className="summer_title">
                <h1>2022 Colorful Summer Festival</h1>
            </div>

            <div className="summer_container">
                <div className="summer_content">
                    <h2>
                        2022 빛깔있는 여름축제<br />
                        8. 12. (금) - 8. 14. (일)
                    </h2>
                    <h3>
                        3년만에 다시 만나는 여름축제<br />
                        '도심 속, 음악 숲'으로 어서오세요.
                    </h3>
                    <h4>
                        3일 밤을 수놓을 화려한 라인업으로 음악을 즐기는 시간!<br />
                        도심 속, 음악이 흐르는 숲에서 한여름 밤의 낭만을 만끽하시길 바랍니다.
                    </h4>
                    <p>
                        *공연명을 클릭하시면 해당공연의 상세페이지로 이동합니다.
                    </p>
                </div>

                <div className="summer_img">
                    <img src="../images/summer_fes.png"></img>
                </div>
            </div>
        </div>
    );
}

export default SummerFes;