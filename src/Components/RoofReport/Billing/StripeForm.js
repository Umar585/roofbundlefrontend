import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
//axios
import axios from "axios";
//stripe
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
//assets
import Logo from "../../../assets/img/Logo.png";
import bgImg from "../../../assets/img/bgImg.jpg";
//icons
import { IconContext } from "react-icons";
import * as AiIcon from "react-icons/ai";

export default function StripeForm() {
  const [isLoading, setIsLoading] = useState(false);

  const stripePromise = loadStripe(
    "pk_test_51I6j05IxwZ3uBkyash7eYbwQmwRboJxHQHXfZBfUmmNWjk9YSGXGmpsdtW4zbrWrMPF1tVWgzmZ3VcmLKT9czqds001t7hSJ8W"
  );
  const location = useLocation();
  const { address, company, phone, email, country } = location.state;

  const StripeForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleStripPayment = async (e) => {
      e.preventDefault();

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (!error) {
        const { id } = paymentMethod;
        try {
          const { data } = await axios.post("/api/stripe/", {
            id,
            amount: 100,
            email: email,
            address: address,
            company: company,
            phone: phone,
            country: country,
          });
          setIsLoading(true);
        } catch (err) {
          console.log(err);
        }
      }
    };

    return (
      <form
        onSubmit={handleStripPayment}
        className="card p-4 mt-4 mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="text-center">Billing Information</h2>
        <hr />
        <Link to="/roofreport" className="text-right mb-4">
          Cancel
        </Link>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe}
          className="btn mt-4 text-white"
          style={{ backgroundColor: "#e60029" }}
        >
          Order
        </button>
      </form>
    );
  };

  return (
    <div style={backStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
        }}
        className="container"
      >
        <img
          src={Logo}
          alt="Roofbundle Logo"
          style={logoStyle}
          className="mx-auto"
        />
        {isLoading /*Payment Confirmation */ ? (
          <div
            className="text-center mx-auto"
            style={{ maxWidth: "500px", marginTop: "20px" }}
          >
            {/*Add Check */}
            <IconContext.Provider
              value={{
                size: "100px",
                color: "green",
              }}
            >
              <AiIcon.AiOutlineCheckCircle
                style={{
                  marginBottom: "20px",
                }}
              />
            </IconContext.Provider>

            <h1
              style={{
                fontFamily: "LatoBold",
                color: "#e60029",
              }}
            >
              Payment Confirmed
            </h1>
            <p style={{ fontSize: "16px" }}>
              An email has been sent to you <br />
              (Please check your spam and junk mail)
            </p>
            <Link to="/" className="btn btn-danger w-50">
              Head Back
            </Link>
          </div>
        ) : (
          <>
            <div
              className="container"
              style={{ maxWidth: "500px", marginTop: "100px" }}
            >
              <div className="card mx-auto">
                <div className="card-body">
                  <div className="card-title text-center">
                    <h2>Personal Information</h2>
                  </div>
                  <hr />
                  <div>
                    <div className="row">
                      <div className="col-md-4">Report Address:</div>
                      <div className="col-md-8">{address}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-4">Company Name:</div>
                      <div className="col-md-8">{company}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-4">Phone:</div>
                      <div className="col-md-8">{phone}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-4">Email:</div>
                      <div className="col-md-8">{email}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-4">Country:</div>
                      <div className="col-md-8">{country}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" style={{ maxWidth: "500px" }}>
              <Elements stripe={stripePromise}>
                <StripeForm />
              </Elements>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const logoStyle = {
  maxWidth: "400px",
  width: "100%",
  height: "auto",
};
const backStyle = {
  backgroundImage: `url(${bgImg})`,
  minHeight: "100vh",
  height: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
