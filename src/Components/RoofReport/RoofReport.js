import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
//google-maps-api
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
//components
import Maps from "./Maps/Maps";
import InputMask from "react-input-mask";
import Footer from "../Home/Foot";
//assets
import Logo from "../../assets/img/Logo.png";
import bgImg from "../../assets/img/bgImg.jpg";

//icons
import { IconContext } from "react-icons";
import * as FiIcon from "react-icons/fi";

export default function RoofReport() {
  const history = useHistory();

  const [form, setForm] = useState({
    company: "",
    phone: "",
    email: "",
    country: "",
  });
  const [checkForm, setCheckForm] = useState({
    address: false,
    company: false,
    phone: false,
    email: false,
    country: false,
    terms: false,
  });
  const [checkTerms, setCheckTerms] = useState(false);
  const [sub, setSub] = useState(false);
  const [checkSub, setCheckSub] = useState(false);
  const [msg, setMsg] = useState("");

  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (val) => {
    const results = await geocodeByAddress(val);
    const latLng = await getLatLng(results[0]);
    if (!address) {
      return;
    }
    setAddress(val);
    setCoords(latLng);
  };
  const handleCompany = (e) => {
    setForm({ ...form, company: e.target.value });
  };
  const handlePhone = (e) => {
    setForm({ ...form, phone: e.target.value });
  };
  const handleEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };
  const handleCountry = (e) => {
    setForm({ ...form, country: e.target.value });
  };
  const handleTermsCheck = (e) => {
    setCheckTerms(e.target.checked);
  };
  const handleSubCheck = (e) => {
    setSub(e.target.checked);
  };

  const checkFormFields = () => {
    let isValid = true;

    if (address === "") {
      setCheckForm({ checkForm, address: true });
      isValid = false;
    } else if (form.company === "") {
      setCheckForm({
        checkForm,
        company: true,
      });
      isValid = false;
    } else if (form.phone === "") {
      setCheckForm({
        checkForm,
        phone: true,
      });
      isValid = false;
    } else if (form.email === "") {
      setCheckForm({
        checkForm,
        email: true,
      });
      isValid = false;
    } else if (form.country === "") {
      setCheckForm({ checkForm, country: true });
      isValid = false;
    } else if (checkTerms === false) {
      setCheckForm({ checkForm, terms: true });
      isValid = false;
    } else {
      setCheckForm({
        address: false,
        company: false,
        phone: false,
        email: false,
        country: false,
        terms: false,
      });
      isValid = true;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = checkFormFields();
    //if use wants to sub

    if (isValid) {
      //checking if sub is checked
      if (sub === true) {
        if (form.email) {
          fetch(`/api/mailchimp?email=${form.email}`)
            .then((res) => {
              if (res.status === 400) {
                setCheckSub(false);
                setMsg("Email is already subscribed");
              } else {
                pushToBilling();
              }
            })
            .catch((err) => {
              setCheckSub(false);
              setMsg("Something went wrong. Try again!");
            });
          setTimeout(() => setMsg(""), 4000);
        }
      } else {
        pushToBilling();
      }
    }
  };
  function pushToBilling() {
    //pushing details to billing
    history.push("/billing", {
      address: address,
      company: form.company,
      phone: form.phone,
      email: form.email,
      country: form.country,
    });
  }

  useEffect(() => {
    handleSelect();
  }, [coords]);

  return (
    <div style={backStyle}>
      <div className="container-fluid">
        <Link to="/">
          <img src={Logo} alt="Roofbundle Logo" style={logoStyle} />
        </Link>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-md-6 mt-2">
              <Maps
                checkFormaddress={checkForm.address}
                lat={coords.lat}
                lng={coords.lng}
                address={address}
                handleAddress={setAddress}
                handleSelect={handleSelect}
              />
            </div>

            <div className="col-md-6 mt-2">
              {/*Billing Info Card */}
              <h2 style={{ fontFamily: "LatoBold" }}>Personal Information</h2>
              <div className="mt-3"></div>
              <div className="form-group">
                {checkForm.company ? (
                  <label className="small text-danger">
                    Company Name Required
                  </label>
                ) : null}
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Company Name"
                  onChange={handleCompany}
                  value={form.company}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                {checkForm.phone ? (
                  <label className="small text-danger">
                    Phone Number Required
                  </label>
                ) : null}
                <InputMask
                  mask="999-999-9999"
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Phone Number"
                  onChange={handlePhone}
                  value={form.phone}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                {checkForm.email ? (
                  <label className="small text-danger">Email Required</label>
                ) : null}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={handleEmail}
                  value={form.email}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                {checkForm.country ? (
                  <label className="small text-danger">Country Required</label>
                ) : null}
                <select
                  className="form-control"
                  id="country"
                  onChange={handleCountry}
                  value={form.country}
                >
                  <option value="">Country</option>
                  <option value="Canada">Canada</option>
                  <option value="United States">United States (USA)</option>
                </select>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheck"
                  onChange={handleTermsCheck}
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  <Link to="/terms" style={{ color: "#414141" }}>
                    I Accept the terms of use
                  </Link>
                </label>
                {checkForm.terms ? (
                  <p className="small text-danger">Terms Required</p>
                ) : null}
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="subCheck"
                  onChange={handleSubCheck}
                />
                <label
                  className="form-check-label"
                  htmlFor="subCheck"
                  style={{ color: "#414141" }}
                >
                  Sign up for updates
                </label>
                {checkSub ? (
                  <p className="small text-success">{msg}</p>
                ) : (
                  <p className="small text-danger">{msg}</p>
                )}
              </div>
            </div>
            <div className="col-md-12 mt-4 text-center">
              <button
                className="btn text-white w-50 mt-4"
                style={{ backgroundColor: "#e60029" }}
              >
                Proceed{" "}
                <IconContext.Provider value={{ size: "16px" }}>
                  <FiIcon.FiArrowRightCircle />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </form>
        <div style={{ marginTop: "100px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

const logoStyle = {
  maxWidth: "500px",
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
