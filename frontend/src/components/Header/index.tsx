import { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

import { ButtonContact } from "../Buttons";

import styles from "./styles.module.css";

type HeaderProps = HTMLAttributes<HTMLElement>;

const Header = ({ children, ...rest }: HeaderProps) => {
  return (
    <>
      <header>
        <nav className={styles.nav} {...rest}>
          {children}
          <NavLink to="/" className={styles.brand}>
            Alec Cooperativa Union
          </NavLink>
          <ul className={styles.LinkList}>
            <li className={styles.menu}>
              <NavLink to="/">Cooperativas</NavLink>
            </li>
            <li className={styles.menu}>
              <NavLink to="/cooperados">Cooperados</NavLink>
            </li>
            <li className={styles.menu}>
              <NavLink to="/contatos-favoritos">Contatos Favoritos</NavLink>
            </li>
          </ul>
          <ButtonContact />
        </nav>
      </header>
    </>
  );
};

export default Header;
