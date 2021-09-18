import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/SignUp/SignUp";
import { Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <SignUp />
        </div>
      </Container> */}
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
