import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import header from "../images/header.jpg";
import profile from "../images/profile.jpg";

function Profile() {
  return (
    <div className="Profile">
      <div className="profile-contents">
        <div className="header-box">
          <img className="sc-img" src={header} alt="Header"></img>
        </div>

        <div className="profile-image">
          <img className="profile-img" src={profile} alt="Profile"></img>
        </div>

        <div className="infos">
          <h2 className="name">SC&DEGENER</h2>
          <p className="description">
            we plan, we execute, we make dreams come true. let us be your remedy
            when you need all eyes on you.
          </p>
          <p className="category">Advertising Services • 205 followers</p>
          <a className="profile-link" href="/">
            <p>See all 2 employees on LinkedIn</p>
          </a>

          <div className="profile-btns">
            <a className="profile-btn btn-follow" href="/">
              <p>+ Follow</p>
            </a>
            <a
              className="profile-btn btn-website"
              href="http://www.scdegener.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                Visit Website <FontAwesomeIcon icon={faUpRightFromSquare} />
              </p>
            </a>
            <a className="profile-btn btn-more" href="/">
              <p>More</p>
            </a>
          </div>
        </div>

        <div className="profile-nav">
          <a className="p-navi" href="/">
            <p>Home</p>
          </a>
          <a className="p-navi selected" href="/">
            <p>About</p>
          </a>
          <a className="p-navi" href="/">
            <p>Posts</p>
          </a>
          <a className="p-navi" href="/">
            <p>Jobs</p>
          </a>
          <a className="p-navi" href="/">
            <p>People</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
