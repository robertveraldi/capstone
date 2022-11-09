export function ExercisesShow(props) {
  return (
    <div className="exercises-show">
      <h2>{props.exercise.name}</h2>
      <p>{props.exercise.description}</p>
      <img src={props.exercise.image_url} />
      <a href={props.exercise.video_url}>Video</a>
    </div>
  );
}
