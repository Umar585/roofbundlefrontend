import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Axios from "axios";
import * as AiIcon from "react-icons/ai";
import * as FiIcon from "react-icons/fi";
//style sheet
import "./LargeSinglePhoto.css";

//test img
import img3 from "../../../assets/img/Photos/img3.jpg";

export default function LargeSinglePhoto() {
  const history = useHistory();
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }

    Axios.post("/api/diagrams/getSingleDiagram", { id, email, passToken })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDiagramDelete = (diagram_id) => {
    Axios.post("/api/diagrams/deleteDiagram", { diagram_id, email, passToken })
      .then((res) => {
        history.goBack(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Large_Single_Photos mb-4">
      <div className="float-left">
        <AiIcon.AiOutlineArrowLeft
          className="h3"
          onClick={() => history.goBack()}
        />
      </div>
      <div className="float-right">
        <FiIcon.FiTrash
          className="h4"
          style={{ color: "#e60029" }}
          onClick={(e) => {
            e.preventDefault();
            handleDiagramDelete(id);
          }}
        />
      </div>
      <div className="text-center">
        <h5
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "200px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {data ? data.title : "Diagram"}
        </h5>
      </div>
      <div className="mt-4">
        <img
          src={data.name}
          alt="img"
          className="border"
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
