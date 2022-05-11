import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="About">
      <div className="about-contents">
        <h3 className="section-title">Overview</h3>
        <div className="about-description">
          <p className="about-text-description">
            life is too short: it should be lived at its maximum. through unique
            experiences and by connecting each other, discovering the best
            version of ourselves. this is what we do. we plan, we execute, we
            make dreams come true. let us be your remedy when you need all eyes
            on you. everything is possible. impossible is nothing
          </p>

          <p className="about-text-description">
            WE ARE YOUR REMEDY for event planning & production - public
            relations - marketing and communications 360 strategy and execution
          </p>

          <p className="about-text-description">
            ALL EYES ON YOU for international fashion scouting
          </p>
        </div>

        <div className="about-category">
          <h4 className="section-subtitle">Website</h4>
          <a
            className="link"
            href="http://www.scdegener.com/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="about-link">http://www.scdegener.com</p>
          </a>
        </div>

        <div className="about-category">
          <h4 className="section-subtitle">Industry</h4>
          <p className="category-text">Advertising Services</p>
        </div>

        <div className="about-category">
          <h4 className="section-subtitle">Company size</h4>
          <p className="category-text">2-10 employees</p>
          <p className="category-text-alt">
            2 on LinkedIn{" "}
            <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
          </p>
        </div>

        <div className="about-category">
          <h4 className="section-subtitle">Founded</h4>
          <p className="category-text">2019</p>
        </div>

        <div className="about-category">
          <h4 className="section-subtitle">Specialities</h4>
          <p className="category-text">
            Marketing, Communications, PR, Events, Fashion, and Scouting
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
