import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import adpone from "../images/adpone.jpg";
import kearney from "../images/kearney.jpg";
import axe from "../images/axe.jpg";

function Pages() {
  return (
    <div className="Pages">
      <div className="side-panel">
        <h2 className="sidepanel-title">Pages people also viewed</h2>

        <div className="company-card">
          <img src={adpone} width="50px" height="50px" alt="company x"></img>
          <div className="company-details">
            <h3 className="company-name">AdPone</h3>
            <p className="company-industry">Internet</p>
            <p className="company-followers">910 followers</p>
            <a className="btn-side-link" href="/">
              <p className="btn-side">
                <FontAwesomeIcon icon={faPlus} /> Follow
              </p>
            </a>
          </div>
        </div>

        <div className="company-card">
          <img src={kearney} width="50px" height="50px" alt="company x"></img>
          <div className="company-details">
            <h3 className="company-name">Kearney</h3>
            <p className="company-industry">Management Consulting</p>
            <p className="company-followers">363,745 followers</p>
            <a className="btn-side-link" href="/">
              <p className="btn-side">
                <FontAwesomeIcon icon={faPlus} /> Follow
              </p>
            </a>
          </div>
        </div>

        <div className="company-card">
          <img src={axe} width="50px" height="50px" alt="company x"></img>
          <div className="company-details">
            <h3 className="company-name">AxéPop</h3>
            <p className="company-industry">Online Media</p>
            <p className="company-followers">167 followers</p>
            <a className="btn-side-link" href="/">
              <p className="btn-side">
                <FontAwesomeIcon icon={faPlus} /> Follow
              </p>
            </a>
          </div>
        </div>

        <div>
          <a className="similar-link" href="/">
            <h3 className="similar">See all similar pages</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pages;
