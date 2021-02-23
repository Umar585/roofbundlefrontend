import React, { useState } from "react";
import { CCard, CCollapse } from "@coreui/react";

export default function ProjectPrice() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <form>
        <h6
          className="customersTable_sliderBtn border w-100 text-center p-1"
          onClick={(e) => {
            e.preventDefault();
            setCollapse(!collapse);
          }}
        >
          Project Pricing
        </h6>
        <CCollapse show={collapse}>
          <CCard className="p-2">
            <div className="row no-gutters">
              <div className="col-12 mt-2 text-center pt-2" style={headerStyle}>
                <h5>Project Pricing</h5>
              </div>
              <div className="col-12">
                <CustomInput
                  type="text"
                  id="materialsTotal"
                  sideLabel="$"
                  placeholder="Materials"
                  label="Materials"
                  bottomLabel="Material Costs including delivery"
                  value="11,140.22"
                  disabled={true}
                />
              </div>
              <div className="col-12">
                <CustomInput
                  type="text"
                  id="laboursTotal"
                  sideLabel="$"
                  placeholder="Labour"
                  label="Labour"
                  bottomLabel="Labour Costs"
                  value="9,140.22"
                  disabled={true}
                />
              </div>
              <div className="col-12">
                <CustomInput
                  type="text"
                  id="profits"
                  sideLabel="$"
                  placeholder="Profit"
                  label="Profit"
                  bottomLabel="Gross Profit"
                  value="5,140.22"
                  disabled={true}
                />
              </div>
              <div className="col-12">
                <CustomInput
                  type="text"
                  id="square"
                  sideLabel="$"
                  placeholder="$/Square"
                  label="$/Square"
                  bottomLabel="Price per square (100 sq.ft)"
                  value="181.22"
                />
              </div>
              <div className="col-12">
                <CustomInput
                  type="text"
                  id="profitIn"
                  sideLabel="$"
                  placeholder="Profit in %"
                  label="Profit in %"
                  bottomLabel="Gross profit in percentage"
                  value="25.22%"
                />
              </div>
              <div className="col-12">
                <CustomInput
                  type="text"
                  id="margin"
                  sideLabel="$"
                  placeholder="Margin %"
                  label="Margin %"
                  bottomLabel="Gross margin in percentage"
                  value="74.78%"
                />
              </div>
              <div className="col-12 mt-2">
                <input
                  type="submit"
                  style={btnStyle}
                  className="btn w-100 rounded-0"
                  value="Complete Pricing"
                />
              </div>
            </div>
          </CCard>
        </CCollapse>
      </form>
    </div>
  );
}

const CustomInput = (props) => {
  return (
    <div className="mt-2">
      <label
        className="p2"
        style={{
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          marginBottom: "-2px",
        }}
      >
        {props.label}
      </label>
      <div className="input-group">
        {props.sideLabel ? (
          <div className="input-group-prepend">
            <div
              className="input-group-text"
              style={
                props.disabled
                  ? { backgroundColor: "#d8dbe0" }
                  : { backgroundColor: "#fff" }
              }
            >
              {props.sideLabel}
            </div>
          </div>
        ) : null}
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          name={props.id}
          placeholder={props.placeholder}
          style={props.sideLabel ? moneyInputStyle : inputStyle}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
        />
        {props.rightSideLabel ? (
          <div className="input-group-prepend">
            <div
              className="input-group-text rounded-right"
              style={
                props.disabled
                  ? {
                      backgroundColor: "#d8dbe0",
                      borderLeft: "none",
                    }
                  : {
                      backgroundColor: "#fff",
                      borderLeft: "none",
                    }
              }
            >
              {props.rightSideLabel}
            </div>
          </div>
        ) : null}
      </div>
      {props.bottomLabel ? (
        <div className="text-center">
          <span
            className="small"
            style={{
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginBottom: "-2px",
            }}
          >
            {props.bottomLabel}
          </span>
        </div>
      ) : null}
    </div>
  );
};

const headerStyle = {
  backgroundColor: "#f4f4f4",
};

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};

const moneyInputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  borderLeft: "none",
  paddingLeft: "0px",
  marginLeft: "-11px",
};

const btnStyle = {
  outline: "none",
  boxShadow: "none",
  border: "none",
  backgroundColor: "#e60029",
  color: "#fff",
};
