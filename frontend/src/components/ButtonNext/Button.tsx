import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest}: ButtonProps) => {
  return <section {...rest}>
    {children}
  </section>;
};

export default Button;
