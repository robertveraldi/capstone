export function ExercisesIndex(props) {
  console.log(props.exercises, "im here");
  return (
    <div id="exercises-index">
      <h1>All Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <p>{exercise.description}</p>
          <img src={exercise.image_url} />
          <p>{exercise.video_url}</p>
          <button onClick={() => props.onSelectExercise(exercise)}>More Info</button>
          <button>Add To Routine</button>
        </div>
      ))}
    </div>
  );
}
