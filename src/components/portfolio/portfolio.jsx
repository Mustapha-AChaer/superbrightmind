import "./portfolio.scss";
import workshop1 from "../.././Assets/workshop1.jpg";
import workshop2 from "../.././Assets/workshop2.jpg";
import workshop7 from "../.././Assets/workshop7.jpg";
import workshop4 from "../.././Assets/workshop4.jpg";
import workshop8 from "../.././Assets/workshop8.JPG";
import workshop6 from "../.././Assets/workshop6.jpg";

export default function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Photo Gallery</h1>

      <div className="container">
        <div className="item">
          <img src={workshop1} alt="" />
          <h3>Workshops</h3>
        </div>
        <div className="item">
          <img src={workshop2} alt="" />
          <h3>Workshops</h3>
        </div>
        <div className="item">
          <img src={workshop7} alt="" />
          <h3>Workshops</h3>
        </div>
        <div className="item">
          <img src={workshop4} alt="" />
          <h3>Workshops</h3>
        </div>
        <div className="item">
          <img src={workshop8} alt="" />
          <h3>Workshops</h3>
        </div>
        <div className="item">
          <img src={workshop6} alt="" />
          <h3>Workshops</h3>
        </div>
      </div>
    </div>
  );
}
