"use strict";
import React from "react";

type IButton = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<IButton> = ({ text, onClick }) => {
  return (
    <button
      className="w-full bg-cyan-500 hover:bg-cyan-300 text-white hover:text-yellow-50 py-3"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
