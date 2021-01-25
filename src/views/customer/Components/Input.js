import React from "react";

export default function Input(props) {
  const id = props.id;
  return (
    <div className="form-group">
      <input
        type={props.type}
        className="form-control"
        id={id}
        name={id}
        placeholder={props.placeholder}
        autoComplete="off"
        style={inputStyle}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
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
