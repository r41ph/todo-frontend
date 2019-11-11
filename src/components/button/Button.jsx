import React from "react";
import "./Button.scss";

const Button = ({ className, children, handleClick }) => {
  const onHandleClick = () => {
    handleClick();
  };
  return (
    <button
      onClick={onHandleClick}
      type="button"
      className={`todo-button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
