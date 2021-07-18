import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Form/form.css";

const Form = () => {
  return (
    <div className="Form">
      <div
        className="form d-flex flex-column align-items-center mt-5 mb-5"
        style={{
          border: "1px solid #b8e994;",
          margin: "0 300px 0 300px;",
          "border-radius": "20px;",
        }}
      >
        <h3
          className="d-flex justify-content-center pt-3"
          style={{ color: "#079992;" }}
        >
          Get in touch!
        </h3>
        <div className="d-grid col-10 mb-3">
          <label htmlFor={"exampleFormControlInput1"} className="form-label">
            Email address*
          </label>
          <input
            type={"email"}
            className={"form-control"}
            id={"exampleFormControlInput1"}
            placeholder={"name@example.com"}
          />
        </div>
        <div className="d-grid col-10 mb-3">
          <label htmlFor={"exampleFormControlTextarea1"} className="form-label">
            Comments or discussion*
          </label>
          <textarea
            className="form-control"
            id={"exampleFormControlTextarea1"}
            rows="3"
          ></textarea>
        </div>
        <button type={"button"} className="btn btn-success mb-3 d-grid col-10">
          Send
        </button>
      </div>
    </div>
  );
};

export default Form;
