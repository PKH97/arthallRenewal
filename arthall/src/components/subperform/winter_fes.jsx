import React from "react";
import "../css/winter_fes.css";

function WinterFes() {
    return(
        <div className="winter_fes">
            <div className="winter_title">
                <h1>2019 Winter Festival</h1>
            </div>

            <div className="winter_container">
                <div className="winter_content">
                    <h2>생활 속 새로운 예술의 힘!</h2>
                    <h3>
                        대전예술의전당에서는 지역의 공연문화 활성화를 위하여 공연예술 각 분야의 아마추어 공연축제인 2019 Winter Festival을 개최합니다.<br />
                        우리 지역의 비전문 공연단체 및 공연예술분야의 동호인들을 위한 Winter Festival은 아마추어 예술인들에게 최고의 수준인 대전예술의전당 시설을 활용하여<br />
                        우수한 공연을 무대에 올릴 수 있는 기회를 제공하고 또한 예술을 사랑하는 지역 내의 사회인 공연단체 및 대학동아리의 활성화를 도모하기 위한 공연축제입니다.
                    </h3>
                </div>

                <div className="winter_img">
                    <img src="../images/winter_fes.jpg"></img>
                </div>
            </div>
        </div>
    );
}

export default WinterFes;