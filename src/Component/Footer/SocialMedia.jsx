import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../Footer/container.css";

const SocialMedia = () => {
  const socialMedia = [
    { icon: faFacebook, url: "https://www.facebook.com/della.rayes/" },
    { icon: faTwitter, url: "https://twitter.com/melanogasterrrr" },
    { icon: faLinkedinIn, url: "https://www.linkedin.com/in/fadhilla-rayes/" },
    { icon: faInstagram, url: "https://www.instagram.com/dellaide_rayeses/" },
  ];
  return (
    <div className="container">
      <div
        className="row py-4"
        style={{ display: "flex;", "justify-content": "space-around;" }}
      >
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0" style={{ color: "white;" }}>
            Get connected with me on social networks!
          </h6>
        </div>
        <div className="col-md-6 col-lg-7 text-center text-md-right d-flex justify-content-around">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.url}
              style={{ "text-decoration": "none;" }}
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// ReactDOM.render(element, document.body)

export default SocialMedia;
