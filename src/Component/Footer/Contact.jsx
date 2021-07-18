import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const contact = [
    { icon: faHome, desc: "Yogyakarta 55223, Indonesia" },
    { icon: faEnvelope, desc: "fadhilla.dwi.p.r@gmail.com" },
    { icon: faPhoneSquareAlt, desc: "0831-1941-0720" },
  ];
  return (
    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      <h6 className="text-uppercase font-weight-bold">Contact</h6>
      <hr
        className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
        style={{ width: "60px;" }}
      />
      {contact.map((item) => (
        <div>
          {/* key={index} */}
          <FontAwesomeIcon icon={item.icon} /> {item.desc}
        </div>
      ))}
    </div>
  );
};

export default Contact;
