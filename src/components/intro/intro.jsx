import "./intro.scss";
import profile from "../.././Assets/Profile.jpeg";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        "Life Coach",
        "Parental Coach",
        "Career Coach",
        "Educational Consultant",
        "Motivational Speaker",
        "NLP Practitionar",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={profile} alt="profile photo" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Nisrine Merhy</h1>
          <h3>
            An Accredited <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#Works">
          <ArrowDownwardIcon className="arrowdown" />
        </a>
      </div>
    </div>
  );
}
