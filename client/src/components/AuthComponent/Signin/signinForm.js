import React, { useState, Children } from "react";
import { Link } from "react-router-dom";
import "./signinStyle.css";
import { clearError } from "../../../store/actions/errorActions";

const SigninForm = ({ imgSrc, onSubmit, errorMsg, children }) => {
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
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
