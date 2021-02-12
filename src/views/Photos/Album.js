import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Axios from "axios";
import * as AiIcon from "react-icons/ai";
import * as FiIcon from "react-icons/fi";
//style sheet
import "./Photos.css";
//test images
import img1 from "../../assets/img/album/img1.jpg";
import img2 from "../../assets/img/album/img2.jpg";
import img3 from "../../assets/img/album/img3.jpg";
import img4 from "../../assets/img/album/img4.jpg";
import img5 from "../../assets/img/album/img5.jpg";
import img6 from "../../assets/img/album/img6.jpg";

export default function Photos() {
  const history = useHistory();
  const [albums, setAlbums] = useState([]);
  const [title, setTitle] = useState();
  const [titleErr, setTitleErr] = useState(false);
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const { id } = useParams();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }
    Axios.post("/api/album/getalbum", { id, email, passToken })
      .then((res) => {
        setAlbums(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAlbum = (e) => {
    e.preventDefault();
    if (title) {
      Axios.post("/api/album/addalbum", { id, title, email, passToken })
        .then(() => {
          Axios.post("/api/album/getalbum", { id, email, passToken })
            .then((res) => {
              setAlbums(res.data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setTitleErr(true);
    }
  };

  const handleDeleteAlbum = (album_id) => {
    Axios.post("/api/album/deletealbum", { album_id, email, passToken })
      .then(() => {
        Axios.post("/api/album/getalbum", { id, email, passToken })
          .then((res) => {
            setAlbums(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
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
      <div
        className="float-right"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <AiIcon.AiOutlinePlus className="h3" />
      </div>
      <div className="text-center">
        <h5>Album</h5>
      </div>
      <div className="mt-4">
        {albums.length === 0 ? <p className="text-center">No Album</p> : null}
        {albums.map((item) => {
          return (
            <Link
              to={`/album/photos/${item._id}`}
              className="card"
              key={item._id}
            >
              <div
                style={{
                  position: "absolute",
                  zIndex: "3",
                  right: "10px",
                  top: "10px",
                  color: "white",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteAlbum(item._id);
                }}
              >
                <p>
                  <FiIcon.FiTrash />
                </p>
              </div>
              <div className="overlay"></div>
              <img
                src={
                  item.img === "1"
                    ? img1
                    : item.img === "2"
                    ? img2
                    : item.img === "3"
                    ? img3
                    : item.img === "4"
                    ? img4
                    : item.img === "5"
                    ? img5
                    : item.img === "6"
                    ? img6
                    : null
                }
                alt="Img"
              />
              <div className="sub_title pb-2">
                <h5
                  style={{
                    marginBottom: "0px",
                    maxWidth: "250px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.title}
                </h5>
                {/*<p className="small">0 Photos 0 Videos</p>*/}
              </div>
            </Link>
          );
        })}

        <form className="form-group" onSubmit={handleAlbum}>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <h5 className="float-left">Create Album</h5>
                  <button
                    type="button"
                    className="close mb-4"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <input
                    type="text"
                    id="albumTitle"
                    name="albumTitle"
                    placeholder="Album Title*"
                    className={
                      titleErr ? "form-control border-danger" : "form-control"
                    }
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <div className="confirm_btns mt-1">
                    <button
                      type="submit"
                      style={{ backgroundColor: "#e60029" }}
                      className="btn btn-primary w-100"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
