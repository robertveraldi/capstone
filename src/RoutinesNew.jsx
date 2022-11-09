export function RoutinesNew(props) {
  const handleCreateRoutineSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add to Your Routine</h1>
      <form onSubmit={handleCreateRoutineSubmit}>
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
