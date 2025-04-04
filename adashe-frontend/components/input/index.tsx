import React from "react";

// Define props interface
interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string
  status?: "warning" | ""
  name?: string
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  status="",
  name,
}) => {
  return (
    <div className={`max-w-sm mx-auto ${className}`}>
      {label && (
        <label
          htmlFor={label}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={label}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`placeholder:text-gray-300 mt-2 p-2 block w-full border bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${status ? "border-red-600" : "border-gray-300"}`}
      />
    </div>
  );
};

export default Input;