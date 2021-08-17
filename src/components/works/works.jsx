import "./works.scss";
import AssignmentIcon from "@material-ui/icons/Assignment";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import ChatIcon from "@material-ui/icons/Chat";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import "../../global.scss";

import { useState } from "react";
import workshop5 from "../.././Assets/workshop5.jpg";
import kids from "../.././Assets/kids.JPG";
import workshop7 from "../.././Assets/workshop7.jpg";
import workshop8 from "../.././Assets/workshop8.JPG";
import nlp from "../.././Assets/npl.jpg";
import Ms from "../.././Assets/MotivationalSpeaker.jpeg";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      title: "Life Coach",
      icon: <AccessAlarmIcon className="icon" />,
      desc: "Need help with identifying your goals? Need encouragements in developing your targets? You’ve come to the right place",
      img: workshop5,
    },
    {
      id: "2",
      title: "Parental Coach",
      icon: <ChildFriendlyIcon className="icon" />,
      desc: "Are you looking for a new way to gain support and identify your strengths in your family? I can provide the tools to raise and educate your children to the best of your ability.",
      img: kids,
    },
    {
      id: "3",
      title: "Career Coach",
      icon: <AssignmentIcon className="icon" />,
      desc: "Helping you with identifying your personal goals, develop your skills, and plan career moves.",
      img: workshop7,
    },
    {
      id: "4",
      title: "Educational Consultant",
      icon: <CastForEducationIcon className="icon" />,
      desc: "Helping parents, students, and teachers with educational planning.",
      img: workshop8,
    },
    {
      id: "5",
      title: "Motivational Speaker",
      icon: <ChatIcon className="icon" />,
      desc: "Yes, you can do it! \tIf you are looking for a motivational speaker to deliver passionate and inspiring speeches to a group of people, Book Now!",
      img: Ms,
    },
    {
      id: "6",
      title: "NPL Practitioner",
      icon: <AccessibilityIcon className="icon" />,
      desc: "For kids and teens. With the right guidance, I shall help them overcome emotional problems, behavior disorders, phobias and anxious thinking.",
      img: nlp,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 5)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="works" id="Works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  {d.icon}
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <KeyboardArrowLeftIcon
        className="arrowLeft"
        onClick={() => handleClick("left")}
      />
      <KeyboardArrowRightIcon
        className="arrowRight"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
