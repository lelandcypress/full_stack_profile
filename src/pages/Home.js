import React from "react";
import "./Home.css";
import "../components/responsive.css";
function Home() {
  return (
    <div className="container mt-4 p-0 home-border">
      <div className="jumbotron welcome ">
        <div>
          <p className="wtext">Hello, I'm Michael</p>
        </div>
        <div className="typewriter">
          <p>Let's build something amazing together</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
