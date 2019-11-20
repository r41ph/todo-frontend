import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ label = "", checked, onCheckboxChange }) => (
  <label className="todo-checkbox-label">
    <input
      type="checkbox"
      checked={checked}
      onChange={onCheckboxChange}
      className="todo-checkbox-input"
    />
    <span className="todo-checkbox-checkmark"></span>
    {label}
  </label>
);

export default Checkbox;
