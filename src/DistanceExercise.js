import React, { useState } from "react";

function DistanceExercise({ exerciseName }) {
  const [distance, setDistance] = useState(0);

  return (
    <div>
      <h1>{exerciseName}</h1>
      <p>Distance: {distance} km</p>
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(parseFloat(e.target.value))}
        placeholder="Enter distance in km"
      />
      <button onClick={() => setDistance(0)}>Reset</button>
    </div>
  );
}

export default DistanceExercise;