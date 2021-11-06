import React from "react";
import PDF from "../components/pdf/Resume.pdf";
import "./Resume.css";

function Resume() {
  return (
    <>
      <div className="resume-link">
        <a href="../components/pdf/Resume.pdf" download target="_blank">
          Download Resume
        </a>
      </div>
      <div className=" resume-body d-flex justify-content-center align-items-center">
        <embed
          src={PDF + "#toolbar=0"}
          type="application/pdf"
          height={900}
          width={600}
        />
      </div>
    </>
  );
}
export default Resume;
