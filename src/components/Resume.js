import React from "react";
import PDF from "./pdf/Resume.pdf";

function Resume() {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <embed
        style={{ display: "inline" }}
        iframe
        src={PDF + "#toolbar=0"}
        type="application/pdf"
        height={900}
        width={600}
      />
    </div>
  );
}
export default Resume;
