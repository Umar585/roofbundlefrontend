import React from "react";

export default function Input(props) {
  return (
    <div className="form-group">
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        autoComplete="off"
        style={inputStyle}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

const inputStyle = {
  margin: "2px",
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};
