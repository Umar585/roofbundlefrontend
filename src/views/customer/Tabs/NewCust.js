import React, { useState, useEffect } from "react";
import Axios from "axios";
import { CCard } from "@coreui/react";
//TableComponent
import TableComponent from "../TableComponent/Table";

const CustomerTables = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    let email = localStorage.getItem("email");
    Axios.post("/api/customer/getusers", { email })
      .then((res) => {
        setCustomers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {customers.map((item) => {
        return (
          <CCard style={cardStyle} key={item._id}>
            <TableComponent
              fullname={`${item.fname} ${item.lname}`}
              address={item.address}
              lat={item.lats}
              lng={item.lngs}
              phone={item.phone}
            />
          </CCard>
        );
      })}
    </>
  );
};

const cardStyle = {
  padding: "7px",
  border: "0px",
  marginBottom: "-10px",
};

export default CustomerTables;
