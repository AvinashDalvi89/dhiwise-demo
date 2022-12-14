import React from "react";
import PropTypes from "prop-types";

const variants = { FillBluegray100: "bg-bluegray_100 text-black_900" };
const sizes = { sm: "md:p-[13px] p-[19px] sm:px-[15px] sm:py-[10px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["FillBluegray100"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = { className: "", variant: "FillBluegray100", size: "sm" };

export { Button };
