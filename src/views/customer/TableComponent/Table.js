import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
//icons
import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";
//assets
import mapsImg from "../../../assets/img/mapPlace.png";
import "./Table.scss";

export default function Table(props) {
  const history = useHistory();
  const [moved, setMoved] = useState(false);
  const id = props.id;
  const handleTabs = (val) => {
    let email = localStorage.getItem("email");
    try {
      Axios.post("/api/customer/changeuser", { id, email, val });
      setMoved(true);
    } catch (err) {
      console.log(err);
    }
  };
  const data = {
    id: id,
    address: props.address,
    email: props.email,
    lat: props.lat,
    lng: props.lng,
    fullname: props.fullname,
    phone: props.phone,
  };

  return (
    <>
      <Link
        to={`/file/${id}`}
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
                {/*<AiIcon.AiFillCheckCircle />*/}
                {props.pageTitle} <BsIcon.BsChevronRight className="small" />
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <span
                  className="dropdown-item p3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabs("New");
                  }}
                >
                  New
                </span>
                <span
                  className="dropdown-item p3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabs("Quoted");
                  }}
                >
                  Quoted
                </span>
                <span
                  className="dropdown-item p3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabs("Signed");
                  }}
                >
                  Signed
                </span>
                <span
                  className="dropdown-item p3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabs("Inprogress");
                  }}
                >
                  InProgress
                </span>
                <span
                  className="dropdown-item p3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabs("Complete");
                  }}
                >
                  Completed
                </span>
                <span
                  className="dropdown-item p3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabs("Invoiced");
                  }}
                >
                  Invoiced
                </span>
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
                  window.location.href = `https://www.google.com/maps/place/${data.address}/@${data.lat},${data.lng}`;
                }}
              />
            </div>
            <div className="list-inline-item" style={{ marginLeft: "1px" }}>
              <div>
                <h6
                  style={{
                    marginBottom: "-15px",
                    maxWidth: "80%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {data.fullname}
                </h6>
                <br />
                <p
                  className="address p4"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `https://www.google.com/maps/place/${data.address}/@${data.lat},${data.lng}`;
                  }}
                >
                  {data.address}
                </p>
                <br />
                <span>
                  <span
                    className="p4"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `tel:${data.phone}`;
                    }}
                  >
                    {data.phone}
                  </span>
                  {moved ? (
                    <span className="badge badge-success ml-2">Moved</span>
                  ) : null}
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
