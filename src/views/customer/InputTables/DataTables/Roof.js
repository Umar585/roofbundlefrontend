import React, { useState, useRef } from "react";
import { CButton, CCollapse } from "@coreui/react";
import RoofFaces from "./RoofFaces/RoofFaces";
//style sheet
import "../style.scss";

export default function Roof(props) {
  const items = props.items;
  const load = props.load;
  //const form = props.form;
  //const setForm = props.setForm;
  const [form, setForm] = useState([]);
  const [formErr, setFormErr] = useState({
    lengthGrnd: false,
    width: false,
    eave: false,
    gableGrnd: false,
    valleyRM: false,
    hipRM: false,
    ridge: false,
    wall: false,
    chimney: false,

    lengthGrndInc: false,
    widthInc: false,
    eaveInc: false,
    gableGrndInc: false,
    valleyRMInc: false,
    hipRMInc: false,
    ridgeInc: false,
    wallInc: false,
    chimneyInc: false,
  });
  const [accordion, setAccordion] = useState(null);
  const topRef = useRef(null);
  const removeRoofFace = props.removeRoofFace;
  const [error, setError] = useState(false);
  const expression = /^-?[0-9]+$/;

  const ftFormFields = (field) => {
    let isValid = true;
    if (field === "" || field === undefined) {
      return isValid;
    } else if (field !== "" || field !== undefined) {
      if (!expression.test(field) || field > 999 || field < 0) {
        isValid = false;
      }
    }
    return isValid;
  };
  const incFormFields = (field) => {
    let isValid = true;
    if (field === "" || field === undefined) {
      return isValid;
    } else if (field !== "" || field !== undefined) {
      if (!expression.test(field) || field > 11 || field < 0) {
        isValid = false;
      }
    }
    return isValid;
  };

  function handleEnter(event) {
    if (event.keyCode === 13) {
      const inputs = event.target.form;
      const index = Array.prototype.indexOf.call(inputs, event.target);
      inputs.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  //add new row
  const AddArray = (e) => {
    e.preventDefault();

    if (
      form.pitch === 0 &&
      form.stories === 0 &&
      form.roofTop === false &&
      form.bin === false &&
      form.newConst === false &&
      form.measureType === "" &&
      form.totalSqFt === "" &&
      form.eave === "" &&
      form.gableGrnd === "" &&
      form.valleyRM === "" &&
      form.hipRM === "" &&
      form.ridge === "" &&
      form.wall === "" &&
      form.chimney === ""
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    } else if (form.totalSqFt === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    } else if (!ftFormFields(form.eave)) {
      setFormErr({ eave: true });
    } else if (!incFormFields(form.eaveInc)) {
      setFormErr({ eaveInc: true });
    } else if (!ftFormFields(form.gableGrnd)) {
      setFormErr({ gableGrnd: true });
    } else if (!incFormFields(form.gableGrndInc)) {
      setFormErr({ gableGrndInc: true });
    } else if (!ftFormFields(form.valleyRM)) {
      setFormErr({ valleyRM: true });
    } else if (!incFormFields(form.valleyRMInc)) {
      setFormErr({ valleyRMInc: true });
    } else if (!ftFormFields(form.hipRM)) {
      setFormErr({ hipRM: true });
    } else if (!incFormFields(form.hipRMInc)) {
      setFormErr({ hipRMInc: true });
    } else if (!ftFormFields(form.ridge)) {
      setFormErr({ ridge: true });
    } else if (!incFormFields(form.ridgeInc)) {
      setFormErr({ ridgeInc: true });
    } else if (!ftFormFields(form.wall)) {
      setFormErr({ wall: true });
    } else if (!incFormFields(form.wallInc)) {
      setFormErr({ wallInc: true });
    } else if (!ftFormFields(form.chimney)) {
      setFormErr({ chimney: true });
    } else if (!incFormFields(form.chimneyInc)) {
      setFormErr({ chimneyInc: true });
    } else {
      setFormErr(false);

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

      const totalSqFt = setToZero(form.totalSqFt);
      const measureType = setToZero(form.measureType);
      const eave = setToZero(form.eave);
      const gableGrnd = setToZero(form.gableGrnd);
      const valleyRM = setToZero(form.valleyRM);
      const hipRM = setToZero(form.hipRM);
      const ridge = setToZero(form.ridge);
      const wall = setToZero(form.wall);
      const chimney = setToZero(form.chimney);

      const eaveInc = setToZero(form.eaveInc);
      const gableGrndInc = setToZero(form.gableGrndInc);
      const valleyRMInc = setToZero(form.valleyRMInc);
      const hipRMInc = setToZero(form.hipRMInc);
      const ridgeInc = setToZero(form.ridgeInc);
      const wallInc = setToZero(form.wallInc);
      const chimneyInc = setToZero(form.chimneyInc);

      item.push({
        pitch: form.pitch,
        stories: form.stories,
        roofTop: rT,
        bin: b,
        newConst: nC,
        measureType: measureType,
        totalSqFt: totalSqFt,
        eave: eave,
        gableGrnd: gableGrnd,
        valleyRM: valleyRM,
        hipRM: hipRM,
        ridge: ridge,
        wall: wall,
        chimney: chimney,

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
        measureType: "",
        totalSqFt: "",
        eave: "",
        gableGrnd: "",
        valleyRM: "",
        hipRM: "",
        ridge: "",
        wall: "",
        chimney: "",
        lengthGrndInc: "",
        widthInc: "",
        eaveInc: "",
        gableGrndInc: "",
        valleyRMInc: "",
        hipRMInc: "",
        ridgeInc: "",
        wallInc: "",
        chimneyInc: "",
      });

      topRef.current.focus();
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
                <h6
                  className="customersTable_sliderBtn border w-100 text-center p-1"
                  onClick={() => {
                    setAccordion(accordion === index ? null : index);
                    console.log("MYINDEX", index);
                    console.log("MYACCORDIAN", accordion);
                  }}
                >
                  Roof Face {index + 1}
                </h6>
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
      {items.length !== 0 ? <div className="mt-4"></div> : null}

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
        <div className="col-6 gb-pr mt-2">
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
        <div className="col-6 gb-pl">
          <div className="mt-2">
            <select
              className="form-control"
              id="measureType"
              name="measureType"
              style={selectStyle}
              value={form.measureType}
              onChange={(e) =>
                setForm({
                  ...form,
                  measureType: e.target.value,
                })
              }
            >
              <option value="">Measure Type</option>
              <option value="Ground Measure">Ground Measure</option>
              <option value="Roof Measure">Roof Measure</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="totalsquare"
            label={`Total Square Footage of Roof Face ${items.length + 1}`}
            error={formErr.totalSqFt}
            value={form.totalSqFt}
            onChange={(e) => {
              setForm({ ...form, totalSqFt: e.target.value });
            }}
            single={true}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="eave"
            label="Eaves"
            error={formErr.eave}
            errorInc={formErr.eaveInc}
            value={form.eave}
            onChange={(e) => setForm({ ...form, eave: e.target.value })}
            idInc="eaveInc"
            valueInc={form.eaveInc}
            onChangeInc={(e) => {
              setForm({
                ...form,
                eaveInc: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="gableGrnd"
            label="Gable"
            error={formErr.gableGrnd}
            errorInc={formErr.gableGrndInc}
            value={form.gableGrnd}
            onChange={(e) =>
              setForm({
                ...form,
                gableGrnd: e.target.value,
              })
            }
            idInc="gableGrndInc"
            valueInc={form.gableGrndInc}
            onChangeInc={(e) => {
              setForm({
                ...form,
                gableGrndInc: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="valleyRM"
            label="Valley"
            error={formErr.valleyRM}
            errorInc={formErr.valleyRMInc}
            value={form.valleyRM}
            onChange={(e) =>
              setForm({
                ...form,
                valleyRM: e.target.value,
              })
            }
            idInc="valleyRMInc"
            valueInc={form.valleyRMInc}
            onChangeInc={(e) => {
              setForm({
                ...form,
                valleyRMInc: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="hipRM"
            label="Hip"
            error={formErr.hipRM}
            errorInc={formErr.hipRMInc}
            value={form.hipRM}
            onChange={(e) =>
              setForm({
                ...form,
                hipRM: e.target.value,
              })
            }
            idInc="hipRMInc"
            valueInc={form.hipRMInc}
            onChangeInc={(e) => {
              setForm({
                ...form,
                hipRMInc: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="ridge"
            label="Ridge"
            error={formErr.ridge}
            errorInc={formErr.ridgeInc}
            value={form.ridge}
            onChange={(e) =>
              setForm({
                ...form,
                ridge: e.target.value,
              })
            }
            idInc="ridgeInc"
            valueInc={form.ridgeInc}
            onChangeInc={(e) => {
              setForm({
                ...form,
                ridgeInc: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="wall"
            label="Wall to Roof Flashing"
            error={formErr.wall}
            errorInc={formErr.wallInc}
            value={form.wall}
            onChange={(e) => setForm({ ...form, wall: e.target.value })}
            idInc="wallInc"
            valueInc={form.wallInc}
            onChangeInc={(e) => {
              setForm({
                ...form,
                wallInc: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="chimney"
            label="Chimney Flashing"
            error={formErr.chimney}
            errorInc={formErr.chimneyInc}
            value={form.chimney}
            onChange={(e) =>
              setForm({
                ...form,
                chimney: e.target.value,
              })
            }
            idInc="chimneyInc"
            valueInc={form.chimneyInc}
            onChangeInc={(e) => {
              setForm({
                ...form,
                chimneyInc: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-12 mt-4">
          {error ? (
            <p className="text-center small text-danger">
              Please enter in at least Total Square Footage field
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

const CustomInput = (props) => {
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-12 mt-2">
          <span className="p2">{props.label}</span>
        </div>
        <div className={!props.single ? "col-6" : "col-12"}>
          <input
            type={props.type}
            className="form-control"
            id={props.id}
            name={props.id}
            maxLength="4"
            placeholder={!props.single ? "Ft" : "Sq. Ft."}
            autoComplete="off"
            style={
              !props.single
                ? props.error
                  ? leftInputErrorStyle
                  : leftInputStyle
                : props.error
                ? singleInputErrorStyle
                : singleInputStyle
            }
            value={props.value}
            onChange={props.onChange}
          />
        </div>
        {!props.single ? (
          <div className="col-6">
            <input
              type={props.type}
              className="form-control"
              id={props.idInc}
              maxLength="2"
              max="11"
              min="1"
              name={props.idInc}
              placeholder="In"
              autoComplete="off"
              style={props.errorInc ? rightInputErrorStyle : rightInputStyle}
              value={props.valueInc}
              onChange={props.onChangeInc}
            />
          </div>
        ) : null}
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
          ? { backgroundColor: "#414141", fontSize: "13px" }
          : { backgroundColor: "darkgray", fontSize: "13px" }
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
const singleInputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  borderRadius: "0px 0.25rem 0.25rem 0px",
};
const singleInputErrorStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid #e60029",
  borderRadius: "0px 0.25rem 0.25rem 0px",
};
const leftInputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  borderRight: "0px",
  borderRadius: "0.25rem 0px 0px 0.25rem",
};
const leftInputErrorStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid #e60029",
  borderRight: "0px",
  borderRadius: "0.25rem 0px 0px 0.25rem",
};
const rightInputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  borderRadius: "0px 0.25rem 0.25rem 0px",
};
const rightInputErrorStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid #e60029",
  borderRadius: "0px 0.25rem 0.25rem 0px",
};

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};
const selectStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  height: "32px",
  fontSize: "13px",
};
const btnStyle = {
  outline: "none",
  boxShadow: "none",
  border: "none",
  backgroundColor: "#e60029",
  color: "#fff",
};
