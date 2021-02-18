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
    <div className="row" key={props.keys}>
      <div className="col-12 text-right">
        <span className="text-danger" onClick={props.onClick}>
          Delete <FiIcon.FiTrash />
        </span>
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="pitch"
          label="Pitch"
          value={item.pitch}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="stories"
          label="Stories"
          value={item.stories}
        />
      </div>
      <div className="col-12 col-md-4">
        <CustomCheckBox
          id="roofTop"
          label={`Roof Top ${item.roofTop}`}
          checked={roofTop}
        />
      </div>
      <div className="col-12 col-md-4">
        <CustomCheckBox id="bin" label="Bin" checked={bin} />
      </div>
      <div className="col-12 col-md-4">
        <CustomCheckBox
          id="newConst"
          label="New Construction"
          checked={newConst}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="lengthGrnd"
          label="Length (Ground)"
          value={item.lengthGrnd}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="width"
          label="Width"
          value={item.width}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput type="number" id="eave" label="Eaves" value={item.eave} />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="gableGrnd"
          label="Gable (Ground)"
          value={item.gableGrnd}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="valleyRM"
          label="Valley (Roof Measure)"
          value={item.valleyRM}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="hipRM"
          label="Hip (Roof Measure)"
          value={item.hipRM}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="ridge"
          label="Ridge"
          value={item.ridge}
        />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput type="number" id="wall" label="Wall" value={item.wall} />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          type="number"
          id="chimney"
          label="Chimney"
          value={item.chimney}
        />
      </div>
      <div className="col-12">
        <hr className="w-100" />
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
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        name={props.id}
        placeholder="0.00"
        autoComplete="off"
        style={inputStyle}
        value={props.value}
        disabled="true"
      />
    </div>
  );
};

const CustomCheckBox = (props) => {
  return (
    <div className="form-check mt-2">
      <input
        type="checkbox"
        className="form-check-input"
        id={props.id}
        name={props.id}
        checked={props.checked}
        disabled="true"
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};
