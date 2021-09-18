import React from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home__page">
      <div id="home__nocontent"></div>
      <div id="home__content">
        <h1 id="cursive_font">Superbloom</h1>
        <div id="super-you">
          into a super-you. Blossom into your full potential, one habit at a
          time.
        </div>
        {/* <h3>Blossom into your full potential, one habit at a time.</h3> */}
        <Link to="/about">
          <Button variant="contained">Learn More</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
