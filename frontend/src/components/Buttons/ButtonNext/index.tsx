import { ButtonHTMLAttributes } from "react";
import { ButtonNext as Container}  from "./styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonNext = ({ children, ...rest}: ButtonProps) => {
  return <Container {...rest}>
    {children}
  </Container>;
};

export {ButtonNext};
