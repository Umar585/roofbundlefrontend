import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as IoIcon from "react-icons/io";
import * as GiIcon from "react-icons/gi";

//css
import "./SignIn.css";

export default function SignInForm() {
  //temp onclick function
  const sendToDashboard = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <div
        className="mx-auto"
        style={{ maxWidth: "500px", marginTop: "100px" }}
      >
        <h1>Welcome Back!</h1>
        <form>
          <div className="mt-4">
            <label className="sr-only" for="Email_Input">
              Email
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div
                  className="input-group-text bg-white border-right-0"
                  style={{ borderRadius: "25px 0px 0px 25px" }}
                >
                  <IconContext.Provider
                    value={{ color: "#e60029", size: "20px" }}
                  >
                    <IoIcon.IoMdMail />
                  </IconContext.Provider>
                </div>
              </div>
              <input
                type="email"
                className="form-control border-left-0"
                id="Email_Input"
                placeholder="Enter E-mail"
                style={{ borderRadius: "0px 25px 25px 0px" }}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="sr-only" for="Password_Input">
              Password
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div
                  className="input-group-text bg-white border-right-0"
                  style={{ borderRadius: "25px 0px 0px 25px" }}
                >
                  <IconContext.Provider
                    value={{ color: "#e60029", size: "20px" }}
                  >
                    <GiIcon.GiPadlock />
                  </IconContext.Provider>
                </div>
              </div>
              <input
                type="password"
                className="form-control border-left-0"
                id="Password_Input"
                placeholder="Enter Password"
                style={{ borderRadius: "0px 25px 25px 0px" }}
              />
            </div>
          </div>
          <div className="row custome_col">
            <div className="col-lg-6 mt-4">
              <Link to="/signup" className="login_form_btns_switch btn">
                Sign Up
              </Link>
            </div>
            <div className="col-lg-6 mt-4">
              <button
                className="login_form_btns btn bg-white"
                onClick={sendToDashboard}
              >
                Sign In
              </button>
              <Link to="/" className="small text-white">
                Forgot Password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
