import React, { useEffect } from "react";
import Image from "../assets/o.jpg";
import "./Abilities.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Abilities = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="feature" id="about">
      <div className="title-text" data-aos="zoom-in">
        <p>Who am I</p>
        <h1>About Me</h1>
      </div>
      <div className="feature-box">
        <div
          className="features"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <div className="features-desc">
           
            <div className="feature-text">
              {/* <p>
                I am a young developer currently residing in Nairobi, Kenya.I am
                a diligent, hardworking and result oriented guy. I always work
                towards achieving best result on each project I lay my hands on.
              </p> */}
            </div>
          </div>

          <h1>Bio</h1>
          <div className="features-desc">
            <div className="feature-icon">
              <i className="fab fa-black-tie"></i>
            </div>
            <div className="feature-text">
              <p>
                David Mwangi is a proficient Data Analyst at Mosmarts Limited, a
                prominent software and data consultancy firm based in Nairobi,
                Kenya. His expertise lies in empowering businesses to make
                data-driven decisions that drive growth. He excels in
                communicating complex findings to non-technical stakeholders and
                collaborating with cross-functional teams to drive data
                initiatives. With a strong background in handling extensive
                financial and telecommunication datasets, David enjoys analyzing
                large datasets to identify trends, uncover patterns, and
                optimize operational processes. He takes pride in improving
                analytics efficiency by 30% through advanced automation
                techniques and streamlining report generation.
              </p>
            </div>
          </div>

          <h1>Elevator Pitch</h1>
          <div className="features-desc">
            <div className="feature-icon">
              <i className="fas fa-comment-dots"></i>
            </div>
            <div className="feature-text">
              <p>
                My name is David Mwangi. I am a professional data analyst with
                over two years of experience solving business problems using
                data in the financial and telecommunications industries. After
                understanding my business problem, I easily manipulate my data
                using Python, Excel, or SQL tools. I am a reliable team player
                and a lifelong learner who enjoys taking on new challenges. If
                you are looking for a super-efficient data analyst to handle
                your data management and analytics ecosystem, look no further. I
                will be delighted to walk you through the journey of deriving
                value from the organizations’ data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
