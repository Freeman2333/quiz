import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="mt-4 p-3 bg-primary text-white rounded-2xl transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
