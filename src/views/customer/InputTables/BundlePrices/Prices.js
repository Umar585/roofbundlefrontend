import React, { useState } from "react";
import { CCard, CCardBody, CCollapse } from "@coreui/react";
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
      <h5
        className="customersTable_sliderBtn border w-100 text-center p-1"
        onClick={(e) => {
          e.preventDefault();
          setCollapse(!collapse);
        }}
      >
        Pricing
      </h5>
      <CCollapse show={collapse}>
        <CCard>
          <CCardBody>
            {error ? (
              msg ? (
                <p className="text-center badge badge-success">Data Saved</p>
              ) : (
                <p className="text-center badge badge-danger">Data failed</p>
              )
            ) : null}

            <form className="form-group" onSubmit={props.handleSubmit}>
              {/*<table className="table table-responsive-lg">*/}
              <BundlePrices
                pricesData={pricesData}
                setPricesData={setPricesData}
              />

              <input
                type="submit"
                value="Update Pricing"
                className="btn btn-success w-100 mt-3"
              />
            </form>
          </CCardBody>
        </CCard>
      </CCollapse>
    </div>
  );
}
