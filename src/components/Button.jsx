import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Button = ({ bgColor, color, size, icon, borderRadius }) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
      type="button"
      style={ { background: bgColor, color, borderRadius } }
      onClick={ () => setIsClicked(initialState) }
      className={ `text-${size} p-3 hover:drop-shadow-xl` }
    >
      { icon }
    </button>
  );
};

export default Button;
