import React, { useState } from "react";
import { CButton, CCollapse } from "@coreui/react";
import RoofFaces from "./RoofFaces/RoofFaces";
//style sheet
import "../style.scss";
//icons
import * as AiIcon from "react-icons/ai";

export default function Roof(props) {
  const isLoading = props.isLoading;
  const items = props.items;
  const form = props.form;
  const setForm = props.setForm;
  const [accordion, setAccordion] = useState(0);
  //const AddArray = props.AddArray;

  const removeRoofFace = props.removeRoofFace;

  //add new row
  const AddArray = (e) => {
    e.preventDefault();

    let item = items;
    let rT = "";
    let b = "";
    let nC = "";

    if (form.roofTop === true) {
      rT = "true";
    } else {
      rT = "false";
    }

    if (form.bin === true) {
      b = "true";
    } else {
      b = "false";
    }

    if (form.newConst === true) {
      nC = "true";
    } else {
      nC = "false";
    }

    item.push({
      pitch: form.pitch,
      stories: form.stories,
      roofTop: rT,
      bin: b,
      newConst: nC,
      lengthGrnd: form.lengthGrnd,
      width: form.width,
      eave: form.eave,
      gableGrnd: form.gableGrnd,
      valleyRM: form.valleyRM,
      hipRM: form.hipRM,
      ridge: form.ridge,
      wall: form.wall,
      chimney: form.chimney,
    });

    setForm({
      pitch: 0,
      stories: 0,
      roofTop: false,
      bin: false,
      newConst: false,
      lengthGrnd: 0,
      width: 0,
      eave: 0,
      gableGrnd: 0,
      valleyRM: 0,
      hipRM: 0,
      ridge: 0,
      wall: 0,
      chimney: 0,
    });
  };

  return (
    <div>
      {items.map((item, index) => {
        return (
          <>
            <h5
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === index ? null : index)}
            >
              Roof Face {index + 1}
            </h5>
            <CCollapse show={accordion === index}>
              <RoofFaces
                item={item}
                keys={index}
                onClick={(e) => {
                  e.preventDefault();
                  removeRoofFace(index);
                }}
              />
            </CCollapse>
          </>
        );
      })}
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="mt-2">
            <label
              htmlFor="pitch"
              style={{ marginBottom: "-1px", marginTop: "5px" }}
            >
              Pitch
            </label>
            <select
              className="form-control"
              id="pitch"
              name="pitch"
              style={inputStyle}
              value={form.pitch}
              onChange={(e) =>
                setForm({
                  ...form,
                  pitch: e.target.value,
                })
              }
            >
              <option value="">Pitch</option>
              <option value="1">1/12</option>
              <option value="2">2/12</option>
              <option value="3">3/12</option>
              <option value="4">4/12</option>
              <option value="5">5/12</option>
              <option value="6">6/12</option>
              <option value="7">7/12</option>
              <option value="8">8/12</option>
              <option value="9">9/12</option>
              <option value="10">10/12</option>
              <option value="11">11/12</option>
              <option value="12">12/12</option>
              <option value="13">13/12</option>
              <option value="14">14/12</option>
              <option value="15">15/12</option>
              <option value="16">16/12</option>
              <option value="17">17/12</option>
              <option value="18">18/12</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="stories"
            label="Stories"
            value={form.stories}
            onChange={(e) =>
              setForm({
                ...form,
                stories: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-4">
          <CustomCheckBox
            id="roofTop"
            label="Roof Top"
            checked={form.roofTop}
            onChange={(e) =>
              setForm({
                ...form,
                roofTop: e.target.checked,
              })
            }
          />
        </div>
        <div className="col-12 col-md-4">
          <CustomCheckBox
            id="bin"
            label="Bin"
            checked={form.bin}
            onChange={(e) =>
              setForm({
                ...form,
                bin: e.target.checked,
              })
            }
          />
        </div>
        <div className="col-12 col-md-4">
          <CustomCheckBox
            id="newConst"
            label="New Construction"
            checked={form.newConst}
            onChange={(e) =>
              setForm({
                ...form,
                newConst: e.target.checked,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="lengthGrnd"
            label="Length (Ground)"
            value={form.lengthGrnd}
            onChange={(e) =>
              setForm({
                ...form,
                lengthGrnd: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="width"
            label="Width"
            value={form.width}
            onChange={(e) =>
              setForm({
                ...form,
                width: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="eave"
            label="Eaves"
            value={form.eave}
            onChange={(e) => setForm({ ...form, eave: e.target.value })}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="gableGrnd"
            label="Gable (Ground)"
            value={form.gableGrnd}
            onChange={(e) =>
              setForm({
                ...form,
                gableGrnd: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="valleyRM"
            label="Valley (Roof Measure)"
            value={form.valleyRM}
            onChange={(e) =>
              setForm({
                ...form,
                valleyRM: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="hipRM"
            label="Hip (Roof Measure)"
            value={form.hipRM}
            onChange={(e) =>
              setForm({
                ...form,
                hipRM: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="ridge"
            label="Ridge"
            value={form.ridge}
            onChange={(e) =>
              setForm({
                ...form,
                ridge: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="wall"
            label="Wall"
            value={form.wall}
            onChange={(e) => setForm({ ...form, wall: e.target.value })}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="chimney"
            label="Chimney"
            value={form.chimney}
            onChange={(e) =>
              setForm({
                ...form,
                chimney: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 mt-4">
          <CButton className="btn btn-info w-100" onClick={AddArray}>
            Add Row +
          </CButton>
        </div>
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
        placeholder="0"
        autoComplete="off"
        style={inputStyle}
        value={props.value}
        onChange={props.onChange}
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
        onChange={props.onChange}
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
