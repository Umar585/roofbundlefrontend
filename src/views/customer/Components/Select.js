import React from "react";

export default function Select(props) {
  const items = props.array;
  const id = props.id;
  return (
    <div className="form-group">
      <select
        className="form-control"
        id={id}
        name={id}
        style={inputStyle}
        value={props.value}
        onChange={props.onChange}
      >
        <option value="">{props.title}</option>
        {items.map((i, index) => {
          return (
            <option key={index} value={i}>
              {i}
            </option>
          );
        })}
      </select>
    </div>
  );
}

const inputStyle = {
  margin: "2px",
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};
