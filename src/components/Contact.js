import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLink } from "@fortawesome/free-solid-svg-icons";

import hero from "../images/hero.png";

function Contact() {
  return (
    <div className="Contact">
      <div className="contact-items">
        <img
          width="50px"
          height="50px"
          src={hero}
          alt="Joao Francisco Reis"
        ></img>
        <h3 className="contact-name">João Francisco Reis</h3>
        <a
          onClick={() =>
            (window.location = "mailto:joaofranciscoreis13@outlook.com")
          }
          className="contact-link"
          href="/"
        >
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
          </p>
        </a>
        <a
          className="contact-link"
          href="https://api.whatsapp.com/send?phone=351926050088&text=Hello, I'd like to get in touch with you."
          target="_blank"
          rel="noreferrer"
        >
          <p>
            <FontAwesomeIcon icon={faPhone} />
          </p>
        </a>
        <a
          className="contact-link"
          href="https://github.com/jreis13"
          target="_blank"
          rel="noreferrer"
        >
          <p>
            <FontAwesomeIcon icon={faLink} />
          </p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
