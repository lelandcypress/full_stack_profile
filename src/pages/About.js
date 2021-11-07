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
    <div className="container my-4 containerflex">
      <div className="jumbotron my-4 about-border" id="about-me">
        <figure id="profContainer" className="rounded">
          <img
            id="profPic"
            className="rounded-circle borderc mt-2 "
            src={picture}
            alt="profile-pic"
          ></img>
        </figure>
        <div className="px-4">
          <p>
            I'm a former Officer in the Marine Corps, an experienced Project
            Manager with an MBA, and graduate of a Full Stack Coding Bootcamp
            from Southern Methodist University. I currently specialize in the
            MERN stack with a bent toward SQL, but I am eager to branch off in to
            other languages. As a performance-driven leader, I am excited to use
            my technical skills and collaborative nature to help your team
            develop innovative and exciting products.
          </p>

          <p>
            Based out of Charleston, South Carolina, where in my spare time you can
            find me working on my lawn, chasing two toddlers around the
            house, and watching the Philadelphia Eagles.
          </p>
        </div>
       
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
      </div>
    </div>
  );
}
export default About;
