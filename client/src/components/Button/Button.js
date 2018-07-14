import React from "react";
import "./Button.css";

const Button = props => (
  <button
    onClick={props.onClick}
    className={`brushSizes ${props["data-value"]}`}
    {...props}
  />
);

export default Button;
