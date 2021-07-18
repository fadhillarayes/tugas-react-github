import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SocialMedia from "../Footer/SocialMedia";
import Contact from "../Footer/Contact";
import "../Footer/container.css";

const footer = () => {
  return (
    <footer
      className="font-small blue-grey"
      style={{ "background-color": "#f1f2f6;" }}
    >
      <div style={{ "background-color": "#21d192;" }}>
        <SocialMedia />
      </div>
      <div className="container text-center text-md-left">
        <div className="row pt-5 dark-grey-text">
          <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-uppercase font-weight-bold">DELL</h6>
            <hr
              className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px;" }}
            />
            <p>
              I love writing fictions such as novel or short stories, and poems.
              My favorite writers are Jostein Gaarder, Keigo Higashino, Khaled
              Khosseini, Harper Lee, Sir Arthur Conan Doyle, Sapardi Djoko
              Damono, Aan Mansyur, and Pulitzer Prize's winners such as Marjorie
              Kinnan Rawlings.
            </p>
          </div>

          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Experiences</h6>
            <hr
              className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px;" }}
            />
            <p>
              <a
                className="dark-grey-text d-flex justify-content-lg-start ps-5"
                style={{ "text-decoration": "none;" }}
                href="https://www.balairungpress.com/en/"
                target="blank"
              >
                Journalist at BPPM Balairung UGM
              </a>
            </p>
            <p className="dark-grey-text d-flex justify-content-lg-start ps-5">
              Salman Spiritual Camp
            </p>
            <p className="dark-grey-text d-flex justify-content-lg-start ps-5">
              Latihan Mujtahid Dakwah
            </p>
            <p className="dark-grey-text d-flex justify-content-lg-start ps-5">
              Internship at Titi Orchid, Yogyakarta
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Date</h6>
            <hr
              className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px;" }}
            />
            <p className="dark-grey-text" href="#!">
              2017-2020
            </p>
            <p className="dark-grey-text" href="#!">
              2019
            </p>
            <p className="dark-grey-text" href="#!">
              2019
            </p>
            <p className="dark-grey-text" href="#!">
              2019
            </p>
          </div>
          <Contact />
          <div className="footer-copyright text-center text-black-50 py-3">
            <p>© 2021 DELL</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
