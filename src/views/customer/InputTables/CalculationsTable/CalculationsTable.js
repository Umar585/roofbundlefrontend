import React, { useState } from "react";
import { CButton, CCard, CCardBody, CCollapse } from "@coreui/react";

//style sheet
import "../style.scss";

export default function CalculationsTable(props) {
  const [accordion, setAccordion] = useState("");
  const items = props.items;

  const getPitchValue = (val) => {
    let p = 0;
    if (val === "1") {
      p = 1.003;
    } else if (val === "2") {
      p = 1.014;
    } else if (val === "3") {
      p = 1.031;
    } else if (val === "4") {
      p = 1.054;
    } else if (val === "5") {
      p = 1.083;
    } else if (val === "6") {
      p = 1.118;
    } else if (val === "7") {
      p = 1.158;
    } else if (val === "8") {
      p = 1.202;
    } else if (val === "9") {
      p = 1.25;
    } else if (val === "10") {
      p = 1.3;
    } else if (val === "11") {
      p = 1.357;
    } else if (val === "12") {
      p = 1.414;
    } else if (val === "13") {
      p = 1.474;
    } else if (val === "14") {
      p = 1.537;
    } else if (val === "15") {
      p = 1.601;
    } else if (val === "16") {
      p = 1.667;
    } else if (val === "17") {
      p = 1.734;
    } else if (val === "18") {
      p = 1.803;
    }
    return p;
  };

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
              {items != 0 ? (
                <div
                  className="table-responsive custTable"
                  style={{ maxHeight: "400px", overflow: "scroll" }}
                >
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
                      {items.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{getPitchValue(item.pitch)}</td>
                            <td>
                              {item.pitch === "1"
                                ? 16
                                : item.pitch === "2"
                                ? 15
                                : item.pitch === "3"
                                ? 15
                                : item.pitch === "4"
                                ? 14
                                : item.pitch === "5"
                                ? 14
                                : item.pitch === "6"
                                ? 16
                                : item.pitch === "7"
                                ? 21
                                : item.pitch === "8"
                                ? 25
                                : item.pitch === "9"
                                ? 30
                                : item.pitch === "10"
                                ? 32
                                : item.pitch === "11"
                                ? 35
                                : item.pitch === "12"
                                ? 36
                                : item.pitch === "13"
                                ? 42
                                : item.pitch === "14"
                                ? 48
                                : item.pitch === "15"
                                ? 49
                                : item.pitch === "16"
                                ? 50
                                : item.pitch === "17"
                                ? 51
                                : item.pitch === "18"
                                ? 52
                                : 0}
                            </td>
                            <td>
                              {(
                                ((getPitchValue(item.pitch) *
                                  item.lengthGrnd *
                                  item.width *
                                  1.06) /
                                  100) *
                                  3 +
                                item.valleyRM * 0.06
                              ).toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h3 className="text-center text-danger">No Data</h3>
              )}
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
