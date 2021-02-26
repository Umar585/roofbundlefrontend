import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CCard, CCardBody } from "@coreui/react";
//Form
import Form from "./Form";
import Selections from "./DataTables/Selections";
import ProjectPrice from "./DataTables/ProjectPrice";
//icon
import * as AiIcon from "react-icons/ai";

export default function InputTable() {
  const history = useHistory();

  /*//form
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
    adjTwoStoryInc: "",
    corners: "",
    oneStoryDown: "",
    twoStoryDown: "",
    extraExtensions: "",
    elbows: "",

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
  });*/

  //const [form, setForm] = useState([]);
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
          <Form /*form={form} setForm={setForm}*/ />
          <div className="mt-4">
            <Selections />
            <ProjectPrice />
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
}
