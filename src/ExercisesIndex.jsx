export function ExercisesIndex(props) {
  console.log(props.exercises, "im here");

  return (
    <div id="exercises-index">
      <h1 className="text-center">All Exercises</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.exercises.map((exercise) => (
          <div className="col">
            {/* <div className="card w-100"> */}
            <div className="card h-100" key={exercise.id}>
              {/* <img className="card-img-top" src={exercise.image_url} alt={exercise.name} /> */}
              <div className="card-body text-center">
                <h5 className="card-title">{exercise.name}</h5>
                <p className="card-text line-clamp">{exercise.description}</p>
                <img className="card-img-bottom" src={exercise.image_url} alt={exercise.name} />
              </div>
              <div className="card-footer text-center">
                <a className="btn btn-primary" href={exercise.video_url} target="_blank" role="button">
                  Video
                </a>
                &nbsp;
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => props.onSelectExercise(exercise)}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
}
