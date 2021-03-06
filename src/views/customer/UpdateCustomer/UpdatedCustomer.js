import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CCard } from "@coreui/react";
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
      <div className="float-left">
        <AiIcon.AiOutlineArrowLeft
          className="h3"
          onClick={() => history.goBack()}
        />
      </div>
      <div className="text-right">
        <h5 style={{ marginTop: "3px" }}>Update Customer</h5>
      </div>

      <CCard className="border-0 mt-3">
        {load ? (
          <h6 className="text-center mt-4">Loading</h6>
        ) : (
          <Form customer={customer} />
        )}
      </CCard>
    </div>
  );
}
