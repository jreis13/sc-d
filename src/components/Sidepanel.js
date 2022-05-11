import hiring from "../images/hiring.png";

function Sidepanel() {
  return (
    <div className="Sidepanel">
      <div className="side-panel">
        <a
          href="https://www.linkedin.com/jobs/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={hiring} alt="Who is hiring"></img>
        </a>
      </div>
    </div>
  );
}

export default Sidepanel;
