import React from "react";

export default function CheckBox(props) {
  const id = props.id;
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={id}
        name={id}
        checked={props.checked}
        onChange={props.onChange}
      />
    </div>
  );
}
