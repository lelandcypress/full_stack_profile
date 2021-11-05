import React from "react";
import PDF from "../components/pdf/Resume.pdf";

function Resume() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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