const Button = ({ color = "bg-black", onClick, type, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} text-white w-full p-2 text-xs font-bold rounded-md`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
