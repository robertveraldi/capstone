import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="signupName" className="form-label">
            Name
          </label>
          <div className="form-outline w-25">
            <input name="name" type="text" className="form-control" id="signupName" placeholder="John Doe" />
          </div>
        </div>
        <div className="mb-3">
          <label for="signupEmail" className="form-label">
            Email Address
          </label>
          <div className="form-outline w-25">
            <input
              name="email"
              type="email"
              className="form-control"
              id="signupEmail"
              placeholder="email@example.com"
              aria-describedby="email-help"
            />
          </div>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <label for="signupPassword" className="form-label">
          Password
        </label>
        <div className="form-outline w-25">
          <input
            name="password"
            type="password"
            className="form-control"
            id="signupPassword"
            placeholder="Enter Password"
          />
        </div>
        <label for="signupPasswordConfirm" className="form-label">
          Password
        </label>
        <div className="form-outline w-25">
          <input
            name="password_confirmation"
            type="password"
            className="form-control"
            id="signupPasswordConfirm"
            placeholder="Enter Password Again"
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
}
