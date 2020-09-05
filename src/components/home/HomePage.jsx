import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  // jumbotron A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.
  // Gray with round corners
  return (
    <div className="jumbotron">
      <h2>Welcome to PS Redux courses</h2>
      <p>This is a nice home page on redux courses management</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
};

export default HomePage;
