import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDisplay from "./pages/ProjectDisplay";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Resume from "./pages/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={ProjectDisplay} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
