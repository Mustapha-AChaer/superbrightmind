import "./Topbar.scss";
import { AutoAwesomeIcon, Email, LocalPhone } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="Topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Super Bright Mind
          </a>
          <div className="itemContainer">
            <span>
              <a href="tel:71153209" className="phoneNumber">
                <LocalPhone className="LocalPhoneItem" />
                <span className="number">+96171153209</span>
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <Email className="emailItem" />
            <a href="mailto:" className="email">
              Merhy_81@yahoo.com
            </a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
