import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Axios from "axios";

//css
import "./ResetPass.css";

export default function SignInForm({ match }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const resetPassHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setError("Passwords do not match");
    }

    try {
      const { data } = await Axios.put(
        `/api/auth/resetpassword/${params.resetToken}`,
        { password },
        config
      );

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        history.push("/signin");
      }, 4000);
      setSuccess(data.data);
    } catch (error) {
      setError("Somethign went wrong. Try again!");
    }
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="loader"></div>
          <br />
          <h3>Success! Redirecting...</h3>
        </div>
      ) : (
        <div className="ResetPassForm">
          {error && (
            <p className="small text-center text-danger">"**{error}**"</p>
          )}
          {success && (
            <p className="small text-center text-success">
              "**{success}{" "}
              <Link
                to="/signin"
                className="btn"
                style={{ color: "#e60029", border: "1px solid #e60029" }}
              >
                Sign In
              </Link>
              **"
            </p>
          )}
          <form onSubmit={resetPassHandler}>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <hr />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <hr />
            </div>
            <div className="SignInBtn text-center">
              <input type="submit" value="Reset Password" className="btn" />
            </div>
          </form>
        </div>
      )}
    </>
  );
}
