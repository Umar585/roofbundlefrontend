import React from "react";
import SignInForm from "./SignInForm";
import Logo from "../../assets/img/Logo.png";

export default function SignIn() {
  return (
    <div className="signIn">
      <div className="container">
        <div className="mx-auto" style={{ maxWidth: "500px" }}>
          <img src={Logo} alt="Logo" className="SignInLogo" />
          <h6 className="text-center">
            Welcome back! Please login to your account
          </h6>
          <SignInForm />
          <div className="fixed-bottom text-center">
            <p>
              <a
                href="https://static1.squarespace.com/static/600703e479368747aa9db8aa/t/600ea27ed3c69c50b9f25fa4/1611571854656/Terms+of+Use+-+Roofbundle.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#414141" }}
              >
                Terms of use.{" "}
              </a>
              <a
                href="https://static1.squarespace.com/static/600703e479368747aa9db8aa/t/600ea29c872c446e5a38a7f4/1611571877324/Privacy+Policy+-+Roofbundle.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#414141" }}
              >
                Privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
