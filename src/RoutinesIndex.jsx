export function RoutinesIndex(props) {
  console.log(props.routines, "im also here");
  return (
    <div id="routines-index">
      <h1>Your Routine</h1>
      {props.routines.map((routine) => (
        <div key={routine.id}>
          {/* <h2>{routine.exercise.name}</h2>
          <p>{routine.exercise.description}</p> */}
          <p>{routine.reps}</p>
        </div>
      ))}
    </div>
  );
}
