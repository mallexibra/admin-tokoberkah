const LabelForm = ({ name, type, placeholder, value }) => {
  return (
    <label
      aria-label="LabelForm"
      className="flex flex-col gap-1"
      htmlFor={name}
    >
      <span className="font-medium">{name}</span>
      <input
        className="w-full border border-black rounded-md p-2 text-xs outline-none"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        id={name}
      />
    </label>
  );
};

export default LabelForm;
