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
      <h1 className="text-center">Your Routine</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {routines.map((routine) => (
          <div className="col">
            <div className="card h-100" key={routine.id}>
              <div className="card-body">
                <h5 className="card-title text-center">{routine.exercise_name}</h5>
                <p className="card-text">{routine.exercise_description}</p>
                <p className="card-text">Reps: {routine.reps}</p>
                <img src={routine.exercise_image} className="card-img-bottom" alt={routine.name} />
              </div>
              <div className="card-footer text-center">
                <a className="btn btn-primary" href={routine.exercise_video} target="_blank" role="button">
                  Video
                </a>
                {/*destroy button needs to re-render routine without page refresh */}
                &nbsp;
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

// line 32 after className style={{ width: "18rem" }}
