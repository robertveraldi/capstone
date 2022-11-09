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

  return (
    <div id="routines-index">
      <h1>Your Routine</h1>
      {routines.map((routine) => (
        <div key={routine.id}>
          <h2>Exercise Name: {routine.exercise_name}</h2>
          <p>Description: {routine.exercise_description}</p>
          <p>Reps: {routine.reps}</p>
          <img src={routine.exercise_image} />
          <p>{routine.exercise_video}</p>
          {/* add a button here to remove (destroy) an exercise from a routine if it's already added, need to re-render routine without page refresh */}
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
