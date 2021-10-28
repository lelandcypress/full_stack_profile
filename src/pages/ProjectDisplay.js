import React from "react";
import Projects from "./Projects";

const projects = [
  {
    name: "Gear Out",
    description:
      "A MERN Stack E-Commerce Portal meant to provide access to high quality costumes at an affordable rate. Designed with JavaScript, Mongo, and React",
    techUsed: ["JavaScript", "MongoDB"],
    image: "gear.png",
    gitHub: "https://github.com/lelandcypress/Gear_Out",
    deployed: "https://quiet-garden-76902.herokuapp.com/",
  },

  {
    name: "S.W.O.R.D",
    description:
      "A full stack Project Task Management App designed for the modern superhero. Developed with Sequalize, Handlebars, and JavaScript.",
    techUsed: [
      "Bootstrap",
      "JavaScript",
      "Handlebars.js",
      "Node.js",
      "Express",
      "MySQL",
      "Sequalize",
    ],
    image: "sword_logo.png",
    gitHub: "https://github.com/lelandcypress/S.W.O.R.D",
    deployed: "https://frozen-harbor-76666.herokuapp.com/",
  },
  {
    name: "Employee Management Command Line",
    description:
      "Manage your employee roster through the command line. Using Node, Inquirer, and SQL perform the full range of CRUD operations.",
    techUsed: ["JavaScript", "Node.js", "MySQL", "Inquirer.js"],
    image: "CLI.PNG",
    gitHub: "https://github.com/lelandcypress/Employee_Management_Command_Line",
    deployed: "https://youtu.be/11b8yqhuitI",
  },
  {
    name: "Dinner and Drinks",
    description:
      "A front end app designed to help take the guesswork out of dinner plans. Enjoy your meal, brought to you by Tailwind.css, JavaScript, and three API Calls",
    techUsed: ["Bootstrap", "JavaScript", "Node.js", "Inquirer.js"],
    image: "Dinner.PNG",
    gitHub: "https://github.com/lelandcypress/What-is-for-dinner",
    deployed: "https://lelandcypress.github.io/What-is-for-dinner/",
  },
  {
    name: "Jacobs Weather",
    description:
      "Named for my youngest son, who wanted to help develop an app at three months old. A Front end Javascript weather app making use of two API endpoints.",
    techUsed: ["Bootstrap", "JavaScript"],
    image: "Sun.PNG",
    gitHub: "https://github.com/lelandcypress/Jacobs_Weather",
    deployed: "https://lelandcypress.github.io/Jacobs_Weather/",
  },

  {
    name: "Coding Quiz",
    description:
      "Test your JavaScript Knowledge and see your score. Careful! You are being timed.",
    techUsed: ["JavaScript", "Bootstrap"],
    image: "questionmark.png",
    gitHub: "https://github.com/lelandcypress/Coding-Quiz",
    deployed: "https://lelandcypress.github.io/Coding-Quiz/",
  },
];

export default function ProjectDisplay() {
  return (
    <div className="row d-flex justify-content-around">
      {projects.map((project) => (
        <Projects
          name={project.name}
          description={project.description}
          techUsed={project.techUsed}
          image={project.image}
          gitHub={project.gitHub}
          deployed={project.deployed}
          key={project.id}
        />
      ))}
    </div>
  );
}
