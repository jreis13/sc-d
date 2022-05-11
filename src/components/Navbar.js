import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faBriefcase,
  faMessage,
  faBell,
  faListDots,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import avatar from "../images/hero.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} height="35px" width="35px" alt="linkedin logo"></img>
        </a>
      </div>
      <div className="search">
        <input
          className="search-box"
          placeholder="🔎 Search for jobs, skills, companies..."
        ></input>
      </div>
      <div className="nav-btns">
        <a href="/" className="nav-btn">
          <FontAwesomeIcon icon={faHouse} />
        </a>

        <a href="/" className="nav-btn">
          <FontAwesomeIcon icon={faUsers} />
        </a>
        <a href="/" className="nav-btn">
          <FontAwesomeIcon icon={faBriefcase} />
        </a>
        <a href="/" className="nav-btn">
          <FontAwesomeIcon icon={faMessage} />
        </a>
        <a href="/" className="nav-btn">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <div className="avatar-box">
          <a href="/">
            <img className="avatar" src={avatar} alt="User avatar"></img>
          </a>
        </div>
        <a href="/" className="nav-btn">
          <FontAwesomeIcon icon={faListDots} />
        </a>
        <div className="nav-ad-box">
          <a href="/" className="nav-ad">
            <p>Try Premium</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
