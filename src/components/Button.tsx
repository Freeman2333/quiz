import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  width?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  width,
  disabled,
}) => {
  return (
    <button
      className={`mt-4 p-3 bg-primary text-white rounded-2xl transition-colors duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      style={{ width }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
