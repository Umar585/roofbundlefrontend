import React from "react";
//style sheet
import "../style.scss";

export default function Vent(props) {
  const form = props.form;
  const setForm = props.setForm;
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-6 gb-pr">
          <CustomSelect
            id="replace"
            label="Replace"
            side="R"
            value={form.replace}
            onChange={(e) =>
              setForm({
                ...form,
                replace: e.target.value,
              })
            }
          />
        </div>
        <div className="col-6 gb-pl">
          <CustomSelect
            id="remove"
            label="Remove"
            side="L"
            value={form.remove}
            onChange={(e) =>
              setForm({
                ...form,
                remove: e.target.value,
              })
            }
          />
        </div>
        <div className="col-6 gb-pr">
          <CustomSelect
            id="new"
            label="New"
            side="R"
            value={form.new}
            onChange={(e) => setForm({ ...form, new: e.target.value })}
          />
        </div>
        <div className="col-6 gb-pl">
          <CustomSelect
            id="exhaust"
            label="Exhaust"
            side="L"
            value={form.exhaust}
            onChange={(e) =>
              setForm({
                ...form,
                exhaust: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="basicRidge"
            label="Ridge Vent"
            value={form.basicRidge}
            onChange={(e) =>
              setForm({
                ...form,
                basicRidge: e.target.value,
              })
            }
            idInc="basicRidgeInc"
            valueInc={form.basicRidgeInc}
            onChangeInc={(e) =>
              setForm({
                ...form,
                basicRidgeInc: e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

const numberOfVent = [
  { val: "1" },
  { val: "2" },
  { val: "3" },
  { val: "4" },
  { val: "5" },
  { val: "6" },
  { val: "7" },
  { val: "8" },
  { val: "9" },
];

const CustomSelect = (props) => {
  return (
    <div className="mb-1">
      <select
        className="form-control"
        id={props.id}
        name={props.id}
        style={{
          outline: "none",
          boxShadow: "none",
          border: "1px solid lightgray",
          paddingRight: "10px",
        }}
        value={props.value}
        onChange={props.onChange}
      >
        <option value="">{props.label}</option>
        {numberOfVent.map((item, i) => {
          return (
            <option key={i} value={item.val}>
              {item.val}
            </option>
          );
        })}
      </select>
    </div>
  );
};

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
