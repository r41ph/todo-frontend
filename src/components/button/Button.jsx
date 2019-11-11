import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  handleClick: PropTypes.func
};

const Button = ({ className, children, handleClick = () => {} }) => {
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

Button.propTypes = propTypes;

export default Button;
