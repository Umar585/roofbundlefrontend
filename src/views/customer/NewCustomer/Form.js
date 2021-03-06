import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Maps from "./Maps/Maps";
import Axios from "axios";
//google-maps-api
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import { CRow, CCol } from "@coreui/react";
import { IconContext } from "react-icons";
import * as HiIcon from "react-icons/hi";
import * as BsIcon from "react-icons/bs";

export default function Form() {
  const history = useHistory();
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    scope: "",
  });
  const [checkForm, setCheckForm] = useState({
    fname: false,
    lname: false,
    phone: false,
    email: false,
    scope: false,
    address: false,
  });

  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState({
    lat: null,
    lng: null,
  });
  const [errMsg, setErrMsg] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const handleSelect = async (val) => {
    const results = await geocodeByAddress(val);
    const latLng = await getLatLng(results[0]);
    if (!address) {
      return;
    }
    setAddress(val);
    setCoords(latLng);
  };

  const checkFormFields = () => {
    let isValid = true;

    if (form.fname === "") {
      setCheckForm({
        checkForm,
        fname: true,
      });
      isValid = false;
    } else if (form.lname === "") {
      setCheckForm({
        checkForm,
        lname: true,
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
    } else if (form.scope === "") {
      setCheckForm({
        checkForm,
        scope: true,
      });
      isValid = false;
    } else if (address === "") {
      setCheckForm({ checkForm, address: true });
      isValid = false;
    } else {
      setCheckForm(false);
      isValid = true;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = checkFormFields();
    if (isValid) {
      let email = localStorage.getItem("email");
      let lats = coords.lat;
      let lngs = coords.lng;
      Axios.post("/api/customer/adduser", { form, address, lats, lngs, email })
        .then((res) => {
          history.push("/");
        })
        .catch((error) => {
          console.log(error.response.data.error.code);
          if (error.response.data.error.code === 11000) {
            setEmailErr(true);
            setTimeout(() => {
              setEmailErr(false);
            }, 8000);
          } else if (error.response.data.success === false) {
            setErrMsg(true);
            setTimeout(() => {
              setErrMsg(false);
            }, 8000);
          }
        });
    }
  };
  return (
    <div>
      <form
        className="mx-auto mt-4"
        style={{ maxWidth: "1000px" }}
        onSubmit={handleSubmit}
      >
        {errMsg ? (
          <p className="text-danger">There was an error. Try again!</p>
        ) : null}
        {emailErr ? (
          <p className="text-danger">Customer Already Exists!</p>
        ) : null}
        <CRow>
          <CCol col="6" lg>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div
                  className="input-group-text"
                  style={{
                    backgroundColor: "#fff",
                    borderRight: "none",
                  }}
                >
                  <IconContext.Provider value={{ size: "20px" }}>
                    <HiIcon.HiUser
                      style={{
                        color: "#fff",
                        backgroundColor: "#414141",
                        padding: "3px",
                        borderRadius: "25px",
                      }}
                    />
                  </IconContext.Provider>
                </div>
              </div>
              <input
                type="text"
                className={
                  checkForm.fname
                    ? "form-control border-left-0 border-danger"
                    : "form-control border-left-0"
                }
                placeholder="First name"
                id="newCustFName"
                style={inputStyle}
                value={form.fname}
                onChange={(e) => setForm({ ...form, fname: e.target.value })}
              />
            </div>
          </CCol>

          <CCol col="6" lg>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div
                  className="input-group-text"
                  style={{
                    backgroundColor: "#fff",
                    borderRight: "none",
                  }}
                >
                  <IconContext.Provider value={{ size: "20px" }}>
                    <HiIcon.HiUser
                      style={{
                        color: "#fff",
                        backgroundColor: "#414141",
                        padding: "3px",
                        borderRadius: "25px",
                      }}
                    />
                  </IconContext.Provider>
                </div>
              </div>
              <input
                type="text"
                className={
                  checkForm.lname
                    ? "form-control border-left-0 border-danger"
                    : "form-control border-left-0"
                }
                placeholder="Last name"
                id="newCustLName"
                style={inputStyle}
                value={form.lname}
                onChange={(e) => setForm({ ...form, lname: e.target.value })}
              />
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol col="6" lg>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div
                  className="input-group-text"
                  style={{
                    backgroundColor: "#fff",
                    borderRight: "none",
                  }}
                >
                  <IconContext.Provider value={{ size: "20px" }}>
                    <HiIcon.HiPhone
                      style={{
                        color: "#fff",
                        backgroundColor: "#414141",
                        padding: "3px",
                        borderRadius: "25px",
                      }}
                    />
                  </IconContext.Provider>
                </div>
              </div>
              <InputMask
                mask="(999)-999-9999"
                type="text"
                className={
                  checkForm.phone
                    ? "form-control border-left-0 border-danger"
                    : "form-control border-left-0"
                }
                id="newCustPhone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inputStyle}
              />
            </div>
          </CCol>

          <CCol col="6" lg>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div
                  className="input-group-text"
                  style={{
                    backgroundColor: "#fff",
                    borderRight: "none",
                  }}
                >
                  <IconContext.Provider value={{ size: "20px" }}>
                    <HiIcon.HiMail
                      style={{
                        color: "#fff",
                        backgroundColor: "#414141",
                        padding: "3px",
                        borderRadius: "25px",
                      }}
                    />
                  </IconContext.Provider>
                </div>
              </div>
              <input
                type="email"
                className={
                  checkForm.email
                    ? "form-control border-left-0 border-danger"
                    : "form-control border-left-0"
                }
                placeholder="Email"
                id="newCustEmail"
                style={inputStyle}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol col="12" lg>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div
                  className="input-group-text"
                  style={{
                    backgroundColor: "#fff",
                    borderRight: "none",
                  }}
                >
                  <IconContext.Provider value={{ size: "20px" }}>
                    <BsIcon.BsDash
                      style={{
                        color: "#fff",
                        backgroundColor: "#414141",
                        padding: "3px",
                        marginRight: "-3",
                        borderRadius: "25px",
                      }}
                    />
                  </IconContext.Provider>
                </div>
              </div>
              <select
                className={
                  checkForm.scope
                    ? "form-control border-left-0 border-danger"
                    : "form-control border-left-0"
                }
                id="newCustScope"
                style={inputStyle}
                value={form.scope}
                onChange={(e) => setForm({ ...form, scope: e.target.value })}
              >
                <option value="">Scope</option>
                <option value="Re-Roof">Re-Roof</option>
                <option value="New Construction">New Construction</option>
                <option value="Insurance Claim">Insurance Claim</option>
              </select>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol col="12">
            <Maps
              checkFormaddress={checkForm.address}
              lat={coords.lat}
              lng={coords.lng}
              address={address}
              handleAddress={setAddress}
              handleSelect={handleSelect}
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12" className="mt-3">
            <input
              type="submit"
              className="form-control w-100"
              value="Add Customer"
              style={{
                backgroundColor: "#e60029",
                color: "#fff",
              }}
            />
          </CCol>
        </CRow>
        <div className="text-center mt-2">
          <Link to="/" style={{ color: "#8d8d8d", fontSize: "13px" }}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid #d8dbe0",
};
