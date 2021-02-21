import React from "react";
import "./Header.css";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>My New Portfolio</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Facebook ads SMM",
            "Google ads",
          ]}
          typeSpeed={40}
          backSpeed={60}
        />
        <a href="#" className="btn-main">
          Contact Me
        </a>
      </div>
    </div>
  );
};
export default Header;
