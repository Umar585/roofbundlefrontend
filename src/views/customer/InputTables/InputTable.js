import React from "react";
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
          <Form />
          <div className="mt-4">
            <Selections />
            <ProjectPrice />
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
}
