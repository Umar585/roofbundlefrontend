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
          const { data } = await axios.post(
            "https://35.183.174.109:5000/api/pay",
            {
              id,
              amount: 100,
              email: email,
              company: company,
              phone: phone,
              country: country,
            }
          );
          setIsLoading(true);
        } catch (err) {
          console.log(err);
        }
      }
    };

    return (
      <form
        onSubmit={handleStripPayment}
        className="card p-4 mx-auto"
        style={{ maxWidth: "500px" }}
      >
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
          className="btn btn-success mt-4"
        >
          Pay
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
          <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
            <h1 className="text-success">Payment Confirmed</h1>
            <p className="lead">
              Please check your email or junk mail for confirmation
            </p>
            <Link to="/" className="btn btn-danger w-100">
              Head Back
            </Link>
          </div>
        ) : (
          <>
            <div className="container" style={{ maxWidth: "500px" }}>
              <div className="card mx-auto">
                <div className="card-body">
                  <div className="card-title text-center">
                    <h2>Details</h2>
                  </div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Address</td>
                        <td>{address}</td>
                      </tr>
                      <tr>
                        <td>Company Name</td>
                        <td>{company}</td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>{phone}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{email}</td>
                      </tr>
                      <tr>
                        <td>Country</td>
                        <td>{country}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <h2 className="text-center">Billing Information</h2>

            <div className="container">
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
