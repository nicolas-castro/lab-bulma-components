import React from "react";

const FormField = (props) => {
  return (
  <div className="field column is-4 is-offset-one-quarter">
    <label className="label">{props.name}</label>
    <div className="control">
      <input className="input" type="text" placeholder={props.placeholder} />
    </div>
  </div>
  );
}
export default FormField;