import { Link } from "react-router-dom";

export function Header() {
  // const [isSingupVisible, setIsSignupVisible] = useState(false);

  // const handleSignupShow = () => {
  //   setIsSignupVisible(true);
  // };

  // const handleSignupClose = () => {
  //   setIsSignupVisible(false);
  // };

  return (
    <header>
      <nav>
        <h1>Gym Routine App</h1>
        <Link to="/">Home</Link> |{" "}
        {localStorage.jwt === undefined ? (
          <>
            <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
          </>
        ) : (
          <Link to="/logout">Logout</Link>
        )}
        {/* this doesnt need to be a new page, just have the link work */}
      </nav>
    </header>
  );
}
