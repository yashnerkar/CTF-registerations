import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="fill-window">
      <div className="container text-div text-light">
        <p className="title">
          {" "}
          <span className="headers"> Welcome to </span>{" "}
        </p>{" "}
        <div className="container  col-md-12 col-sm-12 col-12">
          <div className="patterns">
            <svg width="100%" height="100%">
              <text x="50%" y="70%" className="glow-text" textAnchor="middle">
                CTF PORTAL{" "}
              </text>{" "}
            </svg>{" "}
          </div>{" "}
        </div>{" "}
        <p className=" text-center ">
          {" "}
          <span className="description">
            {" "}
            Do you love hacking and challenges ? Then you can definitely wants
            to compete in this CTF...{" "}
          </span>{" "}
        </p>{" "}
        <div className="container text-center">
          <Link role="button" to="/register">
            <button className="pulse buttons"> APPLY NOW </button>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Home;
