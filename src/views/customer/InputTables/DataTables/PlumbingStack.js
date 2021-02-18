import React from "react";
//style sheet
import "../style.scss";

export default function PlumbingStack(props) {
  const form = props.form;
  const setForm = props.setForm;
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="reSeal"
            label="Re-Seal"
            value={form.reSeal}
            onChange={(e) =>
              setForm({
                ...form,
                reSeal: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="conversions"
            label="Conversions"
            value={form.conversions}
            onChange={(e) =>
              setForm({
                ...form,
                conversions: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="oneMat"
            label="1.5'' Mat"
            value={form.oneMat}
            onChange={(e) =>
              setForm({
                ...form,
                oneMat: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="twoMat"
            label="2'' Mat"
            value={form.twoMat}
            onChange={(e) =>
              setForm({
                ...form,
                twoMat: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="threeMat"
            label="3'' Mat"
            value={form.threeMat}
            onChange={(e) =>
              setForm({
                ...form,
                threeMat: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="fourMat"
            label="4'' Mat"
            value={form.fourMat}
            onChange={(e) =>
              setForm({
                ...form,
                fourMat: e.target.value,
              })
            }
          />
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

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};
