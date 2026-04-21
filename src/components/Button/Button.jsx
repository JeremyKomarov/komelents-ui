import "./Button.scss";
import { BUTTON_VARIANT, BUTTON_SIZE } from "./Button.types";

const Button = ({
  children,
  variant = BUTTON_VARIANT.PRIMARY,
  size = BUTTON_SIZE.MD,
  fullWidth = false,
  loading = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const classes = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? "button--full-width" : "",
    loading ? "button--loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {iconLeft && <span className="button__icon">{iconLeft}</span>}
      {children}
      {iconRight && <span className="button__icon">{iconRight}</span>}
    </button>
  );
};

export default Button;
