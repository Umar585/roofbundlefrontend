import React from "react";
import { Link } from "react-router-dom";

//css
import "./SignIn.css";

export default function SignInForm() {
  return (
    <div className="SignInForm">
      <form>
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
        <div className="form-check float-left">
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
            Check me out
          </label>
        </div>
        <div className="text-right">
          <Link to="/forgotpassword" style={{ color: "#414141" }}>
            Forgot Password
          </Link>
        </div>
        <div className="SignInBtn">
          <div className="row">
            <div className="col-6">
              <input
                type="submit"
                value="Sign In"
                className="btn w-100"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/";
                }}
              />
            </div>
            <div className="col-6">
              <Link to="signup" className="btn w-100">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
