import React from "react";
import { ProgressBar } from "react-progressbar-fancy";
import "./Program.css";
import Python from "./images/Python.png"
import Excel from "./images/Excel.png"
import PowerBI from "./images/Power BI.png"
import R from "./images/R.png"
import SQL from "./images/SQL.png"
import tableau from "./images/tableau.png"
import powerpoint from "./images/Powerpoint.png"

const Programs = () => {
  return (
    <div className="prog-small">
    <div className="lang">
    <h4>Tech Stack</h4>
    </div>
    <div className="images">
    <div className="img1">
        <img
          className="image"
          src={Python}
          alt="Image 3"
          width="48"
          height="48"
        />
        <p>Python</p>
      </div>
    <div className="img1">
        <img
          className="image"
          src={Excel}
          alt="Image 3"
          width="48"
          height="48"
        />
        <p>Excel</p>
      </div>
      <div className="img1">
        <img
          className="image"
          src={PowerBI}
          alt="Image 3"
          width="48"
          height="48"
        />
        <p>Power BI</p>
      </div>
      <div className="img1">
        <img
          className="image"
          src={R}
          alt="Image 4"
          width="48"
          height="48"
        />
        <p>R</p>
      </div>
      <div className="img1">
        <img
          className="image"
          src={SQL}
          alt="Image 6"
          width="48"
          height="48"
        />
        <p>Sql</p>
      </div>
      <div className="img1">
        <img
          className="image"
          src={tableau}
          alt="Image 6"
          width="48"
          height="48"
        />
        <p>Tableau</p>
      </div>
      <div className="img1">
        <img
          className="image"
          src={powerpoint}
          alt="Image 5"
          width="48"
          height="48"
        />
        <p>Power Point</p>
      </div>
    </div>
    </div>
  );
};

export default Programs;
