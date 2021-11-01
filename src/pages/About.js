import React from "react";
import picture from "../components/srcPics/profile.PNG";
import "./About.css";
import "../components/pdf/Resume.pdf";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import { GrReactjs } from "react-icons/gr";

function About() {
  return (
    <div className="container my-4">
      <div className="jumbotron my-4 about-border" id="about-me">
        <figure id="profContainer" className="rounded">
          <img
            id="profPic"
            className="rounded-circle borderc mt-2 "
            src={picture}
            alt="profile-pic"
          ></img>
        </figure>
        <p className="p-5">
          I am a Full Stack developer eager to develop high quality solutions
          through technology. I have many years of leadership experience, be it
          leading Marines or guiding my clients through challenging milestones.
          My background as a Project Manager has honed my communication and
          collaborative skills. I'm a graduate of a Full Stack Coding Bootcamp
          from Southern Methodist University, where I have learned and applied
          the MVC paradigm and OOP through JavaScript, Node, Express, and SQL.
          As a performance-driven leader, I am excited to use my technical
          skills and collaborative nature to help your team to continue to
          develop innovative, and exciting products.
        </p>

        <ul className="skill-list">
          <h3>Skilled in</h3>
          <li>
            HTML <FaHtml5 />
          </li>
          <li>
            CSS <FaCss3 />
          </li>
          <li>
            Bootstrap <FaBootstrap />
          </li>
          <li>
            JavaScript <FaJs />
          </li>
          <li>
            SQL <GrMysql />
          </li>
          <li>
            MongoDB <DiMongodb />
          </li>
          <li>
            Node.js <GrNode />
          </li>
          <li>
            Express <GrNode />
          </li>
          <li>
            React <GrReactjs />
          </li>
        </ul>
        <div className="mb-4 p-4">
          <a target="_blank" href="../components/pdf/Resume.pdf" download>
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
