import React from "react";
import { CCard } from "@coreui/react";
//TableComponent
import TableComponent from "../TableComponent/Table";

const CustomerTables = () => {
  return (
    <>
      <CCard style={cardStyle}>
        <TableComponent />
      </CCard>
      <CCard style={cardStyle}>
        <TableComponent />
      </CCard>
      <CCard style={cardStyle}>
        <TableComponent />
      </CCard>
    </>
  );
};

const cardStyle = {
  padding: "7px",
  border: "0px",
  marginBottom: "-10px",
};

export default CustomerTables;
