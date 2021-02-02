import React from "react";
import { Link } from "react-router-dom";
//icons
import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";
//assets
import mapsImg from "../../../assets/img/mapPlace.png";
import "./Table.scss";

export default function Table() {
  return (
    <>
      <Link
        to="/file"
        style={{
          color: "black",
          padding: "5px",
        }}
      >
        <div className="customerComponentList">
          <div
            style={{
              color: "red",
              position: "absolute",
              right: "0px",
              marginRight: "0px",
              top: "6px",
            }}
          >
            <div class="dropdown dropleft">
              <button
                onClick={(e) => e.preventDefault()}
                class="btn btn-sm btn-secondary dropdown-toggle p2"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={inputStyle}
              >
                Invoiced <BsIcon.BsChevronRight className="small" />
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item p3" href="#">
                  New
                </a>
                <a class="dropdown-item p3" href="#">
                  Quoted
                </a>
                <a class="dropdown-item p3" href="#">
                  Signed
                </a>
                <a class="dropdown-item p3" href="#">
                  InProgress
                </a>
                <a class="dropdown-item p3" href="#">
                  Completed
                </a>
                <a class="dropdown-item p3" href="#">
                  Invoiced
                </a>
              </div>
            </div>
          </div>
          <div className="list-inline">
            <div className="list-inline-item">
              <img
                src={mapsImg}
                alt="maps img"
                style={mapsImgStyle}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://www.google.com/maps/place/636+St+Anne's+Rd,+Winnipeg,+MB+R2M+3H1/@49.8296232,-97.0894844";
                }}
              />
            </div>
            <div className="list-inline-item" style={{ marginLeft: "1px" }}>
              <div>
                <h6 style={{ marginBottom: "-15px" }}>
                  Stan Guinter <AiIcon.AiFillCheckCircle />
                </h6>
                <br />
                <p className="address text-muted" style={{ color: "#8d8d8d" }}>
                  48 Kilkenny Lane Winnipeg, MB, L5A 1A7
                </p>
                <br />
                <span>
                  <a
                    style={{ color: "#e60029" }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "tel:1231234561";
                    }}
                  >
                    204 922 1836
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "none",
  backgroundColor: "transparent",
};
const mapsImgStyle = {
  maxWidth: "50px",
  height: "50px",
  marginTop: "-45px",
  borderRadius: "4px",
  marginLeft: "-1px",
};
