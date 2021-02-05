import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SinglePhotos from "./SinglePhotos/SinglePhotos";
import * as AiIcon from "react-icons/ai";
//style sheet
import "./Photos.css";
//test images
import img1 from "../../assets/img/Photos/img1.jpg";
import img2 from "../../assets/img/Photos/img2.jpg";
import img3 from "../../assets/img/Photos/img3.jpg";

export default function Photos() {
  const history = useHistory();
  const [view, setView] = useState({
    detailsView: true,
    preConstView: true,
    constructionView: true,
    completionView: true,
  });
  const [imgView, setImgView] = useState({
    detailImgs: false,
    preConstImgs: false,
    constructionImgs: false,
    completionImgs: false,
  });

  const handleDetailsView = () => {
    setView(false);
    setImgView({ ...imgView, detailImgs: true });
  };
  const handlePreConstView = () => {
    setView(false);
    setImgView({ ...imgView, preConstImgs: true });
  };
  const handleConstructionView = () => {
    setView(false);
    setImgView({ ...imgView, constructionImgs: true });
  };
  const handleCompletionView = () => {
    setView(false);
    setImgView({ ...imgView, completionImgs: true });
  };

  const handleCloseBtn = () => {
    setView({
      detailsView: true,
      preConstView: true,
      constructionView: true,
      completionView: true,
    });
    setImgView(false);
  };

  return (
    <div className="photos_page">
      <div className="float-left">
        <AiIcon.AiOutlineArrowLeft
          className="h3"
          onClick={
            view.detailsView ||
            view.preConstView ||
            view.constructionView ||
            view.completionView
              ? () => history.goBack()
              : handleCloseBtn
          }
        />
      </div>
      <div className="float-right">
        <AiIcon.AiOutlinePlus
          className="h3"
          onClick={
            view.detailsView ||
            view.preConstView ||
            view.constructionView ||
            view.completionView
              ? () => alert("create album")
              : () => alert("add photo")
          }
        />
      </div>
      <div className="text-center">
        {imgView.detailImgs ||
          imgView.preConstImgs ||
          imgView.constructionImgs ||
          imgView.completionImgs || <h5>Album</h5>}
        {imgView.detailImgs ? <h5>Details</h5> : null}
        {imgView.constructionImgs ? <h5>Construction</h5> : null}
        {imgView.preConstImgs ? <h5>Pre Construction</h5> : null}
        {imgView.completionImgs ? <h5>Completion</h5> : null}
      </div>

      <div className="mt-4">
        {view.detailsView && (
          <div className="card" onClick={handleDetailsView}>
            <div className="overlay"></div>
            <img src={img1} alt="DetailsImg" />
            <div className="sub_title">
              <h5 style={{ marginBottom: "0px" }}>Details</h5>
              <p className="small">12 Photos</p>
            </div>
          </div>
        )}
        {view.preConstView && (
          <div className="card" onClick={handlePreConstView}>
            <div className="overlay"></div>
            <img src={img2} alt="DetailsImg" />
            <div className="sub_title">
              <h5 style={{ marginBottom: "0px" }}>Pre Construction</h5>
              <p className="small">11 Photos</p>
            </div>
          </div>
        )}
        {view.constructionView && (
          <div className="card" onClick={handleConstructionView}>
            <div className="overlay"></div>
            <img src={img3} alt="DetailsImg" />
            <div className="sub_title">
              <h5 style={{ marginBottom: "0px" }}>Construction</h5>
              <p className="small">56 Photos</p>
            </div>
          </div>
        )}
        {view.completionView && (
          <div className="card" onClick={handleCompletionView}>
            <div className="overlay"></div>
            <img src={img1} alt="DetailsImg" />
            <div className="sub_title">
              <h5 style={{ marginBottom: "0px" }}>Completion</h5>
              <p className="small">12 Photos</p>
            </div>
          </div>
        )}
        {/*Single Photos */}
        {imgView.detailImgs && (
          <div>
            <div className="row no-gutters">
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
            </div>
          </div>
        )}
        {imgView.preConstImgs && (
          <div>
            <div className="row no-gutters">
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
            </div>
          </div>
        )}
        {imgView.constructionImgs && (
          <div>
            <div className="row no-gutters">
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
            </div>
          </div>
        )}
        {imgView.completionImgs && (
          <div>
            <div className="row no-gutters">
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <SinglePhotos />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
