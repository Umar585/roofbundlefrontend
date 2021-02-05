import React from "react";
import { Link } from "react-router-dom";
//icons
import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";
//assets
import mapsImg from "../../../assets/img/mapPlace.png";
import "./Table.scss";

export default function Table(props) {
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
            <div className="dropdown dropleft">
              <button
                onClick={(e) => e.preventDefault()}
                className="btn btn-sm btn-secondary dropdown-toggle p2"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={inputStyle}
              >
                Invoiced <BsIcon.BsChevronRight className="small" />
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <span className="dropdown-item p3" href="#">
                  New
                </span>
                <span className="dropdown-item p3">Quoted</span>
                <span className="dropdown-item p3">Signed</span>
                <span className="dropdown-item p3">InProgress</span>
                <span className="dropdown-item p3">Completed</span>
                <span className="dropdown-item p3">Invoiced</span>
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
                  window.location.href = `https://www.google.com/maps/place/${props.address}/@${props.lat},${props.lng}`;
                }}
              />
            </div>
            <div className="list-inline-item" style={{ marginLeft: "1px" }}>
              <div>
                <h6 style={{ marginBottom: "-15px" }}>
                  {props.fullname} <AiIcon.AiFillCheckCircle />
                </h6>
                <br />
                <p className="address text-muted" style={{ color: "#8d8d8d" }}>
                  {props.address}
                </p>
                <br />
                <span>
                  <span
                    style={{ color: "#e60029" }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `tel:${props.phone}`;
                    }}
                  >
                    {props.phone}
                  </span>
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
