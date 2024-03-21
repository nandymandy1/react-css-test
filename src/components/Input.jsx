import clsx from "clsx";

const Input = ({
  id,
  label = "",
  className = "",
  required = false,
  onChange = () => {},
  ...restInputProps
}) => {
  const changeHandler = ({ target: { name, value } }) =>
    onChange({ name, value });

  return (
    <div className="form-group flex-grow flex">
      <input
        id={id}
        type="text"
        placeholder=" "
        required={required}
        onChange={changeHandler}
        className={clsx("form-control p-x-sm", className)}
        {...restInputProps}
      />
      <label className="form-input-label" htmlFor={id}>
        {label}
        {required && <span className="form-input-asterisk" />}
      </label>
    </div>
  );
};

export default Input;
