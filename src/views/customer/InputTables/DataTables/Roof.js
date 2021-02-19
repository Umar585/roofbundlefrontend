import React, { useState, useRef } from "react";
import { CButton, CCollapse } from "@coreui/react";
import RoofFaces from "./RoofFaces/RoofFaces";
//style sheet
import "../style.scss";

export default function Roof(props) {
  const items = props.items;
  const load = props.load;
  const form = props.form;
  const setForm = props.setForm;
  const [accordion, setAccordion] = useState(0);
  const topRef = useRef(null);
  const removeRoofFace = props.removeRoofFace;
  const [error, setError] = useState(false);
  const [tempVal, setTempVal] = useState({
    lengthGrnd: "",
    width: "",
    eave: "",
    gableGrnd: "",
    valleyRM: "",
    hipRM: "",
    ridge: "",
    wall: "",
    chimney: "",
  });

  const CheckFields = () => {
    let isValid = true;
    if (
      form.pitch === 0 &&
      form.stories === 0 &&
      form.roofTop === false &&
      form.bin === false &&
      form.newConst === false &&
      form.lengthGrnd === "" &&
      form.width === "" &&
      form.eave === "" &&
      form.gableGrnd === "" &&
      form.valleyRM === "" &&
      form.hipRM === "" &&
      form.ridge === "" &&
      form.wall === "" &&
      form.chimney === ""
    ) {
      isValid = false;
    }
    return isValid;
  };
  const isValid = CheckFields();
  //add new row
  const AddArray = (e) => {
    e.preventDefault();

    if (isValid) {
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

      const lengthGrnd = setToZero(form.lengthGrnd);
      const width = setToZero(form.width);
      const eave = setToZero(form.eave);
      const gableGrnd = setToZero(form.gableGrnd);
      const valleyRM = setToZero(form.valleyRM);
      const hipRM = setToZero(form.hipRM);
      const ridge = setToZero(form.ridge);
      const wall = setToZero(form.wall);
      const chimney = setToZero(form.chimney);

      const lengthGrndInc = setToZero(tempVal.lengthGrnd);
      const widthInc = setToZero(tempVal.width);
      const eaveInc = setToZero(tempVal.eave);
      const gableGrndInc = setToZero(tempVal.gableGrnd);
      const valleyRMInc = setToZero(tempVal.valleyRM);
      const hipRMInc = setToZero(tempVal.hipRM);
      const ridgeInc = setToZero(tempVal.ridge);
      const wallInc = setToZero(tempVal.wall);
      const chimneyInc = setToZero(tempVal.chimney);

      item.push({
        pitch: form.pitch,
        stories: form.stories,
        roofTop: rT,
        bin: b,
        newConst: nC,
        lengthGrnd: lengthGrnd,
        width: width,
        eave: eave,
        gableGrnd: gableGrnd,
        valleyRM: valleyRM,
        hipRM: hipRM,
        ridge: ridge,
        wall: wall,
        chimney: chimney,

        lengthGrndInc: lengthGrndInc,
        widthInc: widthInc,
        eaveInc: eaveInc,
        gableGrndInc: gableGrndInc,
        valleyRMInc: valleyRMInc,
        hipRMInc: hipRMInc,
        ridgeInc: ridgeInc,
        wallInc: wallInc,
        chimneyInc: chimneyInc,
      });

      setForm({
        pitch: 0,
        stories: 0,
        roofTop: false,
        bin: false,
        newConst: false,
        lengthGrnd: "",
        width: "",
        eave: "",
        gableGrnd: "",
        valleyRM: "",
        hipRM: "",
        ridge: "",
        wall: "",
        chimney: "",
      });
      setTempVal({
        lengthGrnd: "",
        width: "",
        eave: "",
        gableGrnd: "",
        valleyRM: "",
        hipRM: "",
        ridge: "",
        wall: "",
        chimney: "",
      });

      topRef.current.focus();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };

  return (
    <div>
      {load ? (
        <div className="text-center">
          <span>Loading...</span>
        </div>
      ) : (
        <>
          {items.map((item, index) => {
            return (
              <div key={index}>
                <h5
                  className="customersTable_sliderBtn border w-100 text-center p-1"
                  onClick={() =>
                    setAccordion(accordion === index ? null : index)
                  }
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
              </div>
            );
          })}{" "}
        </>
      )}

      <div className="row no-gutters">
        <div className="col-12 mt-2">
          <h6>Roof Face {items.length + 1}</h6>
        </div>
        <div className="col-6 gb-pr">
          <div className="mt-2">
            <select
              ref={topRef}
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
        <div className="col-6 gb-pl">
          <div className="mt-2">
            <select
              className="form-control"
              id="stories"
              name="stories"
              style={inputStyle}
              value={form.stories}
              onChange={(e) =>
                setForm({
                  ...form,
                  stories: e.target.value,
                })
              }
            >
              <option value="">Stories</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className="col-6 gb-pr mt-2">
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
        <div className="col-6 mt-2 gb-pl">
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
        <div className="col-12">
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
        <div className="col-12">
          <CustomInput
            type="number"
            id="lengthGrnd"
            label="Length (Ground)"
            rightSideLabel="Ft-In"
            value={form.lengthGrnd}
            onChange={(e) =>
              setForm({
                ...form,
                lengthGrnd: e.target.value,
              })
            }
            idInc="lengthGrndInc"
            valueInc={tempVal.lengthGrnd}
            onChangeInc={(e) => {
              setTempVal({
                ...tempVal,
                lengthGrnd: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="width"
            label="Width"
            rightSideLabel="Ft.In"
            value={form.width}
            onChange={(e) =>
              setForm({
                ...form,
                width: e.target.value,
              })
            }
            idInc="widthInc"
            valueInc={tempVal.width}
            onChangeInc={(e) => {
              setTempVal({
                ...tempVal,
                width: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="eave"
            label="Eaves"
            rightSideLabel="Ft.In"
            value={form.eave}
            onChange={(e) => setForm({ ...form, eave: e.target.value })}
            idInc="eaveInc"
            valueInc={tempVal.eave}
            onChangeInc={(e) => {
              setTempVal({
                ...tempVal,
                eave: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="gableGrnd"
            label="Gable (Ground)"
            rightSideLabel="Ft.In"
            value={form.gableGrnd}
            onChange={(e) =>
              setForm({
                ...form,
                gableGrnd: e.target.value,
              })
            }
            idInc="gableGrndInc"
            valueInc={tempVal.gableGrnd}
            onChangeInc={(e) => {
              setTempVal({
                ...tempVal,
                gableGrnd: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="valleyRM"
            label="Valley (Roof Measure)"
            rightSideLabel="Ft.In"
            value={form.valleyRM}
            onChange={(e) =>
              setForm({
                ...form,
                valleyRM: e.target.value,
              })
            }
            idInc="valleyRMInc"
            valueInc={tempVal.valleyRM}
            onChangeInc={(e) => {
              setTempVal({
                ...tempVal,
                valleyRM: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="hipRM"
            label="Hip (Roof Measure)"
            rightSideLabel="Ft.In"
            value={form.hipRM}
            onChange={(e) =>
              setForm({
                ...form,
                hipRM: e.target.value,
              })
            }
            idInc="hipRMInc"
            valueInc={tempVal.hipRM}
            onChangeInc={(e) => {
              setTempVal({
                ...tempVal,
                hipRM: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="ridge"
            label="Ridge"
            rightSideLabel="Ft.In"
            value={form.ridge}
            onChange={(e) =>
              setForm({
                ...form,
                ridge: e.target.value,
              })
            }
            idInc="ridgeInc"
            valueInc={tempVal.ridge}
            onChangeInc={(e) => {
              setTempVal({
                ...tempVal,
                ridge: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="wall"
            label="Wall"
            rightSideLabel="Ft.In"
            value={form.wall}
            onChange={(e) => setForm({ ...form, wall: e.target.value })}
            idInc="wallInc"
            valueInc={tempVal.wall}
            onChangeInc={(e) => {
              setTempVal({
                ...tempVal,
                wall: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="chimney"
            label="Chimney"
            rightSideLabel="Ft.In"
            value={form.chimney}
            onChange={(e) =>
              setForm({
                ...form,
                chimney: e.target.value,
              })
            }
            idInc="chimneyInc"
            valueInc={tempVal.chimney}
            onChangeInc={(e) => {
              setTempVal({
                ...tempVal,
                chimney: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12 mt-4">
          {error ? (
            <p className="text-center small text-danger">
              Please enter in at least 1 field
            </p>
          ) : null}
          <CButton className="btn w-100" style={btnStyle} onClick={AddArray}>
            Complete Roof Face {items.length + 1}
          </CButton>
        </div>
      </div>
    </div>
  );
}

const setToZero = (val) => {
  let newVal;
  if (val === "" || val === undefined) {
    newVal = "0";
  } else {
    newVal = val;
  }
  return newVal;
};

/*
const inchConverter = (val) => {
  let newVal = 0;
  if (val === "1") {
    newVal = 0.0833;
  } else if (val === "2") {
    newVal = 0.1666;
  } else if (val === "3") {
    newVal = 0.25;
  } else if (val === "4") {
    newVal = 0.3333;
  } else if (val === "5") {
    newVal = 0.4166;
  } else if (val === "6") {
    newVal = 0.5;
  } else if (val === "7") {
    newVal = 0.5833;
  } else if (val === "8") {
    newVal = 0.66;
  } else if (val === "9") {
    newVal = 0.75;
  } else if (val === "10") {
    newVal = 0.8333;
  } else if (val === "12") {
    newVal = 0.9166;
  }
  return newVal;
};
*/
const CustomInput = (props) => {
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-6">
          <input
            type={props.type}
            className="form-control"
            id={props.id}
            name={props.id}
            maxLength="4"
            placeholder="Ft"
            autoComplete="off"
            style={leftInputStyle}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
        <div className="col-6">
          <input
            type={props.type}
            className="form-control"
            id={props.idInc}
            maxLength="2"
            max="11"
            min="1"
            step="1"
            name={props.idInc}
            placeholder="In"
            autoComplete="off"
            style={rightInputStyle}
            value={props.valueInc}
            onChange={props.onChangeInc}
          />
        </div>
        <div className="col-12 text-center">
          <span className="small">{props.label}</span>
        </div>
      </div>
    </div>
  );
};

const CustomCheckBox = (props) => {
  return (
    <label
      className={
        props.checked ? "btn text-white w-100" : "btn text-white w-100"
      }
      style={
        props.checked
          ? { backgroundColor: "#414141" }
          : { backgroundColor: "darkgray" }
      }
    >
      {props.label}
      <input
        type="checkbox"
        hidden
        id={props.id}
        name={props.id}
        checked={props.checked}
        onChange={props.onChange}
      />
    </label>
  );
};

const leftInputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  borderRight: "0px",
  borderRadius: "0.25rem 0px 0px 0.25rem",
};
const rightInputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  borderRadius: "0px 0.25rem 0.25rem 0px",
};
const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};
const btnStyle = {
  outline: "none",
  boxShadow: "none",
  border: "none",
  backgroundColor: "#e60029",
  color: "#fff",
};
