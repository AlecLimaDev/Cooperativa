import S from "./styles.module.css"
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
   <>
     <nav className={S.nav}>
        <NavLink to="/" className={S.brand}>
          Axis MobFintech
        </NavLink>
        <ul className={S.LinkList}>
          <li className={S.menu}>
            <NavLink to="/">Cooperativas</NavLink>
          </li>
          <li className={S.menu}>
            <NavLink to="/cooperados">Cooperados</NavLink>
          </li>
          <li className={S.menu}>
            <NavLink to="/contatos-favoritos">Contatos Favoritos</NavLink>
          </li>
        </ul>
      </nav>
   </>
  )
}

export default Header
