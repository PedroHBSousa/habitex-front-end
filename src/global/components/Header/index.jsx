import "./styles.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">Habitex</div>
      <nav className="nav">
        <ul className="ul">
          <li className="li">HOME</li>
          <li className="li">QUEM SOMOS</li>
          <li className="li">CONTATO</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
