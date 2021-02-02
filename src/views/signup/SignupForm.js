import React from "react";
import { Link } from "react-router-dom";

//css
import "./Signup.css";

export default function SignInForm() {
  return (
    <div className="SignUpForm">
      <form>
        <div className="row" style={{ marginBottom: "-15px" }}>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
              <hr />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
              <hr />
            </div>
          </div>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Username" />
          <hr />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" />
          <hr />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <hr />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
          <hr />
        </div>
        <div className="form-check mt-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label
            className="form-check-label"
            htmlFor="exampleCheck1"
            style={{ color: "#414141" }}
          >
            I agree with terms and conditions
          </label>
        </div>
        <div className="SignInBtn text-center">
          <input
            type="submit"
            value="Sign Up"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          />
        </div>
        <div className="mt-4 text-center">
          <Link to="signin">Already have an account? Sign in.</Link>
        </div>
      </form>
    </div>
  );
}
