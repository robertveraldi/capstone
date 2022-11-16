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

  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.append("exercise_id", value.id);
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
      // setExercisesDropdown(
      //   response.data.map((exercise) => {
      //     return [exercise.name, exercise.id];
      //   })
      // );
      setExercisesDropdown(response.data);
    });
  };

  useEffect(handleExercisesDropdown, []);

  return (
    <div>
      <h1 className="text-center">Add to Your Routine</h1>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleExercise" className="form-label">
                  Exercise
                </label>
                <div className="form-outline w-100">
                  <DropdownList
                    placeholder="Exercises"
                    data={exercisesDropdown}
                    dataKey="id"
                    textField="name"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleReps" className="form-label">
                  Reps
                </label>
                <div className="form-floating form-outline w-100">
                  <input
                    name="reps"
                    type="number"
                    className="form-control"
                    id="floatingReps"
                    placeholder="Enter A Number"
                  />
                  <label for="floatingReps">Enter A Number</label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Add to Routine
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <form type="hidden" onSubmit={handleSubmit}>
<div>
  Exercise ID: <input name="exercise_id" type="number" />
</div>
<div>
  Reps: <input name="reps" type="number" />
</div>
<button type="submit">Add to Routine</button>
</form> */

/* <Combobox
busy={loading}
placeholder="Exercises"
data={exercisesDropdown}
dataKey="id"
textField="name"
value={value}
onChange={setValue}
hideEmptyPopup
/> */
