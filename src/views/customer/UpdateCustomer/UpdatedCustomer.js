import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CCard, CCardBody } from "@coreui/react";
import Axios from "axios";
import Form from "./Form";
import * as AiIcon from "react-icons/ai";

export default function UpdatedCustomer() {
  const [load, setLoad] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);

    let email = localStorage.getItem("email");
    let passToken = localStorage.getItem("passToken");

    Axios.post("/api/customer/getsingleuser", { id, email, passToken })
      .then((res) => {
        setCustomer(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/");
      });
  }, [id, history]);

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
          {load ? (
            <h6 className="text-center mt-4">Loading</h6>
          ) : (
            <Form customer={customer} />
          )}
        </CCardBody>
      </CCard>
    </div>
  );
}
