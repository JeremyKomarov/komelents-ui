import "./Select.scss";
import { SELECT_VARIANT, SELECT_SIZE } from "./Select.types";

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  variant = SELECT_VARIANT.DEFAULT,
  size = SELECT_SIZE.MD,
  helper,
  disabled = false,
  className = "",
  ...props
}) => {
  const classes = [
    "select",
    `select--${variant}`,
    `select--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {label && <label className="select__label">{label}</label>}
      <div className="select__wrapper">
        <select
          className="select__field"
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="select__arrow">
          <ChevronDown />
        </span>
      </div>
      {helper && <span className="select__helper">{helper}</span>}
    </div>
  );
};

export { SELECT_VARIANT, SELECT_SIZE };
export default Select;
