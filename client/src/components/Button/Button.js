import React from "react";
import "./Button.css";
import "../public/javascripts/canvas.js";
import "../public/javascripts/redrawCanvas.js";
import "../public/javascripts/saveImage.js";

const Button = props => (
  <button
    onClick={props.onClick}
    className={`brushSizes ${props["data-value"]}`}
    {...props}
  />
);

export default Button;
