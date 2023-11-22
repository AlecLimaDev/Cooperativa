import { HTMLAttributes } from "react";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { ButtonContact } from "../ButtonContact/ButtonContact";

type HeaderProps = HTMLAttributes<HTMLElement>;

const Header = ({children, ...rest }: HeaderProps) => {
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
          <ButtonContact>Clique aqui</ButtonContact>
        </nav>
      </header>
    </>
  );
};

export default Header;
