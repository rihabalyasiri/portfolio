import React from "react";
import "./App.css";
import Me from "./pages/me/Me";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ContactPage from "./pages/impressum/ImpressumPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Me} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/impressum" component={ContactPage} />
          <Route path="/datenschutz" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
