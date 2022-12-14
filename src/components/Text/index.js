import React from "react";
const variantClasses = {
  h1: "font-normal sm:text-[32px] md:text-[34px] text-[36px]",
  h2: "font-bold sm:text-[28px] md:text-[30px] text-[32px]",
  h3: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "text-[16px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
