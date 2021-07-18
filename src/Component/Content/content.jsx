import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../Content/content.css";
import { Carousel } from "react-bootstrap";
import dell1Img from "../../Assets/Image/dell1.jpg";
import dell2Img from "../../Assets/Image/dell2.jpg";
import dell3Img from "../../Assets/Image/dell3.jpg";

const Section = () => {
  return (
    <div
      className="content row justify-content-md-around align-items-center"
      style={{ height: "400px;" }}
    >
      <div className="content-intro col-5">
        <h1>
          Hi, I am
          <span style={{ color: "#079992;" }}>
            {" "}
            Fadhilla Dwi Prameswary Rayes
          </span>
        </h1>
        <p>
          You can call me Della. I am from West Sumbawa, West Nusa Tenggara. Now
          I attended at Faculty of Biology, Universitas Gadjah Mada, Yogyakarta.
          I like reading, writing, and art. My favorite book's genres are
          fiction, phylosophy, and pshycology.
        </p>
        <button type={"button"} className="btn btn-danger">
          Start to subscribe
        </button>
      </div>
      <Carousel fade style={{ width: "50%" }}>
        <Carousel.Item>
          <img className="d-block w-100" src={dell1Img} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={dell2Img} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={dell3Img} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Section;
