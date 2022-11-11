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
      <div className="row">
        {routines.map((routine) => (
          <div className="col">
            <div className="card routine" style={{ width: "18rem" }} key={routine.id}>
              <img src={routine.exercise_image} className="card-img-top" alt={routine.name} />
              <div className="card-body">
                <h5 className="card-title">Exercise Name: {routine.exercise_name}</h5>
                <p className="card-text">Description: {routine.exercise_description}</p>
                <p className="card-text">Reps: {routine.reps}</p>
                <a class="btn btn-primary" href={routine.exercise_video} target="_blank" role="button">
                  Video
                </a>
                {/*destroy button needs to re-render routine without page refresh */}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleDestroyRoutine(routine);
                  }}
                >
                  Remove Exercise From Routine
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
