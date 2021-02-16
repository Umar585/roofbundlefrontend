import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Axios from "axios";
import * as AiIcon from "react-icons/ai";
import * as FiIcon from "react-icons/fi";
//style sheet
import "./Diagrams.css";
//test images
import img1 from "../../assets/img/album/img1.jpg";
import img2 from "../../assets/img/album/img2.jpg";
import img3 from "../../assets/img/album/img3.jpg";
import img4 from "../../assets/img/album/img4.jpg";
import img5 from "../../assets/img/album/img5.jpg";
import img6 from "../../assets/img/album/img6.jpg";
export default function Diagrams() {
  const history = useHistory();
  const { id } = useParams();
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState([]);
  const [data, setData] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const [formErr, setFormErr] = useState({
    title: false,
    file: false,
  });

  useEffect(() => {
    Axios.post("/api/diagrams/getDiagram", { id, email, passToken })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleForm = () => {
    let isValid = true;
    if (title === "") {
      setFormErr({ ...formErr, title: true });
      isValid = false;
    } else if (file.length === 0) {
      setFormErr({ ...formErr, title: false, file: true });
      isValid = false;
    } else {
      setFormErr({ ...formErr, title: false, file: false });
      isValid = true;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleForm();

    if (isValid) {
      const formData = new FormData();
      formData.append("image", file);
      Axios.post("/api/diagrams/addDiagram", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          user_id: id,
          email: email,
          token: passToken,
          diagram_title: title,
        },
      })
        .then((res) => {
          setTitle("");
          setFile([]);

          Axios.post("/api/diagrams/getDiagram", { id, email, passToken })
            .then((res) => {
              setData(res.data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          if (err.response.data.msg === "Too many diagrams") {
            setErrMsg("Diagrams Limit Reached");
            setTimeout(() => {
              setErrMsg("");
            }, 4000);
          }
          console.log(err);
        });
    }
  };

  const handleDiagramDelete = (diagram_id) => {
    Axios.post("/api/diagrams/deleteDiagram", { diagram_id, email, passToken })
      .then((res) => {
        Axios.post("/api/diagrams/getDiagram", { id, email, passToken })
          .then((res) => {
            setData(res.data.data);
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
        <h5>Diagrams</h5>
      </div>
      {data.length === 0 ? (
        <div className="mt-4 text-center">No Diagrams</div>
      ) : null}

      <div className="mt-4">
        {data.map((item) => {
          return (
            <Link
              to={`/diagram/sketch/${item._id}`}
              className="card"
              key={item._id}
            >
              <div
                style={{
                  position: "absolute",
                  zIndex: "3",
                  right: "10px",
                  top: "10px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleDiagramDelete(item._id);
                }}
              >
                <p>
                  <FiIcon.FiTrash style={{ color: "#fff" }} />
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
                    color: "#fff",
                  }}
                >
                  {item.title}
                </h5>
                {/*<p className="small">0 Photos 0 Videos</p>*/}
              </div>
            </Link>
          );
        })}

        <form className="form-group" onSubmit={handleSubmit}>
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
                  <h5 className="float-left">Create Diagram</h5>
                  <button
                    type="button"
                    className="close mb-4"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div>
                    <input
                      type="text"
                      id="diagramTitle"
                      name="diagramTitle"
                      placeholder="Diagram Title*"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    {formErr.title ? (
                      <label className="float-right small text-danger">
                        Title Required
                      </label>
                    ) : null}
                    <div class="custom-file mt-2">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="image"
                        name="image"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                      />
                      <label
                        class="custom-file-label"
                        htmlFor="image"
                        style={{
                          maxWidth: "100%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {file.length === 0 ? "Choose file..." : file.name}
                      </label>
                    </div>
                    {formErr.file ? (
                      <label className="float-right small text-danger">
                        File Required
                      </label>
                    ) : null}
                    <div className="confirm_btns mt-3 text-center">
                      <div className="mb-2">
                        <span className="text-danger">{errMsg}</span>
                      </div>
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
          </div>
        </form>
      </div>
    </div>
  );
}
