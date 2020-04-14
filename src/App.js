import React from "react";
import "./App.css";
import Homepage from "./Pages/homepage.component";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Homepage></Homepage>
    </Router>
  );
}

export default App;
