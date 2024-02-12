const FloatingLabelInput = ({
  handler,
  value,
  name,
  placeholder,
  type = "text",
  bgColor = "bg-primary",
  height = "h-[56px]",
  topLabel,
}) => {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-2">
      {topLabel && (
        <label htmlFor={name} className="text-white  text-lg font-medium">
          {topLabel}
        </label>
      )}
      <div className="relative w-full group">
        <input
          onFocus={(e) => {
            if (type === "datetime-local") {
              e.target.showPicker();
            } else {
              return;
            }
          }}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handler}
          className={` px-3 text-white  text-base font-semibold  w-full  text-gray-900 ${bgColor} rounded-lg border border-gray border-opacity-[0.24] focus:border-opacity-100 appearance-none focus:outline-none focus:ring-0 focus:border-cyan peer ${height} focus-within:group-hover:border-cyan group-hover:border-white`}
          placeholder=" "
        />
        <label
          htmlFor={name}
          className={`absolute text-base pointer-events-none text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${bgColor} text-gray px-3 peer-focus:px-2 peer-focus:text-cyan  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
};

export default FloatingLabelInput;
