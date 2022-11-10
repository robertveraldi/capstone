import axios from "axios";

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
  console.log(props.onCreateRoutine);

  return (
    <div>
      <h1>Add to Your Routine</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Exercise ID: <input name="exercise_id" type="number" />
        </div>
        <div>
          Reps: <input name="reps" type="number" />
        </div>
        <button type="submit">Add to Routine</button>
      </form>
    </div>
  );
}
// this form needs to have a dropdown with exercise names, box for reps input

// properties of a select element

{
  /* {exercises.map((exercise) => (
        <div key={exercise}>
          <p>{exercise.name}</p>
        </div> */
}
{
  /* ))} */
}

// <label for="exer">Exercises: </label>
// <select name="exercises" id="exer">
//   <option value="select">Select Exercise</option>
//   <option value="Barbell Bench Press">Barbell Bench Press</option>
// </select>
