import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RepetitionExercise from "./RepetitionExercise";
import DurationExercise from "./DurationExercise";
import DistanceExercise from "./DistanceExercise";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/repetition"
          element={<RepetitionExercise exerciseName="Push-ups" />}
        />
        <Route
          path="/duration"
          element={<DurationExercise exerciseName="Running" />}
        />
        <Route
          path="/distance"
          element={<DistanceExercise exerciseName="Cycling" />}
        />
      </Routes>
    </Router>
  );
}

export default App;