export function RoutinesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine(params, () => event.target.reset());
  };

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
