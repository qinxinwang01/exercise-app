import React, { useState } from "react";

function RepetitionExercise({ exerciseName }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{exerciseName}</h1>
      <p>Repetitions: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add Rep</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default RepetitionExercise;