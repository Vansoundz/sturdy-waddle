import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../routes/paths";

const Home = () => {
  return (
    <div>
      <h4>Home</h4>
      <Link to={paths.tasks}>Layout</Link>
    </div>
  );
};

export default Home;
