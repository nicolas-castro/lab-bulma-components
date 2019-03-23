import React from "react";

const FormField = (props) => {
  return (
  <div className="field">
    <label className="label">{props.name}</label>
    <div className="control">
      <input className="input" type="text" placeholder={props.placeholder} />
    </div>
  </div>
  );
}
export default FormField;