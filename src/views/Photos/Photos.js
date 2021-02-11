import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import SinglePhotos from "./SinglePhotos/SinglePhotos";
import * as AiIcon from "react-icons/ai";
import Axios from "axios";
//style sheet
import "./Photos.css";

export default function Photo() {
  const history = useHistory();
  const { id } = useParams();
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const [file, setFile] = useState("");
  const [uploads, setUploads] = useState([]);
  const [btn, showBtn] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }

    Axios.post("/api/album/getalbumphotos", { id, email, passToken })
      .then((res) => {
        console.log(res.data.data);
        setUploads(res.data.data);
      })
      .catch((error) => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("email");
        localStorage.removeItem("passToken");
        history.push("/signin");
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", id);
    formData.append("email", email);
    formData.append("passToken", passToken);
    try {
      const res = await Axios.post("/api/album/addalbumphoto", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      showBtn(false);

      Axios.post("/api/album/getalbumphotos", { id, email, passToken })
        .then((res) => {
          setUploads(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
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
        {/*<form onSubmit={handleSubmit}>*/}
        <div className="image-upload">
          <label htmlFor="file">
            <AiIcon.AiOutlinePlus className="h3" />
          </label>
          <input
            id="file"
            type="file"
            name="file"
            style={{ display: "none" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
              showBtn(true);
            }}
          />
        </div>
      </div>
      <div className="text-center">
        <h5 onClick={handleSubmit}>Details</h5>
      </div>
      {btn ? (
        <div className="text-center">
          <button onClick={handleSubmit} className="btn w-100">
            Save Photos
          </button>
        </div>
      ) : null}
      <div className="row no-gutters mt-4">
        {uploads.map((item) => {
          return (
            <div className="col-4 col-sm-3 col-md-2" key={item._id}>
              <SinglePhotos
                src={require(`../../../public/uploads/${item.name}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
