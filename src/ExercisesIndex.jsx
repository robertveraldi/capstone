export function ExercisesIndex(props) {
  console.log(props.exercises, "im here");
  return (
    <div id="exercises-index">
      <h1>All Exercises</h1>
      <div className="row">
        {props.exercises.map((exercise) => (
          <div className="col">
            <div className="card exercise" style={{ width: "18rem" }} key={exercise.id}>
              <img src={exercise.image_url} className="card-img-top" alt={exercise.name} />
              <div className="card-body">
                <h5 className="card-title">{exercise.name}</h5>
                <p className="card-text">Description: {exercise.description}</p>
                {/* <p>{exercise.video_url}</p> */}
                <a class="btn btn-primary" href={exercise.video_url} target="_blank" role="button">
                  Video
                </a>
                &nbsp;
                <button className="btn btn-primary" onClick={() => props.onSelectExercise(exercise)}>
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
