interface InputFieldProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => {
  return (
    <div className="w-full">
      <label className="text-white font-semibold mb-2 block">{label}</label>
      <div
        className={`w-full h-15 flex items-center justify-between pl-4 pr-4 rounded-2xl border-2 transition-colors duration-300 cursor-text bg-secondary border-transparent hover:bg-primary/10 hover:border-primary focus-within:border-primary`}
        style={{ height: "65px" }}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none text-white placeholder-muted focus:outline-none"
        />
      </div>
    </div>
  );
};

export default InputField;
