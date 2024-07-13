const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 border px-7 py-4 font-montserrat text-lg leading-none transition-all hover:scale-110 hover:shadow-lg active:bg-red-600 ${
        backgroundColor
          ? `${backgroundColor}/0.5 ${textColor} ${borderColor}`
          : "border-coral-red bg-coral-red text-white"
      } rounded-full ${fullWidth ? "w-full" : ""}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 h-5 w-5 rounded-full bg-white"
        />
      )}
    </button>
  );
};

export default Button;
