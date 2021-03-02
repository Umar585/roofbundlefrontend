import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function CustomerCard() {
  const { id } = useParams();
  const email = localStorage.getItem("email");
  const [customer, setCustomer] = useState([]);
  const passToken = localStorage.getItem("passToken");

  useEffect(() => {
    Axios.post("/api/customer/getsingleuser", { id, email, passToken })
      .then((res) => {
        setCustomer(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, email, passToken]);

  return (
    <div>
      <div className="card shadow" style={{ borderRadius: "10px" }}>
        <div className="card-body">
          <h5>Customer</h5>
          <hr />
          <div className="card-text">
            <p className="p5">{`${customer.fname} ${customer.lname}`}</p>
            <ul
              className="p4"
              style={{ marginLeft: "-23px", marginBottom: "-2px" }}
            >
              <li>{customer.address}</li>
              <li>{customer.phone}</li>
              <li>{customer.email}</li>
              <li>{customer.scope}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
