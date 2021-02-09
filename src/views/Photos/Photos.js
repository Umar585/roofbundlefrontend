import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SinglePhotos from "./SinglePhotos/SinglePhotos";
import * as AiIcon from "react-icons/ai";
import Axios from "axios";
//style sheet
import "./Photos.css";

export default function Photo() {
  const history = useHistory();
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const [image, setImage] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }
  }, []);

  const handleNewImage = (e) => {
    console.log(e.target.files);
    setImage(e.target.files);
    Axios.post("/api/album/addalbumphoto", { image })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="photos_page">
      <div className="float-left">
        <AiIcon.AiOutlineArrowLeft
          className="h3"
          onClick={() => history.goBack()}
        />
      </div>
      <div className="float-right">
        <div className="image-upload">
          <label htmlFor="file-input">
            <AiIcon.AiOutlinePlus className="h3" />
          </label>
          <input
            id="file-input"
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handleNewImage}
          />
        </div>
      </div>
      <div className="text-center">
        <h5>Details</h5>
      </div>
      <div className="row no-gutters mt-4">
        <div className="col-4 col-sm-3 col-md-2">
          <SinglePhotos />
        </div>
      </div>
    </div>
  );
}
