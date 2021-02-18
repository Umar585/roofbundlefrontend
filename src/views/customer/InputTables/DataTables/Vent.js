import React from "react";
//style sheet
import "../style.scss";

export default function Vent(props) {
  const form = props.form;
  const setForm = props.setForm;
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="replace"
            label="Replace"
            value={form.replace}
            onChange={(e) =>
              setForm({
                ...form,
                replace: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="remove"
            label="Remove"
            value={form.remove}
            onChange={(e) =>
              setForm({
                ...form,
                remove: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="new"
            label="New"
            value={form.new}
            onChange={(e) => setForm({ ...form, new: e.target.value })}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="exhaust"
            label="Exhaust"
            value={form.exhaust}
            onChange={(e) =>
              setForm({
                ...form,
                exhaust: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="basicRidge"
            label="Basic Ridge"
            value={form.basicRidge}
            onChange={(e) =>
              setForm({
                ...form,
                basicRidge: e.target.value,
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
