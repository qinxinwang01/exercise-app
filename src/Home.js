import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Exercise App</h1>
      <ul>
        <li>
          <Link to="/repetition">Repetition Exercise (e.g., Push-ups)</Link>
        </li>
        <li>
          <Link to="/duration">Duration Exercise (e.g., Running)</Link>
        </li>
        <li>
          <Link to="/distance">Distance Exercise (e.g., Cycling)</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;