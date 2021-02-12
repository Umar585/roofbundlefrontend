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
  const [file, setFile] = useState([]);
  const [uploads, setUploads] = useState([]);
  const [album, setAlbum] = useState("");
  const [btn, showBtn] = useState(false);
  const [photoErr, setPhotoErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }

    Axios.post("/api/album/getalbumphotos", { id, email, passToken })
      .then((res) => {
        setUploads(res.data.data);
        setAlbum(res.data.album.title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleForm = () => {
    let isValid = true;
    if (file.length > 25) {
      isValid = false;
      setErrMsg("Only allowed 24 Uploads");
      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = handleForm();
    if (isValid) {
      for (var i = 0; i < file.length; i++) {
        const formData = new FormData();
        formData.append("image", file[i]);
        setTimeout(() => {
          Axios.post("/api/album/addalbumphoto", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              album_id: id,
              email: email,
              token: passToken,
            },
          })
            .then((res) => {
              showBtn(false);
              Axios.post("/api/album/getalbumphotos", { id, email, passToken })
                .then((res) => {
                  setUploads(res.data.data);
                  setAlbum(res.data.album.title);
                })
                .catch((error) => {
                  console.log("test", error);
                });
            })
            .catch((err) => {
              if (err.response.data.msg === "Too many photos") {
                setPhotoErr(true);
                setTimeout(() => {
                  setPhotoErr(false);
                }, 3000);
              } else if (err.response.status === 500) {
                console.log("There was a problem with the server");
              }
            });
        }, 1000);
      }
    }
  };

  const deletePhoto = (photo_id) => {
    Axios.post("/api/album/deletealbumphoto", { photo_id, email, passToken })
      .then((res) => {
        /*setErrMsg("Photo Deleted");
        setTimeout(() => {
          setErrMsg("");
        }, 2000);*/
        Axios.post("/api/album/getalbumphotos", { id, email, passToken })
          .then((res) => {
            setUploads(res.data.data);
            setAlbum(res.data.album.title);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
        setErrMsg("Something went wrong");
        setTimeout(() => {
          setErrMsg("");
        }, 4000);
      });
  };

  return (
    <div className="photos_page mb-4">
      <div className="float-left">
        <AiIcon.AiOutlineArrowLeft
          className="h3"
          onClick={() => history.goBack()}
        />
      </div>
      <div className="float-right">
        {/*<form onSubmit={handleSubmit}>*/}
        <div className="image-upload">
          <label htmlFor="image">
            <AiIcon.AiOutlinePlus className="h3" />
          </label>
          <input
            id="image"
            type="file"
            accept=".png, .jpg, .jpeg"
            multiple
            name="image"
            style={{
              display: "none",
            }}
            onChange={(e) => {
              setFile(e.target.files);
              showBtn(true);
            }}
          />
        </div>
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
          {album ? album : "Photos"}
        </h5>
      </div>
      {btn ? (
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="btn w-100"
            style={{
              border: "1px solid lightgray",
              outline: "none",
              boxShadow: "none",
              backgroundColor: "#e60029",
              color: "#fff",
            }}
          >
            Save Photos
          </button>
        </div>
      ) : null}
      {photoErr ? (
        <p className="text-center  mt-2 mb-2">Photos Limit Reached</p>
      ) : null}
      {errMsg ? <p className="text-center  mt-2 mb-2">{errMsg}</p> : null}
      {uploads.length === 0 ? (
        <p className="text-center  pt-4 mt-4">No Images</p>
      ) : null}
      <div className="row no-gutters mt-4">
        {uploads.map((item) => {
          return (
            <div className="col-4 col-sm-3 col-md-2" key={item._id}>
              <SinglePhotos
                src={item.name}
                photoID={item._id}
                handleOnclick={(e) => {
                  e.preventDefault();
                  deletePhoto(item._id);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
