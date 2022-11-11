import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  // const [isSingupVisible, setIsSignupVisible] = useState(false);

  // const handleSignupShow = () => {
  //   setIsSignupVisible(true);
  // };

  // const handleSignupClose = () => {
  //   setIsSignupVisible(false);
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/110/110495.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          ></img>
          &nbsp; Gym Routine
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            {localStorage.jwt === undefined ? (
              <>
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </>
            ) : (
              // <Link to="/logout">Logout</Link>
              <>
                <Link className="nav-link active" to="/your_routine">
                  Your Routine
                </Link>
                <Link className="nav-link active" to="/add_exercise">
                  Add to Your Routine
                </Link>

                <li className="nav-item">
                  <LogoutLink />
                </li>
              </>
            )}
            {/* this doesnt need to be a new page, just have the link work */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
