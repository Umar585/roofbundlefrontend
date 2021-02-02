import React, { useState } from "react";
import { CButton, CCard, CCardBody, CCollapse } from "@coreui/react";
import BundlePrices from "./bundlePrices";
//style sheet
import "../style.scss";
export default function Prices(props) {
  const [collapse, setCollapse] = useState(false);
  const pricesData = props.pricesData;
  const setPricesData = props.setPricesData;
  const error = props.error;
  const msg = props.msg;
  return (
    <div>
      <CCard>
        {/*Roof Data Table */}

        <CButton
          className="btnStyle"
          onClick={(e) => {
            e.preventDefault();
            setCollapse(!collapse);
          }}
        >
          Prices
        </CButton>
        <CCollapse show={collapse}>
          <CCardBody>
            <div
              className="table-responsive custTable"
              style={{
                maxHeight: "600px",
                overflowY: "auto",
              }}
            >
              {error ? (
                msg ? (
                  <p className="text-center badge badge-success">Data Saved</p>
                ) : (
                  <p className="text-center badge badge-danger">Data failed</p>
                )
              ) : null}
              <form className="form-group" onSubmit={props.handleSubmit}>
                <table className="table table-responsive-lg">
                  <BundlePrices
                    pricesData={pricesData}
                    setPricesData={setPricesData}
                  />
                </table>

                <input
                  type="submit"
                  value="Update"
                  className="btn btn-success w-100"
                />
              </form>
            </div>
          </CCardBody>
        </CCollapse>
      </CCard>
    </div>
  );
}
