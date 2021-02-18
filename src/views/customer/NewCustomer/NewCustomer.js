import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CCard } from "@coreui/react";

import Form from "./Form";
import * as AiIcon from "react-icons/ai";

export default function NewCustomer() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  return (
    <div>
      <div className="float-left">
        <Link to="/" style={{ fontSize: "17.5px", color: "#414141" }}>
          <AiIcon.AiOutlineArrowLeft className="h3" />
        </Link>
      </div>
      <div className="text-right">
        <h5 style={{ marginTop: "3px" }}>Add Customer</h5>
      </div>
      <CCard className="border-0 mt-3">
        {load ? <h6 className="text-center mt-4">Loading</h6> : <Form />}
      </CCard>
    </div>
  );
}
