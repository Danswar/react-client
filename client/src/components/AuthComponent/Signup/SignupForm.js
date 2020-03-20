import React, { useState } from "react";
import "./signupStyle.css";

const SignupForm = ({ imgSrc, onSubmit, errorMsg }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(username, email, password);
  };

  return (
    <div className="body text-center">
      <form className="form-signup">
        {errorMsg ? (
          <div class="alert alert-danger" role="alert">
            {errorMsg}
          </div>
        ) : (
          ""
        )}
        <img className="mb-4" src={imgSrc} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
        <label htmlFor="inputUsername" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="inputUsername"
          className="form-control"
          placeholder="Full name"
          autoFocus
          onChange={e => setUsername(e.target.value)}
          required
        />
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <div className="checkbox mb-3"></div>
        <button
          onClick={handleSubmit}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Sign up
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
      </form>
    </div>
  );
};

export default SignupForm;
