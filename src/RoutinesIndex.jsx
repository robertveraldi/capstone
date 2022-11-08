export function RoutinesIndex(props) {
  console.log(props.routines, "im also here");
  return (
    <div id="routines-index">
      <h1>Your Routine</h1>
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <h2>Exercise Name: {routine.exercise_name}</h2>
          <p>Description: {routine.exercise_description}</p>
          <p>Reps: {routine.reps}</p>
          <img src={routine.exercise_image} />
          <p>{routine.exercise_video}</p>
        </div>
      ))}
    </div>
  );
}
