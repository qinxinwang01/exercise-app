import React, { useState, useEffect } from "react";

function DurationExercise({ exerciseName }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h1>{exerciseName}</h1>
      <p>Time: {time} seconds</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default DurationExercise;