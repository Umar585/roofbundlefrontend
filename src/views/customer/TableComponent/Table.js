import React from "react";
//assets
import mapsImg from "../../../assets/img/mapPlace.png";

export default function Table() {
  return (
    <div className="table-responsive table-hover custTable ">
      <table className="table table-responsive-lg">
        <thead>
          <tr>
            <td>Name</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Stage</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="list-inline">
                <img src={mapsImg} alt="map img" style={mapsImgStyle} />
                <div>
                  <span
                    style={{
                      clear: "right",
                      display: "block",
                    }}
                  >
                    name
                  </span>
                  <span
                    className="small text-muted"
                    style={{ display: "block" }}
                  >
                    email
                  </span>
                </div>
              </div>
            </td>
            <td>address asdf asdfsfsdfasf sdf assd as ad fdf d </td>
            <td>
              <a href={`tel:123-456-8915`}>123-123-4898</a>
            </td>
            <td>
              <div className="form-group">
                <select
                  className="form-control border-0"
                  id="stage"
                  style={inputStyle}
                >
                  <option value="">Stage</option>
                  <option value="new">New</option>
                  <option value="estimates">Estimates</option>
                  <option value="projects">Projects</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid #d8dbe0",
};
const mapsImgStyle = {
  maxWidth: "40px",
  height: "40px",
  borderRadius: "25px",
  float: "left",
  marginRight: "10px",
};
