import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Labour() {
  const [pricesData, setPricesData] = useState([]);
  const [dataErr, setDataErr] = useState([]);
  const [err, setErr] = useState(false);
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");

  const checkFields = (field) => {
    let isValid = true;
    if (field !== "") {
      if (field > 999 || field < 0) {
        isValid = false;
      } else {
        isValid = true;
      }
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pricesData.length === 0) {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 4000);
    } else {
      if (checkForm()) {
        Axios.post("/api/price/labourpriceupdate", {
          pricesData,
          email,
          passToken,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  const checkForm = () => {
    let isValid = true;

    if (!checkFields(pricesData.bundle)) {
      setDataErr({ bundle: true });
      isValid = false;
    } else if (!checkFields(pricesData.starterBundle)) {
      setDataErr({ starterBundle: true });
      isValid = false;
    } else if (!checkFields(pricesData.cappingBundle)) {
      setDataErr({ cappingBundle: true });
      isValid = false;
    } else if (!checkFields(pricesData.roofTopCost)) {
      setDataErr({ roofTopCost: true });
      isValid = false;
    } else if (!checkFields(pricesData.iceWater)) {
      setDataErr({ iceWater: true });
      isValid = false;
    } else if (!checkFields(pricesData.underLayment)) {
      setDataErr({ underLayment: true });
      isValid = false;
    } else if (!checkFields(pricesData.dripEdge)) {
      setDataErr({ dripEdge: true });
      isValid = false;
    } else if (!checkFields(pricesData.ridgeVent)) {
      setDataErr({ ridgeVent: true });
      isValid = false;
    } else if (!checkFields(pricesData.roofVent)) {
      setDataErr({ roofVent: true });
      isValid = false;
    } else if (!checkFields(pricesData.plumbingStackMat)) {
      setDataErr({ plumbingStackMat: true });
      isValid = false;
    } else if (!checkFields(pricesData.binCost)) {
      setDataErr({ binCost: true });
      isValid = false;
    } else {
      setDataErr(false);
      isValid = true;
    }
    return isValid;
  };

  useEffect(() => {
    Axios.post("/api/price/labours", { email, passToken }).then((res) => {
      setPricesData(res.data.data[0]);
    });
  }, [email, passToken]);

  useEffect(() => {
    checkForm();
  }, [pricesData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <h6>Labour</h6>
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="iceLC"
              label="Ice & Water"
              error={dataErr.iceWaterLabour}
              sideLabel="$"
              value={pricesData.iceWaterLabour}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  iceWaterLabour: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="dripLC"
              label="Drip Edge"
              error={dataErr.dripEdgeLabour}
              sideLabel="$"
              value={pricesData.dripEdgeLabour}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  dripEdgeLabour: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="ventLC"
              label="Vents"
              error={dataErr.ventLabour}
              sideLabel="$"
              value={pricesData.ventLabour}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  ventLabour: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="ridgeVentLC"
              label="Ridge Vent"
              error={dataErr.ridgeVentLabour}
              sideLabel="$"
              value={pricesData.ridgeVentLabour}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  ridgeVentLabour: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="pStackLC"
              label="Plumbing Stack Mat"
              error={dataErr.plumbingStackMatLabour}
              sideLabel="$"
              value={pricesData.plumbingStackMatLabour}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  plumbingStackMatLabour: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="underlaymentLC"
              label="Underlayment"
              error={dataErr.underLaymentLabour}
              sideLabel="$"
              value={pricesData.underLaymentLabour}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  underLaymentLabour: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="chimneyFlashingLC"
              label="Chimney Flashing"
              error={dataErr.chimneyFlashingLabour}
              sideLabel="$"
              value={pricesData.chimneyFlashingLabour}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  chimneyFlashingLabour: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="wallFlashingLC"
              label="Wall Flashing"
              error={dataErr.wallFlashingLabour}
              sideLabel="$"
              value={pricesData.wallFlashingLabour}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  wallFlashingLabour: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="satelliteLC"
              label="Satellite"
              error={dataErr.satelliteLabour}
              sideLabel="$"
              value={pricesData.satelliteLabour}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  satelliteLabour: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12 mt-3">
            {err ? (
              <p className="text-center text-danger">Enter at least 1 field</p>
            ) : null}
            <input
              type="submit"
              value="Complete Materials"
              className="btn w-100"
              style={btnStyle}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

const CustomInput = (props) => {
  return (
    <div className="mt-2">
      <label
        className="p2"
        style={{
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          marginBottom: "-2px",
        }}
      >
        {props.label}
      </label>
      {props.error ? (
        <label
          className="p2 float-right"
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            marginBottom: "-2px",
            color: "#e60029",
          }}
        >
          Invalid
        </label>
      ) : null}
      <div className="input-group">
        {props.sideLabel ? (
          <div className="input-group-prepend">
            <div
              className="input-group-text"
              style={{ backgroundColor: "#fff" }}
            >
              {props.sideLabel}
            </div>
          </div>
        ) : null}
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          name={props.id}
          step=".01"
          placeholder={props.placeholder}
          style={props.sideLabel ? moneyInputStyle : inputStyle}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
        />
        {props.rightSideLabel ? (
          <div className="input-group-prepend">
            <div
              className="input-group-text rounded-right"
              style={{
                backgroundColor: "#fff",
                borderLeft: "none",
              }}
            >
              {props.rightSideLabel}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const btnStyle = {
  outline: "none",
  boxShadow: "none",
  border: "none",
  backgroundColor: "#e60029",
  color: "#fff",
};

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};

const moneyInputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  borderLeft: "none",
  paddingLeft: "0px",
  marginLeft: "-11px",
};
