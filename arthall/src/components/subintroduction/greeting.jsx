import React from "react";
import "../css/greeting.css";

function Greeting() {
    return(
        <div className="greeting">
            <div className="greeting_title">
                <h1>인삿말</h1>
            </div>

            <div className="greeting_container">
                <div className="greeting_warning">
                    <h2><p>대전예술의전당</p>과 함께</h2>
                    <h3>당신의 삶을 환희로 밝히세요.<br/>
                        환하게 밝히세요.
                    </h3>
                </div>

                <div className="greeting_content">
                    <h3>
                        즐거운 상상과 감동으로 빛나는<br/>
                        대전예술의전당에 오신 것을 환영합니다.
                    </h3>
                    <h3>
                        대전예술의전당은 2003년 개관한 이후 여러분 삶에 행복과 품격을 더해왔습니다. 대전예술의전당은 대전문화예술의 상징이고 척도로 앞으로도 열정과 창의로 빚어낸 최고의 작품과 마음을
                        읽는 서비스로 믿고 찾는 공연장이 되도록 노력하겠습니다. 가치 있는 교육프로그램으로 여러분을 위한 가장 멋진 선물이 되겠습니다.
                        더불어 지역예술인이 뜨겁게 창의성을 발휘할 수 있는 생태계 조성에 힘쓰고 이를 진화, 발전시키는 디딤돌이 되도록 최선을 다하겠습니다.
                    </h3>
                    <h3>
                        특별히 개관 20주년을 앞두고 지나온 걸음을 살피고 그 위에 창조적 상상력과 생생한 영감을 더해 새롭고 깊어진 프로그램으로 다가올 10년의 비전을 준비하겠습니다. 폭넓게 소통하고 서로
                        신뢰하며 예술의 가치를 발견하고 발현해갈, 대전예술의전당이 스무 살 성년으로의 성장과 전환을 이뤄낼 뜻깊은 시간에 함께 해주시길 바랍니다.
                    </h3>
                    <h3>
                        오래 기억될 특별한 순간을 준비하겠습니다.<br/>
                        삶이 더욱 풍요로워지는 즐거움으로 여러분과 만나겠습니다.<br/>
                        대전예술의전당과 함께 삶을 환희 밝히세요!
                    </h3>
                    <h3>
                        감사합니다.
                    </h3>
                    <h3>
                        대전예술의전당 관장 홍 선 희
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Greeting;