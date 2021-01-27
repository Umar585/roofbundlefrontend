import React from "react";
import { CCard, CCardBody } from "@coreui/react";

//Form
import Form from "./Form";
import ProfitTable from "./CalculationsTable/ProfitTable";

export default function InputTable() {
  return (
    <CCard className="shadow">
      <CCardBody>
        <h1>Customer Table</h1>
        <ProfitTable />
        <Form />
      </CCardBody>
    </CCard>
  );
}
