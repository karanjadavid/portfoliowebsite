import React from "react";
import "./projects.css";
import covid19 from "./images/covid19.jpg";
import global_superstore from "./images/global_superstore.jpg";
import Netflix from "./images/Netflix.jpg";
import Jobs from "./images/Jobs.jpg";
import pizza from "./images/pizza.jpg";
import united_nations from "./images/United Nations.jpg";
import Tableau from "./images/Tableau (2).png";
import CBC_arena from "./images/CBC_arena.png";
import pitch from "./images/pitch.png";
import Bellabeat from "./images/Bellabeat.jpg"

const Projects = () => {
  return (
    <div className="projects-data" id="projects">
      <div className="project-header">
        <h5>My Projects</h5>
      </div>
      <div id="main">
        <article class="post featured">
          <header class="major">
            <h2>
              <a href="#">
                Power BI <br />
                Dashboard
              </a>
            </h2>
            <p>
              Data search is a recruiting firm that needs to uncover job trends
              in the data field. Below is an image showing part of the
              dashboard. Attached is a power point presentation report.
            </p>
          </header>
          <a href="#" class="image main">
            <img src={Jobs} alt="" />
          </a>
          <ul class="actions special">
            <li>
              <a
                href="https://github.com/karanjadavid/DataField-powerBI"
                class="button large"
              >
                View Dashboard and Report
              </a>
            </li>
          </ul>
        </article>
        <section class="posts">
          <article>
            <header>
              <h2>
                <a href="#">
                  Global Superstore sales Analysis in Python
                  <br />
                </a>
              </h2>
            </header>
            <a href="#" class="image fit">
              <img src={global_superstore} alt="" />
            </a>
            <p>
              A global superstore has given us the task to identify what works
              best for them in terms of sales and profits. Using exploratory
              data analysis (EDA) we will help them identify the most and least
              profitable product categories. We also look into Segments,
              Geographical markets, and the performance trend over the years.
            </p>

            <ul class="actions special">
              <li>
                <a
                  href="https://github.com/karanjadavid/Global-SuperStore-Sales-Analysis"
                  class="button"
                >
                  View project
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <h2>
                <a href="#">
                  Fitness devices marketing data analysis in R <br />
                </a>
              </h2>
            </header>
            <a href="#" class="image fit">
              <img src={Bellabeat} alt="" />
            </a>
            <p>
              Bellabeat is a high-tech manufacturer of health-focused products
              for women. This is an analysis of smart device data to gain
              insight into how consumers are using the smart devices in R. The
              insights help guide the marketing strategy for the company.
            </p>
            <ul class="actions special">
              <li>
                <a
                  href="https://github.com/karanjadavid/Bellabeat-Wellness-Technology-Company/blob/master/Bellabeat-Wellness-Markdown---Copy.md"
                  class="button"
                >
                  View project
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <h2>
                <a href="#">
                  United Nations vote Data Analysis & Prediction in R <br />
                </a>
              </h2>
            </header>
            <a href="#" class="image fit">
              <img src={united_nations} alt="" />
            </a>
            <p>
              An analysis of United Nations voting trends by member states on
              different topics of global importance through the years. R
              provides an incredible enviroment that allows us clean, transform,
              analyze and visualize the raw data for insights. Important
              libraries: dplyr, janitor, ggplot, broom, knitr etc.
            </p>
            <ul class="actions special">
              <li>
                <a
                  href="https://github.com/karanjadavid/United-Nations-Vote/blob/master/UN-voting-analysis-Markdown-github-Report-document.md"
                  class="button"
                >
                  View project
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <h2>
                <a href="#">
                  Pizza Runner SQL Project
                  <br />
                  T-SQL
                </a>
              </h2>
            </header>

            <a href="#" class="image fit">
              <img src={pizza} alt="" />
            </a>

            <p>
              We design the database schema and input and store Danny's customer
              data. We then query the database to answer questions about the
              pizza business. We use common table expressions, aggregate, window
              functions, case statements, temporary tables, etc to solve the
              business questions.{" "}
            </p>
            <ul class="actions special">
              <li>
                <a
                  href="https://github.com/karanjadavid/8-Week-SQL-Challenge"
                  class="button"
                >
                  View project
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <h2>
                <a href="#">
                  Data Analysis
                  <br />
                  in Microsoft Excel
                </a>
              </h2>
            </header>
            <a href="#" class="image fit">
              <img src={Netflix} alt="" />
            </a>
            <p>
              We use MS Excel to organize, manipulate, analyze and visualize
              netflix data. The visuals are built from the data aggregated in
              pivot tables.
            </p>
            <ul class="actions special">
              <li>
                <a
                  href="https://github.com/karanjadavid/Data-Organizing-Cleaning-Visualization-in-Microsoft-Excel"
                  class="button"
                >
                  View Project
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <h2>
                <a href="#">
                  Data Visualization
                  <br />
                  in Tableau
                </a>
              </h2>
            </header>
            <a href="#" class="image fit">
              <img src={Tableau} alt="" />
            </a>
            <p>
              Tableau is a powerful, intuitive and scalable platform that offers
              great business intelligence visuals.We can produce Worksheets,
              dashboards and storyboards from our data
            </p>
            <ul class="actions special">
              <li>
                <a
                  href="https://public.tableau.com/app/profile/karanjadavid"
                  class="button"
                >
                  View Projects
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <h2>
                <a href="#">
                  Storytelling
                  <br />
                  Business Pitch
                </a>
              </h2>
            </header>
            <a href="#" class="image fit">
              <img src={pitch} alt="" />
            </a>
            <p>
              Pitching the CBC Arena app
            </p>
            <ul class="actions special">
              <li>
                <a
                  href="https://youtu.be/V9xwDKCZO9g"
                  class="button"
                >
                  Watch Video
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <h2>
                <a href="#">
                  Data Presentation
                  <br />
                  in Google Slides
                </a>
              </h2>
            </header>
            <a href="#" class="image fit">
              <img src={CBC_arena} alt="" />
            </a>
            <p>
              A Google Slides presentation of a team project to build the CBC
              Arena app that will help teachers get training on the fly on how
              to deliver the Competency Based Curriculum.
            </p>
            <ul class="actions special">
              <li>
                <a
                  href="https://drive.google.com/file/d/1fuoE3o97HGaOuoErl5ZDniPXGTcevY47/view?usp=sharing"
                  class="button"
                >
                  View Slides
                </a>
              </li>
            </ul>
          </article>
        </section>
        <footer>
          <div class="pagination">
            <a href="#" class="previous">
              Prev
            </a>
            <a href="#" class="page active">
              1
            </a>
            <a href="#" class="page">
              2
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Projects;
