import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import * as AiIcon from "react-icons/ai";
//style sheet
import "./Photos.css";
//test images
import img1 from "../../assets/img/Photos/img1.jpg";

export default function Photos() {
  const history = useHistory();
  const [albums, setAlbums] = useState([]);
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }
    Axios.post("/api/album/getalbum", { email, passToken })
      .then((res) => {
        //console.log(res.data.data);
        setAlbums(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [form, setForm] = useState({
    title: "",
    image: "",
  });

  const handleAlbum = (e) => {
    e.preventDefault();
    console.log(form);
    Axios.post("/api/album/addalbum", { form, email, passToken });
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
            <Link to="/album/photos" className="card" key={item._id}>
              <div className="overlay"></div>
              <img src={item.main_photo} alt="DetailsImg" />
              <div className="sub_title">
                <h5 style={{ marginBottom: "0px" }}>{item.title}</h5>
                <p className="small">12 Photos</p>
              </div>
            </Link>
          );
        })}

        <form className="form-group" onSubmit={handleAlbum}>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
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
                    placeholder="Album Title"
                    className="form-control"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                  />
                  <div className="custom-file mt-2">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      value={form.image}
                      onChange={(e) =>
                        setForm({ ...form, image: e.target.value })
                      }
                    />
                    <label
                      className="custom-file-label"
                      for="customFile"
                      style={{
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {form.image != "" ? form.image : "Choose Image"}
                    </label>
                  </div>

                  <div className="confirm_btns mt-1">
                    <div className="row">
                      <div className="col-sm-6 mt-1">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                      <div className="col-sm-6 mt-1">
                        <button
                          type="submit"
                          style={{ backgroundColor: "#e60029" }}
                          className="btn btn-primary"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
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
