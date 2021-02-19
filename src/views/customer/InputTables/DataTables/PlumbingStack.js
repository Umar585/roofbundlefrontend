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
            idInc="reSealInc"
            valueInc={form.reSealInc}
            onChangeInc={(e) =>
              setForm({
                ...form,
                reSealInc: e.target.value,
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
            idInc="conversionsInc"
            valueInc={form.conversionsInc}
            onChangeInc={(e) =>
              setForm({
                ...form,
                conversionsInc: e.target.value,
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
            idInc="oneMatInc"
            valueInc={form.oneMatInc}
            onChangeInc={(e) =>
              setForm({
                ...form,
                oneMatInc: e.target.value,
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
            idInc="twoMatInc"
            valueInc={form.twoMatInc}
            onChangeInc={(e) =>
              setForm({
                ...form,
                twoMatInc: e.target.value,
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
            idInc="threeMatInc"
            valueInc={form.threeMatInc}
            onChangeInc={(e) =>
              setForm({
                ...form,
                threeMatInc: e.target.value,
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
            idInc="fourMatInc"
            valueInc={form.fourMatInc}
            onChangeInc={(e) =>
              setForm({
                ...form,
                fourMatInc: e.target.value,
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
