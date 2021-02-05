import React from "react";
import { useHistory } from "react-router-dom";
import { CCard, CCardBody } from "@coreui/react";

import Form from "./Form";
import * as AiIcon from "react-icons/ai";

export default function UpdatedCustomer() {
  const history = useHistory();
  return (
    <div>
      <CCard className="shadow">
        <CCardBody>
          <div className="mb-2 float-left">
            <AiIcon.AiOutlineArrowLeft
              className="h3"
              onClick={() => history.goBack()}
            />
          </div>
          <div style={{ maxWidth: "1000px" }} className="text-right">
            <h5>Update Customer</h5>
          </div>
          <Form />
        </CCardBody>
      </CCard>
    </div>
  );
}
