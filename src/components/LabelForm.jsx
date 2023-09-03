const LabelForm = ({
  name,
  type,
  change,
  placeholder,
  disabled = false,
  value,
}) => {
  return (
    <label
      aria-label="LabelForm"
      className="flex flex-col gap-1"
      htmlFor={name}
    >
      <span className="font-medium">{name}</span>
      <input
        className="w-full disabled:bg-black/5 border border-black rounded-md p-2 text-xs outline-none"
        type={type}
        disabled={disabled}
        name={name}
        value={value}
        onChange={change}
        placeholder={placeholder}
        id={name}
      />
    </label>
  );
};

export default LabelForm;
