export function RoutinesIndex(props) {
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
          {/* add a button here to remove (destroy) an exercise from a routine if it's already added, need to re-render routine without page refresh */}
          <button
            onClick={() => {
              props.onDestroyRoutine(routine);
            }}
          >
            Remove Exercise From Routine
          </button>
        </div>
      ))}
    </div>
  );
}
