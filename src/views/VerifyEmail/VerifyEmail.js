import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import Logo from "../../assets/img/Logo.png";
import "./VerifyEmail.css";

export default function SignIn() {
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const handleVerify = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      Axios.put(`/api/auth/verifyemail/${params.emailToken}`, config);
      history.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="verify">
      <div className="container">
        <div className="mx-auto" style={{ maxWidth: "500px" }}>
          <img src={Logo} alt="Logo" className="SignInLogo" />
          <h6 className="text-center">Verify your email address to continue</h6>
          <div className="text-center mt-4">
            <button className="btn" onClick={handleVerify}>
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
