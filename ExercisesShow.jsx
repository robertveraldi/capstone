export function ExercisesShow(props) {
  return (
    <div className="exercises-show">
      <h1>Exercise</h1>
      <h3>{props.exercise.name}</h3>
      <p>{props.exercise.description}</p>
      <img src={props.exercise.image_url} />
      <p>{props.exercise.video_url}</p>
    </div>
  );
}
