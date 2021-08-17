import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#Works" onClick={() => setMenuOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>
            Photo Gallery
          </a>
        </li>

        {/* <li>
          <a href="#testemonial" onClick={() => setMenuOpen(false)}>
            Testemonials
          </a>
        </li> */}
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
