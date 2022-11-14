import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <div className="modal-dialog modal-main">
          <div className="modal-content">
            {/* <div className="modal-header">
              <h5 className="modal-title">Title</h5>
            </div> */}
            <div className="modal-body">{props.children}</div>
            {console.log(props.children, "children")}
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Video
              </button>
              &nbsp;
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="modal-background">
<section className="modal-main">
  {props.children}
  <button className="close" type="button" onClick={props.onClose}>
    &#x2715;
  </button>
</section>
</div> */
}

// <p>{props.exercise.description}</p>
// <img src={props.exercise.image_url} />
// <a className="btn btn-primary" href={props.exercise.video_url} target="_blank" role="button">
//   Video
// </a>
