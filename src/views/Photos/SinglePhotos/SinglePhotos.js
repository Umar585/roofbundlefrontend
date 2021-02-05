import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/Photos/img1.jpg";
//style sheet
import "../Photos.css";
export default function SinglePhotos(props) {
  return (
    <div className="Single_Photos">
      <Link to="/photos/photo">
        <img src={img1} alt="img" />
      </Link>
    </div>
  );
}
