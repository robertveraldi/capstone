import axios from "axios";
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import { useState } from "react";
import { useEffect } from "react";

export function RoutinesNew(props) {
  const handleCreateRoutine = (params, successCallback) => {
    console.log("handleCreateRoutine", params);
    axios.post("http://localhost:3000/routines.json", params).then((response) => {
      successCallback();
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateRoutine(params, () => event.target.reset());
    // for (const pair of params.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }
  };

  const [exercisesDropdown, setExercisesDropdown] = useState([]);

  const handleExercisesDropdown = () => {
    console.log("handleExercisesDropdown");
    axios.get("http://localhost:3000/exercises").then((response) => {
      console.log(response.data);
      setExercisesDropdown(
        response.data.map((exercise) => {
          return exercise.name;
        })
      );
    });
  };

  useEffect(handleExercisesDropdown, []);

  return (
    <div>
      <h1>Add to Your Routine</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Exercise: <DropdownList defaultValue="Exercises" data={exercisesDropdown} />
        </div>
      </form>
    </div>
  );
}

// <form onSubmit={handleSubmit}>
// <div>
//   Exercise ID: <input name="exercise_id" type="number" />
// </div>
// <div>
//   Reps: <input name="reps" type="number" />
// </div>
// <button type="submit">Add to Routine</button>
// </form>
