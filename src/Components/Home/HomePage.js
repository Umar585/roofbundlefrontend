import React from "react";
import SubForm from "./SubForm";
import Services from "./Services";
import Foot from "./Foot";
import { Link } from "react-router-dom";

//assets
import bgImg from "../../assets/img/bgImg.jpg";
import Logo from "../../assets/img/Logo.png";

//css
import "./Home.css";

export default function HomePage() {
  const backStyle = {
    backgroundImage: `url(${bgImg})`,
    minHeight: "100vh",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const logoStyle = {
    maxWidth: "500px",
    width: "100%",
    height: "auto",
    paddingTop: "100px",
  };
  return (
    <div style={backStyle} id="backStyle">
      <div className="container">
        <div>
          <img src={Logo} alt="Roofbundle Logo" style={logoStyle} />
          <h5>
            <br />
            <Link to="/signin" className="btn bg-danger text-white m-1">
              Sign In
            </Link>
            <Link to="/signup" className="btn bg-dark text-white m-1">
              Sign Up
            </Link>
          </h5>
        </div>

        <div style={{ paddingTop: "50px" }}>
          <h1 style={{ fontFamily: "LatoBold", color: "black" }}>
            Roofbundle Report
          </h1>
        </div>
        <div className="text-left">
          <a
            href="/roofreport"
            className="btn bg-danger text-white m-1"
            style={{ width: "300px" }}
          >
            Order Report
          </a>
        </div>

        <div style={{ paddingTop: "50px" }}>
          <h1 style={{ fontFamily: "LatoBold", color: "black" }}>
            Residential Roofing Software
          </h1>
        </div>
        <div className="text-left">
          <div
            className="btn bg-danger text-white m-1"
            style={{ fontSize: "16px", width: "300px" }}
          >
            <span>Coming Soon</span>
          </div>
        </div>

        <div style={{ paddingTop: "50px" }}>
          <SubForm />
        </div>
        <div style={{ paddingTop: "50px" }}>
          <Services />
        </div>
        <div style={{ paddingTop: "40px" }}>
          <Foot />
        </div>
      </div>
    </div>
  );
}
