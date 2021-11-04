import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDisplay from "./pages/ProjectDisplay";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <ProjectDisplay />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/Resume">
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
