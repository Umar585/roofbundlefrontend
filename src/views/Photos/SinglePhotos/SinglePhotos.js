import React from "react";
import { Link } from "react-router-dom";
import * as FiIcon from "react-icons/fi";
import * as AiIcon from "react-icons/ai";
//style sheet
import "../Photos.css";
export default function SinglePhotos(props) {
  return (
    <div className="Single_Photos border">
      <div
        style={{
          position: "absolute",
          right: "5px",
          top: "2px",
          color: "#e60029",
        }}
      >
        <FiIcon.FiTrash onClick={props.handleOnclick} />
      </div>
      <div
        style={{
          position: "absolute",
          right: "5px",
          bottom: "5px",
        }}
      >
        <Link
          to={`/album/photos/photo/${props.photoID}`}
          style={{ color: "#e60029" }}
        >
          <AiIcon.AiOutlineFullscreen />
        </Link>
      </div>
      <img src={props.src} alt="img" />
    </div>
  );
}
