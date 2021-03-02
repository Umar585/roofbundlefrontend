import React from "react";

//test img
//import Img from "../../../../../assets/img/bgImg.jpg";
import Img from "../../../../../assets/img/Logo.png";

export default function InfoCard() {
  return (
    <div>
      <div className="card" style={{ borderRadius: "10px" }}>
        <div className="card-body">
          <img src={Img} alt="Logo" className="card-img-top" style={cardImg} />
          <hr />
          <div className="card-text">
            <p className="p5">Pristine Roofing & Sliding</p>
            <p className="p4" style={pstyle}>
              P: (204) 358 - 5985
            </p>
            <p className="p4" style={pstyle}>
              F: (204) 358 - 5985
            </p>
            <p className="p4" style={pstyle}>
              www.pristineroofint.com
            </p>
            <p className="p4" style={pstyle}>
              524 Fleet Ave, Winnipeg, MB R3L 0S2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardImg = {
  minHeight: "100%",
  maxHeight: "200px",
  objectFit: "contain",
};

const pstyle = {
  marginBottom: "3px",
};
