import React, { useEffect } from "react";
import Typed from "react-typed";
import VideoBg from "reactjs-videobg";
import Videos from "./videos/video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    //header
    <div className="profile-container" id="home">
      <div className="video">
        <VideoBg>
          <VideoBg.Source src={Videos} type="video/mp4" />
        </VideoBg>
      </div>
      <div className="profile-parent">
        <div className="profile-details">
          <div className="column" data-aos="fade-right">
            <div className="column-icon">
              <a
                href="https://www.kaggle.com/karanjadavid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-kaggle"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/davidkaranjamwangi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/karanjadavid_M"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://github.com/karanjadavid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://medium.com/@karanjadavid_M"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-medium"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name" data-aos="fade-right">
            <span>
              {""}
              Hello there 👋🏼 I'm
            </span>
          </div>
          <span className="highlighted-text" data-aos="zoom-out">
            {" "}
            David Karanja Mwangi
          </span>
          <div className="profile-details-role">
            <span>
              {""}
              <h2>
                {""}
                <Typed
                  strings={[
                    "DATA ANALYST",
                    "BUSINESS INTELLIGENCE ANALYST",
                  ]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                />
              </h2>
              <span className="profile-role-tagline" data-aos="fade-right">
                Data driven <br /> decision making
              </span>
            </span>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
