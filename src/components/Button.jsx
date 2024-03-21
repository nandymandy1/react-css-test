import clsx from "clsx";

const VARIANTS_MAP = {
  danger: "btn-danger",
  dark: "btn-dark",
  light: "btn-light",
  primary: "btn-primary",
  secondary: "btn-secondary",
  success: "btn-success",
};

const Button = ({
  children,
  size = "medium",
  variant = "primary",
  onClick = () => {},
}) => {
  const buttonType = VARIANTS_MAP[variant] || VARIANTS_MAP["light"];

  return (
    <>
      <button
        onClick={onClick}
        className={clsx("btn m-x-sm m-y-sm", buttonType)}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
