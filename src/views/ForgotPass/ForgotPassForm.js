import React from "react";
import { Link } from "react-router-dom";

//css
import "./ForgotPass.css";

export default function SignInForm() {
  return (
    <div className="ForgotPassForm">
      <form>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" />
          <hr />
        </div>
        <div className="SignInBtn text-center">
          <input
            type="submit"
            value="Send request"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          />
        </div>
        <div className="mt-4 text-center">
          <Link to="signin">Figured it out? Sign In</Link>
        </div>
      </form>
    </div>
  );
}
