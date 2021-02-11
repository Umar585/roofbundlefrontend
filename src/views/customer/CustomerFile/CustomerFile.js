import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";
//assets
import mapsImg from "../../../assets/img/mapPlace.png";
import "../TableComponent/Table.scss";

export default function CustomerFile() {
  const { id } = useParams();
  const history = useHistory();
  const email = localStorage.getItem("email");
  const [customer, setCustomer] = useState([]);
  const [load, setLoad] = useState(false);
  const passToken = localStorage.getItem("passToken");
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);

    Axios.post("/api/customer/getsingleuser", { id, email, passToken })
      .then((res) => {
        setCustomer(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/");
      });
  }, []);

  const handleDelete = () => {
    Axios.post("/api/customer/deleteuser", { id, email, passToken })
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="pages mb-4">
      <div>
        <div className="float-left">
          <Link to="/" style={{ color: "#3c4b64" }}>
            <AiIcon.AiOutlineArrowLeft className="h3" />
          </Link>
        </div>
        <div className="text-right">
          <h3>Customer</h3>
        </div>
      </div>

      <div className="card mt-3 p-2">
        {load ? (
          <h6 className="text-center">Loading</h6>
        ) : (
          <div className="customerComponentList">
            <div
              style={{
                color: "red",
                position: "absolute",
                right: "0px",
                marginRight: "0px",
                top: "0px",
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
                  {customer.process} <BsIcon.BsChevronRight className="small" />
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    className="dropdown-item p3"
                    to={`/updatecustomer/${id}`}
                  >
                    Edit
                  </Link>
                  <span className="dropdown-item p3" onClick={handleDelete}>
                    Delete
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
                    window.location.href = `https://www.google.com/maps/place/${customer.address}/@${customer.lat},${customer.lng}`;
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
                    {`${customer.fname} ${customer.lname}`}
                  </h6>
                  <br />
                  <p
                    className="address text-muted"
                    style={{ color: "#8d8d8d" }}
                  >
                    {customer.address}
                  </p>
                  <br />
                  <span>
                    <span
                      style={{ color: "#e60029", cursor: "pointer" }}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `tel:${customer.phone}`;
                      }}
                    >
                      {customer.phone}
                    </span>
                  </span>
                  <br />
                  <p
                    className="address text-muted"
                    style={{ color: "#8d8d8d", cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `mailto:${customer.email}`;
                    }}
                  >
                    {customer.email}
                  </p>
                  <br />
                  <p
                    className="address text-muted"
                    style={{ color: "#8d8d8d", paddingBottom: "10px" }}
                  >
                    {customer.scope}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Link to={`/album/${id}`} style={{ color: "#3c4b64" }}>
        <div className="pages-list mt-4">
          <div className="list-inline">
            <div className="list-inline-item">
              <AiIcon.AiFillFileImage style={{ fontSize: "60px" }} />
            </div>
            <div className="list-inline-item h4">Photos/Videos</div>
          </div>
        </div>
      </Link>
      <div className="pages-list">
        <div className="list-inline">
          <div className="list-inline-item">
            <FaIcon.FaClipboard style={{ fontSize: "60px" }} />
          </div>
          <div className="list-inline-item h4">Diagrams</div>
        </div>
      </div>
      <Link to="/customertables" style={{ color: "#3c4b64" }}>
        <div className="pages-list">
          <div className="list-inline">
            <div className="list-inline-item">
              <FaIcon.FaClipboardList style={{ fontSize: "60px" }} />
            </div>
            <div className="list-inline-item h4">Specifications</div>
          </div>
        </div>
      </Link>
      <Link to={`/file/documents/${id}`} style={{ color: "#3c4b64" }}>
        <div className="pages-list">
          <div className="list-inline">
            <div className="list-inline-item">
              <FaIcon.FaFileContract style={{ fontSize: "60px" }} />
            </div>
            <div className="list-inline-item h4">Documents</div>
          </div>
        </div>
      </Link>
      <div style={{ color: "#3c4b64" }}>
        <div className="pages-list">
          <div className="list-inline">
            <div className="list-inline-item">
              <AiIcon.AiFillCalendar style={{ fontSize: "60px" }} />
            </div>
            <div className="list-inline-item h4">Calendar</div>
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
  marginTop: "-75px",
  borderRadius: "5px",
};
