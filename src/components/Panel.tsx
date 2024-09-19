import React from "react";

interface PanelProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const Panel: React.FC<PanelProps> = ({ label, isSelected, onClick }) => {
  return (
    <div
      className={`w-full h-15 flex items-center pl-4 rounded-lg bg-secondary transition-colors duration-300 cursor-pointer ${
        isSelected ? "bg-primary" : ""
      } hover:bg-primary`}
      style={{ height: "60px" }}
      onClick={onClick}
    >
      <span className="text-white font-semibold">{label}</span>
    </div>
  );
};

export default Panel;
