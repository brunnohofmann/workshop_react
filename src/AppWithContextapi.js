import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { UserContext } from "./components/UserContext";

import "./AppWithContextApi.css";


function AppRouter () {
  return (
    <Router>
      <div>
        <img
          src="https://i.morioh.com/2934a8d84c.png"
          height="150"
          width="175"
          alt="Unform"
        />
        <h1>React & Context Api Hook</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;