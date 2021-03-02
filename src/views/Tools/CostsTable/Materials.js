import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Materials() {
  const [pricesData, setPricesData] = useState([]);
  const [dataErr, setDataErr] = useState([]);
  const [err, setErr] = useState(false);
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const [msg, setMsg] = useState([]);

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
    if (pricesData === "") {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 4000);
    } else {
      if (checkForm()) {
        Axios.post("/api/price/materialpriceupdate", {
          pricesData,
          email,
          passToken,
        })
          .then((res) => {
            setMsg({ ...msg, success: true });
            setTimeout(() => {
              setMsg({ ...msg, success: false });
            }, 4000);
            console.log(res);
          })
          .catch((error) => {
            setMsg({ ...msg, failed: true });
            setTimeout(() => {
              setMsg({ ...msg, failed: false });
            }, 4000);
            console.log(error);
          });
      }
    }
  };

  const checkForm = () => {
    let isValid = true;

    if (!checkFields(pricesData.groundDropCost)) {
      setDataErr({ groundDropCost: true });
      isValid = false;
    } else if (!checkFields(pricesData.roofTopCost)) {
      setDataErr({ roofTopCost: true });
      isValid = false;
    } else if (!checkFields(pricesData.bundle)) {
      setDataErr({ bundle: true });
      isValid = false;
    } else if (!checkFields(pricesData.starterBundle)) {
      setDataErr({ starterBundle: true });
      isValid = false;
    } else if (!checkFields(pricesData.cappingBundle)) {
      setDataErr({ cappingBundle: true });
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
    Axios.post("/api/price/materials", { email, passToken }).then((res) => {
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
            <h6>Materials</h6>
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="groundDropDeliveryCost"
              label="Ground Drop Delivery"
              error={dataErr.groundDropCost}
              sideLabel="$"
              rightSideLabel="Bundle"
              value={pricesData.groundDropCost}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  groundDropCost: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="roofTopDeliveryCost"
              label="Rooftop Delivery"
              error={dataErr.roofTopCost}
              sideLabel="$"
              rightSideLabel="Bundle"
              value={pricesData.roofTopCost}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  roofTopCost: e.target.value,
                })
              }
            />
          </div>

          <div className="col-12">
            <CustomInput
              type="number"
              step="any"
              id="bundlePrice"
              label="Laminated Shingle"
              error={dataErr.bundle}
              sideLabel="$"
              rightSideLabel="Bundles"
              value={pricesData.bundle}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  bundle: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="starterBundlePrice"
              label="Starter Shingle"
              error={dataErr.starterBundle}
              sideLabel="$"
              rightSideLabel="Bundle"
              value={pricesData.starterBundle}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  starterBundle: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="cappingBundlePrice"
              label="Hip & Ridge Shingle"
              sideLabel="$"
              error={dataErr.cappingBundle}
              rightSideLabel="Bundle"
              value={pricesData.cappingBundle}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  cappingBundle: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="iceWater"
              label="Ice & Water Protection"
              error={dataErr.iceWater}
              sideLabel="$"
              rightSideLabel="Roll"
              value={pricesData.iceWater}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  iceWater: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="underLayment"
              label="Underlayment"
              error={dataErr.underLayment}
              sideLabel="$"
              rightSideLabel="Roll"
              value={pricesData.underLayment}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  underLayment: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="dripEdge"
              label="Drip Edge"
              error={dataErr.dripEdge}
              value={pricesData.dripEdge}
              sideLabel="$"
              rightSideLabel="Pcs"
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  dripEdge: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="ridgeVent"
              label="Ridge Vent"
              error={dataErr.ridgeVent}
              sideLabel="$"
              rightSideLabel="Roll"
              value={pricesData.ridgeVent}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  ridgeVent: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="roofVent"
              label="Roof Vent"
              error={dataErr.roofVent}
              sideLabel="$"
              rightSideLabel="Pcs"
              value={pricesData.roofVent}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  roofVent: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="plumbingStackMat"
              label="Plumbing Stack Mat"
              error={dataErr.plumbingStackMat}
              sideLabel="$"
              rightSideLabel="Pcs"
              value={pricesData.plumbingStackMat}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  plumbingStackMat: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12">
            <CustomInput
              type="number"
              id="binCost"
              label="Garbage Bin"
              error={dataErr.binCost}
              sideLabel="$"
              rightSideLabel="Bin"
              value={pricesData.binCost}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  binCost: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12 mt-3">
            {err ? (
              <p className="text-center text-danger">Enter at least 1 field</p>
            ) : null}
            {msg.success ? (
              <p className="text-center text-success">Material costs updated</p>
            ) : null}
            {msg.failed ? (
              <p className="text-center text-danger">
                Material costs failed to update
              </p>
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
