import React from "react";

type ButtonProps = {
  variant: "smash" | "pass";
  disabled?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  const baseClasses = "my-2 border transition hover:text-gray-800";
  const variantClasses =
    variant === "smash"
      ? "border-green-600 text-green-600 hover:bg-green-600"
      : "border-red-600 text-red-600 hover:bg-red-600";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>{children}</button>
  );
};

export default Button;
