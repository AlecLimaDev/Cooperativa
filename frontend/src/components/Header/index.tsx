import styles from "./styles.module.css"
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
   <>
     <nav className={styles.nav}>
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
      </nav>
   </>
  )
}

export default Header
