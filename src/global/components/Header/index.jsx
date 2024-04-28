import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Habitex</h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>Home</li>
          <li className={styles.li}>Sobre Nós</li>
          <li className={styles.li}>Contato</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
