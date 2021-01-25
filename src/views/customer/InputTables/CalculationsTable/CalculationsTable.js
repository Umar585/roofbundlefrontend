import React, { useState } from "react";
import { CButton, CCard, CCardBody, CCollapse } from "@coreui/react";

//style sheet
import "../style.scss";

export default function CalculationsTable() {
  const [accordion, setAccordion] = useState("");
  return (
    <div>
      <div id="accordion">
        <CCard className="shadow">
          <CButton
            style={btnStyle}
            onClick={() => setAccordion(accordion === 0 ? null : 0)}
          >
            <h5>Calculations Table</h5>
          </CButton>

          <CCollapse show={accordion === 0}>
            <CCardBody>
              <div className="table-responsive custTable">
                <table className="table table-responsive-lg table-bordered">
                  <tbody>
                    <tr>
                      <th></th>
                      <th>Pitch Factor</th>
                      <th>Basic Install Cost</th>
                      <th>Bundles</th>
                      <th>Gable Actual</th>
                      <th>Starter Bundles</th>
                      <th>Starter Labour</th>
                      <th>Capping Bundles</th>
                      <th>Campping Labour</th>
                      <th>Wall/Chimmney Labour</th>
                      <th>Shingle Labour Cost</th>
                      <th>Shingle Material Cost</th>
                      <th>Rooftop Delivery Cost</th>
                      <th>Carry up Labour Cost</th>
                      <th>2nd St. & Bin Cost</th>
                      <th>Double Felt</th>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>1, 414</td>
                      <td>36.00</td>
                      <td>112.4</td>
                      <td>141</td>
                      <td></td>
                      <td>$120.00</td>
                      <td></td>
                      <td>$72.00</td>
                      <td></td>
                      <td>$4046.87</td>
                      <td></td>
                      <td>$0.00</td>
                      <td>$281.03</td>
                      <td>$337.24</td>
                      <td>0.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CCardBody>
          </CCollapse>
        </CCard>
      </div>
    </div>
  );
}

const btnStyle = {
  outline: "none",
  boxShadow: "none",
  border: "none",
};
