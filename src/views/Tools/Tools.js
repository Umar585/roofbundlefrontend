import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CCard, CCollapse } from "@coreui/react";
//icon
import * as AiIcon from "react-icons/ai";
//Components
import MaterialCost from "./CostsTable/Materials";
import LabourCost from "./CostsTable/Labour";
import ProfitCost from "./CostsTable/Profits";

export default function Tools() {
  const history = useHistory();
  const [accordion, setAccordion] = useState(0);
  return (
    <div>
      <div className="float-left">
        <AiIcon.AiOutlineArrowLeft
          className="h3"
          onClick={() => history.goBack()}
        />
      </div>
      <div className="text-right">
        <h5 style={{ marginTop: "3px" }}>Tools</h5>
      </div>
      <CCard className="p-2 mt-3">
        <h6
          className="customersTable_sliderBtn border w-100 text-center p-1"
          onClick={() => setAccordion(accordion === 1 ? null : 1)}
        >
          Material Cost
        </h6>
        <CCollapse show={accordion === 1}>
          <CCard className="p-2">
            <MaterialCost />
          </CCard>
        </CCollapse>
        <h6
          className="customersTable_sliderBtn border w-100 text-center p-1"
          onClick={() => setAccordion(accordion === 2 ? null : 2)}
        >
          Labour Cost
        </h6>
        <CCollapse show={accordion === 2}>
          <CCard className="p-2">
            <LabourCost />
          </CCard>
        </CCollapse>
        <h6
          className="customersTable_sliderBtn border w-100 text-center p-1"
          onClick={() => setAccordion(accordion === 3 ? null : 3)}
        >
          Profit
        </h6>
        <CCollapse show={accordion === 3}>
          <CCard className="p-2">
            <ProfitCost />
          </CCard>
        </CCollapse>
      </CCard>
    </div>
  );
}
