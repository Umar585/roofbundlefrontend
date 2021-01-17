import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import bgImg from "../../../assets/img/roofconsturction.jpg";
//assets
import BadgeLogo from "../../../assets/img/BadgeWhite.png";

export default function SignUp() {
  const login_bg = {
    backgroundImage: `url(${bgImg})`,
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  };

  const divCenter = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
  };
  return (
    <div style={login_bg}>
      <Link to="/">
        <img
          src={BadgeLogo}
          alt="Badge Icon"
          className="p-4"
          style={{ position: "absolute", right: "0%" }}
        />
      </Link>
      <div style={divCenter}>
        <div className="container">
          {/*<div className="row">
            <div className="col-md-8">*/}
          <h1>Roofing Sofware Reimagined</h1>
          <p className="h5">
            Roofing tools that show up each day to work for you.
          </p>
          {/*</div>
            <div className="col-md-4">*/}
          <SignUpForm />
          {/*</div>
          </div>*/}
        </div>
      </div>
    </div>
  );
}
