import React from "react";
import { Link } from "react-router-dom";
import { CButton, CCard, CCardBody } from "@coreui/react";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as ImIcon from "react-icons/im";
import * as BiIcon from "react-icons/bi";
import * as GiIcon from "react-icons/gi";
import * as RiIcon from "react-icons/ri";
import * as GrIcon from "react-icons/gr";

//assets
import MapsImg from "../../../assets/img/mapPlace.png";

export default function CustomerFile() {
  return (
    <div>
      <div>
        <CCard className="shadow">
          <CCardBody>
            <h1>Customer File</h1>
            <div className="mt-4">
              <div className="list-inline float-left">
                <img
                  src={MapsImg}
                  alt="Profile Img"
                  className="list-inline-item"
                  style={mapsImgStyle}
                />
                <div className="list-inline-item">
                  <h3>
                    Umar Syed - <span className="small">Completed</span>
                  </h3>
                  <p>
                    <FaIcon.FaMapMarkerAlt style={iconStyle} /> 123 Down the st
                    <br />
                    <AiIcon.AiFillMail style={iconStyle} />{" "}
                    <a href="mailto:umarstest@gmail.com">umarstest@gmail.com</a>
                    <br />
                    <ImIcon.ImPhone style={iconStyle} />{" "}
                    <a href="tel:+1-123-546-7890">123-546-7890</a>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <CButton
                  className="btn btn-info"
                  onClick={() => (window.location.href = "/updatecustomer")}
                >
                  <AiIcon.AiFillEdit /> Edit
                </CButton>
              </div>
            </div>
          </CCardBody>
        </CCard>

        {/*Buttons */}
        <div className="row no-gutters">
          <div className="col-md-2">
            <ProjectButton
              to="/customertables"
              title="Table"
              subTitle="Table"
              icon={<AiIcon.AiOutlineTable style={{ fontSize: "40px" }} />}
            />
          </div>
          <div className="col-md-2">
            <ProjectButton
              to="/customertables"
              title="Photos"
              subTitle="Photos"
              icon={<BiIcon.BiPhotoAlbum style={{ fontSize: "40px" }} />}
            />
          </div>
          <div className="col-md-2">
            <ProjectButton
              to="/customertables"
              title="Diagram"
              subTitle="Diagram"
              icon={<FaIcon.FaProjectDiagram style={{ fontSize: "40px" }} />}
            />
          </div>
          <div className="col-md-2">
            <ProjectButton
              to="/customertables"
              title="Estimate"
              subTitle="Estimate"
              icon={<RiIcon.RiCalculatorLine style={{ fontSize: "40px" }} />}
            />
          </div>
          <div className="col-md-2">
            <ProjectButton
              to="/customertables"
              title="Contract"
              subTitle="Contract"
              icon={<FaIcon.FaFileContract style={{ fontSize: "40px" }} />}
            />
          </div>
          <div className="col-md-2">
            <ProjectButton
              to="/customertables"
              title="Material List"
              subTitle="Material List"
              icon={<FaIcon.FaBoxes style={{ fontSize: "40px" }} />}
            />
          </div>
          <div className="col-md-2">
            <ProjectButton
              to="/customertables"
              title="Work Order"
              subTitle="Work Order"
              icon={<GiIcon.GiPapers style={{ fontSize: "40px" }} />}
            />
          </div>
          <div className="col-md-2">
            <ProjectButton
              to="/customertables"
              title="Change Order"
              subTitle="Change Order"
              icon={<GrIcon.GrWorkshop style={{ fontSize: "40px" }} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

//button component
const ProjectButton = (props) => {
  return (
    <CCard className="shadow" style={{ maxWidth: "300px", maxHeight: "300px" }}>
      <CCardBody>
        {/*Icons */}
        <CCard
          className="shadow text-center mx-auto"
          style={{ maxWidth: "80px", borderRadius: "10px" }}
        >
          <CCardBody>{props.icon}</CCardBody>
        </CCard>
        {/*Title */}
        <div className="text-center">
          <h4>{props.title}</h4>
          <p className="text-muted">client {props.subTitle}</p>
          <Link
            to={props.to}
            className="btn w-100 text-white"
            style={{ borderRadius: "25px", backgroundColor: "#e60029" }}
          >
            Continue
          </Link>
        </div>
      </CCardBody>
    </CCard>
  );
};

const mapsImgStyle = {
  maxWidth: "100px",
  height: "100px",
  borderRadius: "25px",
  float: "left",
  marginRight: "10px",
};

const iconStyle = {
  color: "#e60029",
  border: "1px solid #e60029",
  padding: "3px",
  fontSize: "20px",
  borderRadius: "25px",
};
