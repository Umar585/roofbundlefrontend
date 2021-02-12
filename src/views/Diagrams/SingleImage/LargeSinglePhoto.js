import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Axios from "axios";
import * as AiIcon from "react-icons/ai";
//style sheet
import "./LargeSinglePhoto.css";

//test img
import img3 from "../../../assets/img/Photos/img3.jpg";

export default function LargeSinglePhoto() {
  const history = useHistory();
  /* const [image, setImage] = useState();
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const { id } = useParams();
*/
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }
    /*Axios.post("/api/album/getsinglePhoto", { id, email, passToken })
      .then((res) => {
        setImage(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });*/
  }, []);
  return (
    <div className="Large_Single_Photos mb-4">
      <div className="float-left">
        <AiIcon.AiOutlineArrowLeft
          className="h3"
          onClick={() => history.goBack()}
        />
      </div>
      <div className="float-right">
        <AiIcon.AiOutlinePlus className="h3" />
      </div>
      <div className="text-center">
        <h5>Photo</h5>
      </div>
      <div className="mt-4">
        <img src={img3} alt="img" className="border" />
      </div>
    </div>
  );
}
