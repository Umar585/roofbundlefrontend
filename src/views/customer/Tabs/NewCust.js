import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { CCard } from "@coreui/react";
//TableComponent
import TableComponent from "../TableComponent/Table";

const NewCust = () => {
  const history = useHistory();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    let email = localStorage.getItem("email");
    let passToken = localStorage.getItem("passToken");
    let page = "New";
    Axios.post("/api/customer/getusers", { email, passToken, page })
      .then((res) => {
        setCustomers(res.data.data);
      })
      .catch((error) => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("email");
        localStorage.removeItem("passToken");
        history.push("/signin");
      });
  }, [history]);
  return (
    <div style={{ marginBottom: "20px" }}>
      {customers.length === 0 ? (
        <p className="text-center mt-4">No New Customers</p>
      ) : (
        <>
          <p className="mt-2">
            {customers.length} New{" "}
            {customers.length > 1 ? "Customers" : "Customer"}
          </p>
          {customers.map((item) => {
            return (
              <CCard style={cardStyle} key={item._id}>
                <TableComponent
                  id={item._id}
                  fullname={`${item.fname} ${item.lname}`}
                  address={item.address}
                  email={item.email}
                  lat={item.lats}
                  lng={item.lngs}
                  phone={item.phone}
                  pageTitle="New"
                />
              </CCard>
            );
          })}
        </>
      )}
    </div>
  );
};

const cardStyle = {
  marginTop: "-15px",
  padding: "7px",
  border: "0px",
  marginBottom: "-10px",
};

export default NewCust;
