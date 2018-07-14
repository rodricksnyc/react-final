import React from "react";
import "./Button.css";
import "/utils/public/javascripts/canvas.js";
import "/utils/public/javascripts/redrawCanvas.js";
import "/utils/public/javascripts/saveImage.js";

const Button = props => (
  <button
    onClick={props.onClick}
    className={`brushSizes ${props["data-value"]}`}
    {...props}
  />
);

export default Button;
