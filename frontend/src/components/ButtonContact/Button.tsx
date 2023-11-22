import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ ...rest}: ButtonProps) => {
  return (
    <section {...rest}></section>
  )
}

export default Button;