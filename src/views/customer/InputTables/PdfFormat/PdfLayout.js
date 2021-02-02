import React, { useState } from "react";
import Layout from "./Layout";
import { CButton, CCard, CCardBody, CCollapse } from "@coreui/react";

export default function PdfLayout() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <CCard>
        {/*Roof Data Table */}

        <CButton
          className="btnStyle"
          onClick={(e) => {
            e.preventDefault();
            setCollapse(!collapse);
          }}
        >
          PDF Layout
        </CButton>
        <CCollapse show={collapse}>
          <CCardBody>
            <Layout />
          </CCardBody>
        </CCollapse>
      </CCard>
    </div>
  );
}
