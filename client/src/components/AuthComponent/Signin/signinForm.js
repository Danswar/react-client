import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signinStyle.css";

const SigninForm = ({ imgSrc, onSubmit, errorMsg, isLoading, children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(email, password);
  };

  const renderErrorMsg = (
    <div class="alert alert-danger" role="alert">
      {errorMsg}
    </div>
  );

  return (
    <div className="body text-center">
      <form className="form-signin">
        {errorMsg ? renderErrorMsg : ""}
        <img className="mb-4" src={imgSrc} alt="" width="72" height="72" />
        {isLoading ? (
          <div className="mb-3 text-center">
            <div class="spinner-border text-secondary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        )}

        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
          disabled={isLoading}
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
          disabled={isLoading}
          required
        />
        <div className="checkbox mb-3"></div>
        <button
          onClick={handleSubmit}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          disabled={isLoading}
        >
          Sign in
        </button>
        {children}
        <Link to="/signup">or sign up</Link>
        <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
      </form>
    </div>
  );
};

export default SigninForm;
