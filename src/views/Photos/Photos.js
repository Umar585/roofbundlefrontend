import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SinglePhotos from "./SinglePhotos/SinglePhotos";
import * as AiIcon from "react-icons/ai";
//style sheet
import "./Photos.css";

export default function Photo() {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }
  }, []);
  return (
    <div className="photos_page">
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
