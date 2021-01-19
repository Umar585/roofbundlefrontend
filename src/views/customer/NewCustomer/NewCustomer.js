import React from "react";
import { CCard, CCardBody, CRow, CCol } from "@coreui/react";
import { IconContext } from "react-icons";
import * as HiIcon from "react-icons/hi";

import Form from "./Form";

export default function NewCustomer() {
  return (
    <div>
      <CCard className="shadow">
        <CCardBody>
          <div style={{ maxWidth: "1000px" }} className="mx-auto">
            <h3>New Customer</h3>
          </div>
          <Form />
        </CCardBody>
      </CCard>
    </div>
  );
}

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid #d8dbe0",
};
