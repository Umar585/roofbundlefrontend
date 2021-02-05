import React from "react";
import { useHistory } from "react-router-dom";
import * as AiIcon from "react-icons/ai";
//style sheet
import "./LargeSinglePhoto.css";

//test img
import img3 from "../../../assets/img/Photos/img3.jpg";

export default function LargeSinglePhoto() {
  const history = useHistory();
  return (
    <div className="Large_Single_Photos">
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
        <img src={img3} alt="img" />
      </div>
    </div>
  );
}
