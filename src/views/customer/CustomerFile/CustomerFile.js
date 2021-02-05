import React from "react";
import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";
//assets
import mapsImg from "../../../assets/img/mapPlace.png";
import "../TableComponent/Table.scss";

export default function CustomerFile() {
  return (
    <div className="pages">
      <div className="card">
        <div className="card-body">
          <div className="mb-2">
            <Link to="/" style={{ color: "#3c4b64" }}>
              <AiIcon.AiOutlineArrowLeft className="h3" />
            </Link>
          </div>
          <div className="customerComponentList">
            <div
              style={{
                color: "red",
                position: "absolute",
                right: "10px",
              }}
            >
              <div className="dropdown dropleft">
                <button
                  className="btn btn-sm btn-secondary dropdown-toggle p2"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={inputStyle}
                >
                  Customer <BsIcon.BsChevronRight className="small" />
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to="/updatecustomer" className="dropdown-item p3">
                    Edit
                  </Link>
                  <span
                    className="dropdown-item p3"
                    onClick={() => alert("delete function")}
                  >
                    Delete
                  </span>
                </div>
              </div>
            </div>
            <div className="list-inline">
              <div className="list-inline-item">
                <img src={mapsImg} alt="maps img" style={mapsImgStyle} />
              </div>
              <div className="list-inline-item">
                <div>
                  <span style={{ fontSize: "15px" }}>
                    <b>Stan Guinter</b>
                  </span>
                  <br />
                  <p className="address text-muted">
                    48 Kilkenny Lane Winnipeg, MB, L5A 1A7
                  </p>
                  <br />
                  <span className="text-muted">204 922 1836</span>
                  <br />
                  <span className="text-muted">stan_guinter@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          {/* Pages*/}
          <Link to="/photos" style={{ color: "#3c4b64" }}>
            <div className="pages-list mt-4">
              <div className="list-inline">
                <div className="list-inline-item">
                  <FaIcon.FaFileContract style={{ fontSize: "60px" }} />
                </div>
                <div className="list-inline-item h4">Photos</div>
              </div>
            </div>
          </Link>
          <div className="pages-list">
            <div className="list-inline">
              <div className="list-inline-item">
                <FaIcon.FaFileContract style={{ fontSize: "60px" }} />
              </div>
              <div className="list-inline-item h4">Diagrams</div>
            </div>
          </div>
          <Link to="/customertables" style={{ color: "#3c4b64" }}>
            <div className="pages-list">
              <div className="list-inline">
                <div className="list-inline-item">
                  <FaIcon.FaFileContract style={{ fontSize: "60px" }} />
                </div>
                <div className="list-inline-item h4">Calculations</div>
              </div>
            </div>
          </Link>
          <div className="pages-list">
            <div className="list-inline">
              <div className="list-inline-item">
                <FaIcon.FaFileContract style={{ fontSize: "60px" }} />
              </div>
              <div className="list-inline-item h4">Estimates</div>
            </div>
          </div>
          <div className="pages-list">
            <div className="list-inline">
              <div className="list-inline-item">
                <FaIcon.FaFileContract style={{ fontSize: "60px" }} />
              </div>
              <div className="list-inline-item h4">Contract</div>
            </div>
          </div>
          <div className="pages-list">
            <div className="list-inline">
              <div className="list-inline-item">
                <FaIcon.FaFileContract style={{ fontSize: "60px" }} />
              </div>
              <div className="list-inline-item h4">Materials List</div>
            </div>
          </div>
          <div className="pages-list">
            <div className="list-inline">
              <div className="list-inline-item">
                <FaIcon.FaFileContract style={{ fontSize: "60px" }} />
              </div>
              <div className="list-inline-item h4">Work Order</div>
            </div>
          </div>
          <div className="pages-list">
            <div className="list-inline">
              <div className="list-inline-item">
                <FaIcon.FaFileContract style={{ fontSize: "60px" }} />
              </div>
              <div className="list-inline-item h4">Change Order</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  marginTop: "-60px",
  borderRadius: "5px",
};
