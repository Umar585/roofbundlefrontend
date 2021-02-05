import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

//css
import "./ForgotPass.css";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [emailerr, setEmailErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const forgotPassHandler = async (e) => {
    e.preventDefault();

    if (email === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await Axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
      setEmail("");
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data.error === "Email not verified") {
        setEmailErr(true);
        setTimeout(() => {
          setEmailErr(false);
        }, 4000);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      }
    }
  };

  return (
    <div className="ForgotPassForm">
      {error && (
        <p className="small text-center text-danger">
          "**Email not sent. Try again**"
        </p>
      )}
      {success && (
        <p className="small text-center text-success">"**Email sent**"</p>
      )}
      {emailerr && (
        <p className="small text-center text-danger">
          "**Please verify email first**"
        </p>
      )}
      <form onSubmit={forgotPassHandler}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <hr />
        </div>
        <div className="SignInBtn text-center">
          <input type="submit" value="Send request" className="btn" />
        </div>
        <div className="mt-4 text-center">
          <Link to="signin">Figured it out? Sign In</Link>
        </div>
      </form>
    </div>
  );
}
