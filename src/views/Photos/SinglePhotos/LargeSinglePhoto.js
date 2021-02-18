import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Axios from "axios";
import * as FiIcon from "react-icons/fi";
import * as AiIcon from "react-icons/ai";
//style sheet
import "./LargeSinglePhoto.css";

//test img
import img3 from "../../../assets/img/Photos/img3.jpg";

export default function LargeSinglePhoto() {
  const history = useHistory();
  const [image, setImage] = useState();
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const { id } = useParams();
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }
    Axios.post("/api/album/getsinglePhoto", { id, email, passToken })
      .then((res) => {
        setImage(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deletePhoto = () => {
    const photo_id = id;
    Axios.post("/api/album/deletealbumphoto", { photo_id, email, passToken })
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
          onClick={deletePhoto}
        />
      </div>
      <div className="text-center">
        <h5>Photo</h5>
      </div>
      <div
        className="mt-4 border"
        style={{ minHeight: "70vh", maxHeight: "70vh" }}
      >
        <div className="rotate_btn">
          <AiIcon.AiOutlineRotateRight
            onClick={(e) => {
              e.preventDefault();
              rotateImage();
            }}
          />
        </div>
        <img
          src={image}
          alt="img"
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
        />
      </div>
    </div>
  );
}
