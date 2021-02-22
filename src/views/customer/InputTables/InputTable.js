import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import { CCard, CCardBody } from "@coreui/react";
//Form
import Form from "./Form";
import Selections from "./DataTables/Selections";
import BundlePrices from "./BundlePrices/Prices";
//icon
import * as AiIcon from "react-icons/ai";

export default function InputTable() {
  const [pricesData, setPricesData] = useState([]);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const history = useHistory();
  const { id } = useParams();
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");

  //form
  const [form, setForm] = useState({
    tableArray: [],
    pitch: 0,
    stories: 0,
    roofTop: false,
    bin: false,
    newConst: false,
    lengthGrnd: "",
    width: "",
    eave: "",
    gableGrnd: "",
    valleyRM: "",
    hipRM: "",
    ridge: "",
    wall: "",
    chimney: "",

    lengthGrndInc: "",
    widthInc: "",
    eaveInc: "",
    gableGrndInc: "",
    valleyRMInc: "",
    hipRMInc: "",
    ridgeInc: "",
    wallInc: "",
    chimneyInc: "",

    adjOneStory: "",
    adjOneStoryInc: "",
    adjTwoStory: "",
    corners: "",
    oneStoryDown: "",
    twoStoryDown: "",
    extraExtensions: "",

    oneStoryPrice: 0,
    adjOneStoryPrice: 0,
    twoStoryPrice: 0,
    adjTwoStoryPrice: 0,
    cornersPrice: 0,
    oneStoryDownPrice: 0,
    twoStoryDownPrice: 0,
    extraExtensionsPrice: 0,
    difficultyPrice: 0,
    oneStoryEaves: 0,
  });

  useEffect(() => {
    Axios.post("/api/price", { id, email, passToken }).then((res) => {
      setPricesData(res.data.data[0]);
    });
  }, [id, email, passToken]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("/api/price/priceupdate", { id, pricesData, email, passToken })
      .then((res) => {
        //console.log(res);
        if (res.data === "Success") {
          setError(true);
          setMsg(true);
          setTimeout(() => {
            setError(false);
          }, 2000);
        }
      })
      .catch((e) => {
        if (e) {
          setError(true);
          setMsg(false);
          setTimeout(() => {
            setError(false);
          }, 2000);
        }
      });
  };

  return (
    <div>
      <div className="float-left">
        <AiIcon.AiOutlineArrowLeft
          className="h3"
          onClick={() => history.goBack()}
        />
      </div>
      <div className="text-right">
        <h5 style={{ marginTop: "3px" }}>Specifications</h5>
      </div>
      <CCard className="shadow mt-3">
        <CCardBody>
          <Form pricesData={pricesData} form={form} setForm={setForm} />
          <div className="mt-4">
            <Selections />

            <BundlePrices
              handleSubmit={handleSubmit}
              pricesData={pricesData}
              setPricesData={setPricesData}
              error={error}
              setError={setError}
              msg={msg}
              setMsg={setMsg}
            />
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
}
