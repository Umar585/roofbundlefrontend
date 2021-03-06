import React from "react";
import * as FiIcon from "react-icons/fi";

export default function RoofFaces(props) {
  const item = props.item;

  let roofTop = false;
  let bin = false;
  let newConst = false;
  if (item.roofTop === "true") {
    roofTop = true;
  }
  if (item.bin === "true") {
    bin = true;
  }
  if (item.newConst === "true") {
    newConst = true;
  }

  return (
    <div className="row no-gutters mb-2" key={props.keys}>
      <div className="col-12 mb-2 text-right">
        <span className="text-danger" onClick={props.onClick}>
          Delete <FiIcon.FiTrash />
        </span>
      </div>
      <div className="col-6 gb-pr mb-2">
        <CustomInput
          type="text"
          id="itemPitch"
          label="Pitch"
          placeholder="Pitch"
          value={item.pitch}
        />
      </div>
      <div className="col-6 gb-pl mb-2">
        <CustomInput
          type="text"
          id="itemStories"
          label="Stories"
          value={item.stories}
        />
      </div>
      <div className="col-6 gb-pr">
        <CustomCheckBox id="itemRoofTop" label="Roof Top" checked={roofTop} />
      </div>
      <div className="col-6 gb-pl">
        <CustomCheckBox id="itemBin" label="Bin" checked={bin} />
      </div>
      <div className="col-6 gb-pr">
        <CustomCheckBox
          id="itemNewConst"
          label="New Construction"
          checked={newConst}
        />
      </div>
      <div className="col-6 gb-pl">
        <input
          type="text"
          disabled={true}
          className="form-control"
          id="measureType"
          name="measureType"
          placeholder="Measure Type"
          value={item.measureType}
          style={{ height: "32px", fontSize: "13px" }}
          readOnly={true}
        />
      </div>
      <div className="col-12">
        <CustomInput
          type="text"
          id="totalSqFt"
          placeholder="Total Square Footage"
          label="Total Square Footage"
          rightSideLabel="Ft.In"
          value={item.totalSqFt}
        />
      </div>
      <div className="col-12">
        <CustomInput
          type="text"
          id="itemEave"
          placeholder="Eave"
          label="Eave"
          rightSideLabel="Ft.In"
          value={`${item.eave}' - ${item.eaveInc}"`}
        />
      </div>
      <div className="col-12">
        <CustomInput
          type="text"
          id="itemGable"
          placeholder="Gable (Ground)"
          label="Gable (Ground)"
          rightSideLabel="Ft.In"
          value={`${item.gableGrnd}' - ${item.gableGrndInc}"`}
        />
      </div>
      <div className="col-12">
        <CustomInput
          type="text"
          id="itemValley"
          placeholder="Valley (Roof Measure)"
          label="Valley (Roof Measure)"
          rightSideLabel="Ft.In"
          value={`${item.valleyRM}' - ${item.valleyRMInc}"`}
        />
      </div>
      <div className="col-12">
        <CustomInput
          type="text"
          id="itemHip"
          placeholder="Hip (Roof Measure)"
          label="Hip (Roof Measure)"
          rightSideLabel="Ft.In"
          value={`${item.hipRM}' - ${item.hipRMInc}"`}
        />
      </div>
      <div className="col-12">
        <CustomInput
          type="text"
          id="itemRidge"
          placeholder="Ridge"
          label="Ridge"
          rightSideLabel="Ft.In"
          value={`${item.ridge}' - ${item.ridgeInc}"`}
        />
      </div>
      <div className="col-12">
        <CustomInput
          type="text"
          id="itemWall"
          placeholder="Wall"
          label="Wall"
          rightSideLabel="Ft.In"
          value={`${item.wall}' - ${item.wallInc}"`}
        />
      </div>
      <div className="col-12">
        <CustomInput
          type="text"
          id="itemChimney"
          placeholder="Chimney"
          label="Chimney"
          rightSideLabel="Ft.In"
          value={`${item.chimney}' - ${item.chimneyInc}"`}
        />
      </div>
    </div>
  );
}

const CustomInput = (props) => {
  return (
    <div className="mt-2">
      <span
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
      </span>
      <div className="input-group">
        {props.sideLabel ? (
          <div className="input-group-prepend">
            <div
              className="input-group-text"
              style={{ backgroundColor: "#d8dbe0" }}
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
          disabled={true}
          readOnly={true}
        />
        {props.rightSideLabel ? (
          <div className="input-group-prepend">
            <div
              className="input-group-text rounded-right"
              style={{
                backgroundColor: "#d8dbe0",
                borderLeft: "none",
              }}
            >
              {props.rightSideLabel}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const CustomCheckBox = (props) => {
  return (
    <label
      className="btn text-white w-100"
      style={
        props.checked
          ? {
              backgroundColor: "#414141",
              fontSize: "13px",
            }
          : { backgroundColor: "#8d8d8d", fontSize: "13px" }
      }
    >
      {props.label}
      <input
        type="checkbox"
        hidden
        disabled={true}
        id={props.id}
        name={props.id}
        checked={props.checked}
        onChange={props.onChange}
      />
    </label>
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
