import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import * as AiIcon from "react-icons/ai";
import * as FiIcon from "react-icons/fi";
//style sheet
import "./LargeDiagramPhoto.css";

export default function LargeSinglePhoto() {
  const history = useHistory();
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [rotate, setRotate] = useState(0);

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
  }, [id, email, passToken, history]);

  const handleDiagramDelete = (diagram_id) => {
    Axios.post("/api/diagrams/deleteDiagram", { diagram_id, email, passToken })
      .then((res) => {
        history.goBack(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rotateImage = () => {
    setRotate(rotate + 90);
  };
  return (
    <div className="Large_Diagram_Photos mb-4">
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
      <div className="mt-4 img_container border">
        <div className="rotate_btn">
          <AiIcon.AiOutlineRotateRight
            onClick={(e) => {
              e.preventDefault();
              rotateImage();
            }}
          />
        </div>
        <img
          src={data.name}
          alt="img"
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
        />
      </div>
    </div>
  );
}
