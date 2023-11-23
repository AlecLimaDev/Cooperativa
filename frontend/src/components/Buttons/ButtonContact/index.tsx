import { ButtonHTMLAttributes } from "react";
import { ButtonContact as Container } from "./styles";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonContact = ({ ...rest }: ButtonProps) => {
  return <Container {...rest}>
    (E-mail) aleclimadev@gmail.com
  </Container>;
};

export { ButtonContact };
