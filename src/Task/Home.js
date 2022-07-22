import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="landing-page">
        <div className="wrapper">
          <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
            <div className="row">
              <div className="col text-white home_rightside">
                <h5
                  className="display-h1 text-center fw-bold "
                  style={{ fontSize: "50px", color: "red" }}
                >
                  Welcome to Our Channel
                </h5>
                <p className="lead px-4 fw-bold" style={{ color: "black" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur omnis odio nam quaerat quidem beatae corrupti
                  dolor ex velit. Debitis totam similique iure, placeat
                  provident minus adipisci fugiat harum natus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
