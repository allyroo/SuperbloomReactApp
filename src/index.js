import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
ReactDOM.render(
  <BrowserRouter>
    <App />
    <Switch>
      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
