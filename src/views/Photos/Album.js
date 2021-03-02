import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Axios from "axios";
import * as AiIcon from "react-icons/ai";
//style sheet
import "./Photos.css";
//test images
import img1 from "../../assets/img/album/img1.jpg";
import img2 from "../../assets/img/album/img2.jpg";
import img3 from "../../assets/img/album/img3.jpg";
import img4 from "../../assets/img/album/img4.jpg";
import img5 from "../../assets/img/album/img5.jpg";

export default function Photos() {
  const history = useHistory();
  const [albums, setAlbums] = useState([]);
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const { id } = useParams();
  const [errs, setErrs] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }
    Axios.post("/api/album/getalbum", { id, email, passToken })
      .then((res) => {
        setAlbums(res.data.data);
      })
      .catch((err) => {
        setErrs({ ...errs, failed: true });
      });
  }, [id, email, passToken, history, errs]);

  return (
    <div className="photos_page">
      <div className="float-left">
        <AiIcon.AiOutlineArrowLeft
          className="h3"
          onClick={() => history.goBack()}
        />
      </div>
      <div className="text-right">
        <h5>Album</h5>
      </div>
      <div className="mt-4">
        {albums.length === 0 ? <p className="text-center">No Album</p> : null}
        {errs.failed ? (
          <p className="text-center text-danger mt-2">
            There was an error. Try again later!
          </p>
        ) : null}

        {albums.map((n, i) => {
          return (
            <Link to={`/album/photos/${n._id}`} className="card" key={i}>
              <div className="overlay"></div>
              <img
                src={
                  i === 0
                    ? img1
                    : i === 1
                    ? img2
                    : i === 2
                    ? img3
                    : i === 3
                    ? img4
                    : i === 4
                    ? img5
                    : null
                }
                alt="Img 1"
              />
              <div className="sub_title pb-2">
                <h5
                  style={{
                    marginBottom: "0px",
                    maxWidth: "250px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color: "#fff",
                  }}
                >
                  {i === 0
                    ? "Pre Construction"
                    : i === 1
                    ? "Construction"
                    : i === 2
                    ? "Details"
                    : i === 3
                    ? "Completion"
                    : i === 4
                    ? "Estimates"
                    : null}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
