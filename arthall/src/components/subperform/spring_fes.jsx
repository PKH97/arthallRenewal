import React from "react";
import "../css/spring_fes.css";

function SpringFes() {
    return(
        <div className="spring_fes">
            <div className="spring_title">
                <h1>Spring Festival</h1>
            </div>

            <div className="spring_container">
                <div className="spring_content">
                    <h2>
                        2022 스프링페스티벌<br />
                        아트 앤 사이 (Art & Science):<br />
                        예술과 과학이 싹틔울 새로운 봄<br />
                        4. 8. (금) - 4. 24. (일)
                    </h2>
                    <h3>
                        올해 스프링페스티벌의 주제는 [아트 & 사이]다.<br />
                        예술(Art;아트)과 과학(Science;사이)의 도시, 대전의 미래를 담은<br />
                        다른 개성의 네 개 장르, 다섯 작품을 선보인다.<br />
                        예술과 기술의 결합, 국내 우수 제작진과 지역 예술인의 협업으로 새롭고 역동적인 축제로 재도약한다.
                    </h3>
                    <p>*공연명을 클릭하시면 해당공연의 상세페이지로 이동합니다.</p>
                </div>

                <div className="spring_img">
                    <img src="../images/spring-fes.jpg"></img>
                </div>
            </div>

        </div>
    );
}

export default SpringFes;