import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
//css
import "./SignIn.css";

export default function SignInForm() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [formErr, setFormErr] = useState({
    email: false,
    password: false,
  });
  const [err, setErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const handleFormErrors = () => {
    let isValid = true;

    if (form.email === "") {
      isValid = false;
      setFormErr({ ...formErr, email: true });
    } else if (form.password === "") {
      isValid = false;
      setFormErr({ ...formErr, password: true });
    } else {
      setFormErr({
        email: false,
        password: false,
      });
      isValid = true;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = handleFormErrors();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    if (isValid) {
      try {
        const { data } = await Axios.post("/api/auth/signin", form, config);
        localStorage.setItem("authToken", data.token);
        history.push("/");
      } catch (error) {
        console.log(error.response.data);
        if (error.response.data.error === "Email not verified") {
          setEmailErr(true);
          setTimeout(() => {
            setEmailErr(false);
          }, 4000);
        } else {
          setErr(true);
          setTimeout(() => {
            setErr(false);
          }, 4000);
        }
      }
    } else {
      setFormErr({
        email: true,
        password: true,
      });
      setTimeout(() => {
        setFormErr({
          email: false,
          password: false,
        });
      }, 4000);
    }
  };

  return (
    <div className="SignInForm">
      {formErr.email || formErr.password ? (
        <p className="small text-center text-danger">"**Check all fields**"</p>
      ) : null}
      {err ? (
        <p className="small text-center text-danger">
          "**Email or password incorrect**"
        </p>
      ) : null}
      {emailErr ? (
        <p className="small text-center text-danger">
          "**Please verify email**"
        </p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <hr />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <hr />
        </div>
        <div className="text-right">
          <Link to="/forgotpassword" style={{ color: "#414141" }}>
            Forgot Password
          </Link>
        </div>
        <div className="SignInBtn">
          <div className="row">
            <div className="col-6">
              <input type="submit" value="Sign In" className="btn w-100" />
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
