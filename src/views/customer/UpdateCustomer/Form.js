import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import Maps from "./Maps/Maps";
//google-maps-api
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import InputMask from "react-input-mask";
import { CRow, CCol } from "@coreui/react";
import { IconContext } from "react-icons";
import * as HiIcon from "react-icons/hi";
import * as BsIcon from "react-icons/bs";

export default function Form(props) {
  const history = useHistory();
  const customer = props.customer;
  const { id } = useParams();

  const [form, setForm] = useState({
    fname: customer.fname,
    lname: customer.lname,
    phone: customer.phone,
    email: customer.email,
    scope: customer.scope,
  });
  const [checkForm, setCheckForm] = useState({
    fname: false,
    lname: false,
    phone: false,
    email: false,
    scope: false,
    address: false,
  });

  const [address, setAddress] = useState(customer.address);
  const [coords, setCoords] = useState({
    lat: customer.lats,
    lng: customer.lngs,
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
    let email = localStorage.getItem("email");
    let passToken = localStorage.getItem("passToken");
    const isValid = checkFormFields();
    if (isValid) {
      Axios.post("/api/customer/updateuser", {
        id,
        form,
        address,
        coords,
        email,
        passToken,
      })
        .then((res) => {
          history.push(`/file/${res.data.data._id}`);
        })
        .catch((err) => {
          console.log(err);
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
                mask="999-999-9999"
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
          <Link
            to={`/file/${id}`}
            style={{ color: "#8d8d8d", fontSize: "13px" }}
          >
            Cancel
          </Link>
        </div>
        {/*<CRow>
          <CCol sm="12" className="mt-3">
            <div className="list-inline text-right">
              <Link to="/" className="list-inline-item">
                Cancel
              </Link>
              <span className="mr-2">|</span>
              <input
                type="submit"
                className="form-control list-inline-item"
                value="Submit"
                style={{
                  maxWidth: "150px",
                  backgroundColor: "#e60029",
                  color: "#fff",
                }}
              />
            </div>
          </CCol>
        </CRow>*/}
      </form>
    </div>
  );
}

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid #d8dbe0",
};
