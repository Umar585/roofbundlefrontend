import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

//css
import "./Signup.css";

export default function SignInForm() {
  const history = useHistory();
  const [errMsg, setErrMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
  });
  const [formErr, setFormErr] = useState({
    fname: false,
    lname: false,
    email: false,
    password: false,
    password_confirmation: false,
    terms: false,
  });

  const handleFormErrors = () => {
    let isValid = true;

    if (form.fname === "") {
      isValid = false;
      setFormErr({ ...formErr, fname: true });
    } else if (form.lname === "") {
      isValid = false;
      setFormErr({ ...formErr, lname: true });
    } else if (form.email === "") {
      isValid = false;
      setFormErr({ ...formErr, email: true });
    } else if (form.password === "") {
      isValid = false;
      setFormErr({ ...formErr, password: true });
    } else if (form.password_confirmation === "") {
      isValid = false;
      setFormErr({ ...formErr, password_confirmation: true });
    } else if (form.terms === false) {
      isValid = false;
      setFormErr({ ...formErr, terms: true });
    } else {
      setFormErr({
        fname: false,
        lname: false,
        email: false,
        password: false,
        password_confirmation: false,
        terms: false,
      });
      isValid = true;
    }
    return isValid;
  };

  const handleFormPasswords = () => {
    let isValid = true;
    if (form.password !== form.password_confirmation) {
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = handleFormErrors();
    const passValid = handleFormPasswords();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    if (isValid && passValid) {
      Axios.post("/api/auth/signup", form, config)
        .then((res) => {
          if (res.data.success) {
            setSuccessMsg(true);
            setTimeout(() => {
              setSuccessMsg(false);
            }, 8000);
            setForm({
              fname: "",
              lname: "",
              email: "",
              password: "",
              password_confirmation: "",
              terms: false,
            });
          }
        })
        .catch((err) => {
          setErrMsg(true);
          setTimeout(() => {
            setErrMsg(false);
          }, 4000);
        });
    } else {
      setFormErr({
        fname: true,
        lname: true,
        email: true,
        password: true,
        password_confirmation: true,
        term: true,
      });
      setTimeout(() => {
        setFormErr({
          fname: false,
          lname: false,
          email: false,
          password: false,
          password_confirmation: false,
          term: false,
        });
      }, 4000);
    }
  };

  return (
    <div className="SignUpForm">
      {formErr.fname ||
      formErr.lname ||
      formErr.email ||
      formErr.password ||
      formErr.password_confirmation ||
      formErr.terms ? (
        <p className="small text-center text-danger">"**Check all fields**"</p>
      ) : null}
      {errMsg ? (
        <p className="small text-center text-danger">
          "**Email already exists**"
        </p>
      ) : null}
      {successMsg ? (
        <p className="small text-center text-success">
          "**Success! Please verify your email.**"
        </p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="row" style={{ marginBottom: "-15px" }}>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First name*"
                value={form.fname}
                onChange={(e) => setForm({ ...form, fname: e.target.value })}
              />
              <hr className="hr-active" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last name*"
                value={form.lname}
                onChange={(e) => setForm({ ...form, lname: e.target.value })}
              />
              <hr className="hr-active" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email*"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <hr className="hr-active" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password*"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <hr className="hr-active" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className={
              form.password !== form.password_confirmation
                ? "form-control border-danger"
                : "form-control"
            }
            placeholder="Confirm Password*"
            value={form.password_confirmation}
            onChange={(e) =>
              setForm({ ...form, password_confirmation: e.target.value })
            }
          />
          <hr className="hr-active" />
        </div>
        <div className="form-check mt-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={form.terms}
            onChange={(e) => setForm({ ...form, terms: e.target.checked })}
          />
          <label
            className="form-check-label"
            htmlFor="exampleCheck1"
            style={{ color: "#414141" }}
          >
            I agree with terms and conditions
          </label>
          {formErr.terms ? (
            <>
              <br />
              <label className="small text-danger">
                You must agree to our terms to continue.
              </label>
            </>
          ) : null}
        </div>

        <div className="SignInBtn text-center">
          <input type="submit" value="Sign Up" className="btn" />
        </div>
        {errMsg ? (
          <p className="small text-center text-danger mt-2">
            "**Email already exists**"
          </p>
        ) : null}
        {formErr.fname ||
        formErr.lname ||
        formErr.email ||
        formErr.password ||
        formErr.password_confirmation ||
        formErr.terms ? (
          <p className="small text-center text-danger mt-2">
            "**Check all fields**"
          </p>
        ) : null}
        <div className="mt-4 text-center">
          <Link to="signin">Already have an account? Sign in.</Link>
        </div>
      </form>
    </div>
  );
}
