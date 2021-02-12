import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Axios from "axios";
import * as AiIcon from "react-icons/ai";
import * as FiIcon from "react-icons/fi";
//style sheet
import "./Diagrams.css";

export default function Diagrams() {
  const history = useHistory();
  const [title, setTitle] = useState();
  const [titleErr, setTitleErr] = useState(false);
  return (
    <div className="Diagrams_page">
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
      <div className="mt-4">
        <Link to="/diagram/sketch">
          <div className="card shadow">
            <div className="card-body text-center">
              <h6 className="title">2 Story House Roof</h6>
            </div>
          </div>
        </Link>

        <form className="form-group" onSubmit={""}>
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
                  <input
                    type="text"
                    id="diagramTitle"
                    name="diagramTitle"
                    placeholder="Diagram Title*"
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
