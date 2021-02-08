import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CCard, CCardBody } from "@coreui/react";

import Form from "./Form";
import * as AiIcon from "react-icons/ai";

export default function NewCustomer() {
  const history = useHistory();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
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
            <h5>New Customer</h5>
          </div>
          {load ? <h6 className="text-center mt-4">Loading</h6> : <Form />}
        </CCardBody>
      </CCard>
    </div>
  );
}
