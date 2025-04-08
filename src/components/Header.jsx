import { Link } from "react-router-dom";
import styles from "./HeaderFooter.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.innerHeader}>
          <h2 className={styles.brand}>Pearson Hardman</h2>
          <nav className={styles.navbar}>
            <Link to="/">Início</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/time">Time</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </div>
      </header>
    </>
  )
};
