import "./Input.scss";
import { INPUT_VARIANT, INPUT_SIZE } from "./Input.types";

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  variant = INPUT_VARIANT.DEFAULT,
  size = INPUT_SIZE.MD,
  helper,
  iconLeft,
  iconRight,
  disabled = false,
  type = "text",
  className = "",
  ...props
}) => {
  const classes = [
    "input",
    `input--${variant}`,
    `input--${size}`,
    iconLeft ? "input--icon-left" : "",
    iconRight ? "input--icon-right" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {label && <label className="input__label">{label}</label>}
      <div className="input__wrapper">
        {iconLeft && <span className="input__icon input__icon--left">{iconLeft}</span>}
        <input
          className="input__field"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        {iconRight && <span className="input__icon input__icon--right">{iconRight}</span>}
      </div>
      {helper && <span className="input__helper">{helper}</span>}
    </div>
  );
};

export { INPUT_VARIANT, INPUT_SIZE };
export default Input;
