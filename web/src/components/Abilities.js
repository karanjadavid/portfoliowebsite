import React, { useEffect } from "react";
import Image from "../assets/o.jpg";
import "./Abilities.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoPlayer from 'react-video-js-player';
import Video from './videos/Elevator.mp4';
import backgroundvideo from './videos/backgroundvideo.png';

const Abilities = () => {
  const videoSrc = Video;
  const poster = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/msnbc/Components/Photos/061107/061107_stevejobs_hmed_12p.jpg"
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
          <div className='meetingpage'>  <div>
          <VideoPlayer
            src={videoSrc}
            poster={backgroundvideo}
            className='video'
          />
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
