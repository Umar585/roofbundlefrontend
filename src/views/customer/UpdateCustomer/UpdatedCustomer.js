import React from "react";
import { CCard, CCardBody } from "@coreui/react";

import Form from "./Form";

export default function UpdatedCustomer() {
  return (
    <div>
      <CCard className="shadow">
        <CCardBody>
          <div style={{ maxWidth: "1000px" }} className="mx-auto">
            <h3>Update Customer</h3>
          </div>
          <Form />
        </CCardBody>
      </CCard>
    </div>
  );
}
