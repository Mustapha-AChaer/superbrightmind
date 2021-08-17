import { useState } from "react";
import "./contact.scss";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      {/* <div className="bg-video">
        <video autoPlay muted loop className="myVideo">
          <source src="Assets/learning.mp4" type="video/mp4" />
        </video>
      </div> */}
      <div className="right">
        <h2>Contact</h2>
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/merhy_81@yahoo.com"
          method="POST"
          data-neltify="true"
        >
          <input type="text" placeholder="Email" name="email" required />
          <textarea placeholder="Message" name="textarea" required></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply as soon as possible!</span>}
        </form>
      </div>
      <div className="left">
        <div class="breadcrumb">
          <div>
            <a href="tel:71153209">
              <PhoneIcon className="icon" />
            </a>
          </div>
          <div>
            <a href="mailto:merhy_81@yahoo.com">
              <EmailIcon className="icon" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/superbrightmind/">
              <InstagramIcon className="icon" />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/super_awiye_mena-110300903836949">
              <FacebookIcon className="icon" />
            </a>
          </div>
          <div>
            <a href="https://www.tiktok.com/@superbrightmind?lang=en">
              <i class="cib-tiktok  icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
