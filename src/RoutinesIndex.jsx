import { useState, useEffect } from "react";
import axios from "axios";

export function RoutinesIndex() {
  const [routines, setRoutines] = useState([]);

  const handleIndexRoutines = () => {
    console.log("handleIndexRoutines");
    axios.get("http://localhost:3000/routines.json").then((response) => {
      console.log(response.data);
      setRoutines(response.data);
    });
  };

  useEffect(handleIndexRoutines, []);

  const handleDestroyRoutine = (routine) => {
    console.log("handleDestroyRoutine", routine);
    axios.delete(`http://localhost:3000/routines/${routine.id}.json`).then((response) => {
      setRoutines(routines.filter((r) => r.id !== routine.id));
    });
  };

  // useEffect(handleDestroyRoutine, []); to re render after deleting?

  return (
    <div id="routines-index">
      <h1>Your Routine</h1>
      {routines.map((routine) => (
        <div key={routine.id}>
          <h2>Exercise Name: {routine.exercise_name}</h2>
          <p>Description: {routine.exercise_description}</p>
          <p>Reps: {routine.reps}</p>
          <img src={routine.exercise_image} />
          <br></br>
          <a href={routine.exercise_video}>Video</a>
          {/*destroy button needs to re-render routine without page refresh */}
          <button
            onClick={() => {
              handleDestroyRoutine(routine);
            }}
          >
            Remove Exercise From Routine
          </button>
        </div>
      ))}
    </div>
  );
}
