import React from "react";
import { Link } from "react-router-dom";

//style sheet
import "../Photos.css";
export default function SinglePhotos(props) {
  return (
    <div className="Single_Photos border">
      <Link to={`/album/photos/photo/${props.photoID}`}>
        <img src={props.src} alt="img" />
      </Link>
    </div>
  );
}
