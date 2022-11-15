export function ExercisesShow(props) {
  return (
    <div className="exercises-show">
      <h2>{props.exercise.name}</h2>
      <p>{props.exercise.description}</p>
      <div className="image-container">
        <img className="modal-img" src={props.exercise.image_url} />
      </div>
    </div>
  );
}
