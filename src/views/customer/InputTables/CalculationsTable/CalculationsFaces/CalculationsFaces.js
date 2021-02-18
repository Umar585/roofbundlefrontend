import React, { useState, useEffect } from "react";

export default function CalculationsFaces(props) {
  const items = props.items;
  const item = props.item;
  const pricesData = props.pricesData;
  const getPitchValue = props.getPitchValue;
  const getBasicInstallValue = props.getBasicInstallValue;

  return (
    <div className="row" key={props.keys}>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="pitchFactor"
          label="Pitch Factor"
          disabled={true}
          value={getPitchValue(item.pitch)}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="basicInstallCost"
          label="Basic Install Cost"
          sideLabel="$"
          disabled={true}
          value={getBasicInstallValue(item.pitch)}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="bundles"
          label="Bundles"
          rightSideLabel="Bundles"
          disabled={true}
          value={(
            ((getPitchValue(item.pitch) * item.lengthGrnd * item.width * 1.06) /
              100) *
              3 +
            item.valleyRM * 0.06
          ).toFixed(1)}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="gableActual"
          label="Gable (Roof)"
          rightSideLabel="Lnft"
          disabled={true}
          value={(getPitchValue(item.pitch) * item.gableGrnd).toFixed(0)}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="starterLabour"
          label="Starter Labour"
          sideLabel="$"
          disabled={true}
          value={(
            (getBasicInstallValue(item.pitch) *
              (parseFloat(item.eave) + parseFloat(item.gableGrnd))) /
            60
          ).toFixed(2)}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="cappingLabour"
          label="Capping Labour"
          sideLabel="$"
          disabled={true}
          value={(
            (getBasicInstallValue(item.pitch) * (item.hipRM + item.ridge)) /
            25
          ).toFixed(2)}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="shingleLabourCost"
          label="Shingle Labour Cost"
          sideLabel="$"
          disabled={true}
          value={
            item.newConst === "true"
              ? (
                  (getBasicInstallValue(item.pitch) - 6) *
                  (((getPitchValue(item.pitch) *
                    parseFloat(item.lengthGrnd) *
                    parseFloat(item.width) *
                    1.06) /
                    100) *
                    3 +
                    parseFloat(item.valleyRM) * 0.06)
                ).toFixed(2)
              : (
                  getBasicInstallValue(item.pitch) *
                  (((getPitchValue(item.pitch) *
                    parseFloat(item.lengthGrnd) *
                    parseFloat(item.width) *
                    1.06) /
                    100) *
                    3 +
                    parseFloat(item.valleyRM) * 0.06)
                ).toFixed(2)
          }
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="rooftopDeliveryCost"
          label="Rooftop Delivery Cost"
          sideLabel="$"
          disabled={true}
          value={
            item.roofTop === "true" && pricesData.roofTopCost != ""
              ? (
                  pricesData.roofTopCost *
                    ((getPitchValue(item.pitch) *
                      item.lengthGrnd *
                      item.width *
                      1.06) /
                      100) *
                    3 +
                  item.valleyRM * 0.06
                ).toFixed(2)
              : 0
          }
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="carryUpLabourCost"
          label="Carry up Labour Cost"
          sideLabel="$"
          disabled={true}
          value={
            item.roofTop === "false"
              ? item.stories === "1"
                ? (
                    1.5 *
                    (((getPitchValue(item.pitch) *
                      item.lengthGrnd *
                      item.width *
                      1.06) /
                      100) *
                      3 +
                      item.valleyRM * 0.06)
                  ).toFixed(2)
                : (
                    2.5 *
                    (((getPitchValue(item.pitch) *
                      item.lengthGrnd *
                      item.width *
                      1.06) /
                      100) *
                      3 +
                      item.valleyRM * 0.06)
                  ).toFixed(2)
              : 0
          }
        />
      </div>
    </div>
  );
}

const CustomInput = (props) => {
  return (
    <div className="mt-2">
      <label
        htmlFor={props.id}
        style={{ marginBottom: "-1px", marginTop: "5px" }}
      >
        {props.label}
      </label>
      <div className="input-group mb-2">
        {props.sideLabel ? (
          <div className="input-group-prepend">
            <div
              className="input-group-text"
              style={
                props.disabled
                  ? {
                      backgroundColor: "#d8dbe0",
                    }
                  : {
                      backgroundColor: "#fff",
                    }
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
          placeholder="0"
          autoComplete="off"
          style={props.sideLabel ? moneyInputStyle : inputStyle}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
        />
        {props.rightSideLabel ? (
          <div className="input-group-prepend right-rounded">
            <div
              className="input-group-text"
              style={
                props.disabled
                  ? {
                      backgroundColor: "#d8dbe0",
                      borderLeft: "none",
                    }
                  : { backgroundColor: "#fff", borderLeft: "none" }
              }
            >
              {props.rightSideLabel}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
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
