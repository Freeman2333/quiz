import React from "react";

interface CheckboxPanelProps {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}

const CheckboxPanel: React.FC<CheckboxPanelProps> = ({
  label,
  isChecked,
  onToggle,
}) => {
  return (
    <div
      className={`w-full h-15 flex items-center justify-between pl-4 pr-4 rounded-2xl border-2 transition-colors duration-300 cursor-pointer ${
        isChecked
          ? "bg-secondaryLight border-primary"
          : "bg-secondary border-transparent"
      } hover:bg-primary/10 hover:border-primary `}
      style={{ height: "60px" }}
      onClick={onToggle}
    >
      <span className="text-white font-semibold">{label}</span>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="checkbox"
            className="opacity-0 absolute h-full w-full cursor-pointer"
            checked={isChecked}
            onChange={onToggle}
          />
          <div
            className={`w-5 h-5 flex items-center justify-center rounded border transition-colors duration-300 ${
              isChecked
                ? "bg-primary text-white border-primary"
                : "bg-secondary text-primary border-primary"
            }`}
          >
            {isChecked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxPanel;
