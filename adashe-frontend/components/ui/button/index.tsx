'use client';

import React from 'react'

type IButton = {
  text: string;
  onClick: () => void;
  className?: string
}

const Button = ({text, onClick, className}: IButton) => {
  return (
    <button onClick={onClick} className={`shadow-md px-4 py-4 border rounded-md ${className}`}>
      {text}
    </button>
  );

};

export default Button;
