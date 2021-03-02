import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Profits() {
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
    if (pricesData.length === 0) {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 4000);
    } else {
      if (checkForm()) {
        Axios.post("/api/price/profitspriceupdate", {
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

    if (!checkFields(pricesData.pitchTwo)) {
      setDataErr({ pitchTwo: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchTwoFive)) {
      setDataErr({ pitchTwoFive: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchThree)) {
      setDataErr({ pitchThree: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchFour)) {
      setDataErr({ pitchFour: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchFive)) {
      setDataErr({ pitchFive: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchSix)) {
      setDataErr({ pitchSix: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchSeven)) {
      setDataErr({ pitchSeven: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchEight)) {
      setDataErr({ pitchEight: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchNine)) {
      setDataErr({ pitchNine: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchTen)) {
      setDataErr({ pitchTen: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchEleven)) {
      setDataErr({ pitchEleven: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchTwelve)) {
      setDataErr({ pitchTwelve: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchThirteen)) {
      setDataErr({ pitchThirteen: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchFourteen)) {
      setDataErr({ pitchFourteen: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchFifteen)) {
      setDataErr({ pitchFifteen: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchSixteen)) {
      setDataErr({ pitchSixteen: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchSeventeen)) {
      setDataErr({ pitchSeventeen: true });
      isValid = false;
    } else if (!checkFields(pricesData.pitchEighteen)) {
      setDataErr({ pitchEighteen: true });
      isValid = false;
    } else {
      setDataErr(false);
      isValid = true;
    }
    return isValid;
  };

  useEffect(() => {
    Axios.post("/api/price/profits", { email, passToken }).then((res) => {
      setPricesData(res.data.data[0]);
    });
  }, [email, passToken]);

  useEffect(() => {
    checkForm();
  }, [pricesData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row no-gutters">
          <div className="col-12">
            <h6>Pitch</h6>
          </div>
          <div className="col-4 gb-pr">
            <CustomInput
              type="number"
              id="pitchTwo"
              label={dataErr.pitchTwo ? "Invalid" : "2/12"}
              // error={dataErr.pitchTwo}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchTwo}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchTwo: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pr gb-pl">
            <CustomInput
              type="number"
              id="pitchTwoFive"
              label={dataErr.pitchTwoFive ? "Invalid" : "2.5/12"}
              //error={dataErr.pitchTwoFive}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchTwoFive}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchTwoFive: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pl">
            <CustomInput
              type="number"
              id="pitchThree"
              //label="3/12"
              //error={dataErr.pitchThree}
              label={dataErr.pitchThree ? "Invalid" : "3/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchThree}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchThree: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pr">
            <CustomInput
              type="number"
              id="pitchFour"
              //label="4/12"
              //error={dataErr.pitchFour}
              label={dataErr.pitchFour ? "Invalid" : "3/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchFour}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchFour: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pr gb-pl">
            <CustomInput
              type="number"
              id="pitchFive"
              //label="5/12"
              //error={dataErr.pitchFive}
              label={dataErr.pitchFive ? "Invalid" : "5/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchFive}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchFive: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pl">
            <CustomInput
              type="number"
              id="pitchSix"
              //label="6/12"
              //error={dataErr.pitchSix}
              label={dataErr.pitchSix ? "Invalid" : "6/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchSix}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchSix: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pr">
            <CustomInput
              type="number"
              id="pitchSeven"
              //label="7/12"
              //error={dataErr.pitchSeven}
              label={dataErr.pitchSeven ? "Invalid" : "7/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchSeven}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchSeven: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pl gb-pr">
            <CustomInput
              type="number"
              id="pitchEight"
              //label="8/12"
              //error={dataErr.pitchEight}
              label={dataErr.pitchEight ? "Invalid" : "8/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchEight}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchEight: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pl">
            <CustomInput
              type="number"
              id="pitchNine"
              //label="9/12"
              //error={dataErr.pitchNine}
              label={dataErr.pitchNine ? "Invalid" : "9/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchNine}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchNine: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pr">
            <CustomInput
              type="number"
              id="pitchTen"
              //label="10/12"
              //error={dataErr.pitchTen}
              label={dataErr.pitchTen ? "Invalid" : "10/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchTen}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchTen: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pl gb-pr">
            <CustomInput
              type="number"
              id="pitchEleven"
              //label="11/12"
              //error={dataErr.pitchEleven}
              label={dataErr.pitchEleven ? "Invalid" : "11/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchEleven}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchEleven: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pl">
            <CustomInput
              type="number"
              id="pitchTwelve"
              //label="12/12"
              //error={dataErr.pitchTwelve}
              label={dataErr.pitchTwelve ? "Invalid" : "12/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchTwelve}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchTwelve: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pr">
            <CustomInput
              type="number"
              id="pitchThirteen"
              //label="13/12"
              //error={dataErr.pitchThirteen}
              label={dataErr.pitchThirteen ? "Invalid" : "13/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchThirteen}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchThirteen: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pl gb-pr">
            <CustomInput
              type="number"
              id="pitchFourteen"
              //label="14/12"
              //error={dataErr.pitchFourteen}
              label={dataErr.pitchFourteen ? "Invalid" : "14/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchFourteen}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchFourteen: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pl">
            <CustomInput
              type="number"
              id="pitchFifteen"
              //label="15/12"
              // error={dataErr.pitchFifteen}
              label={dataErr.pitchFifteen ? "Invalid" : "15/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchFifteen}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchFifteen: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pr">
            <CustomInput
              type="number"
              id="pitchSixteen"
              //label="16/12"
              //error={dataErr.pitchSixteen}
              label={dataErr.pitchSixteen ? "Invalid" : "16/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchSixteen}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchSixteen: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pl gb-pr">
            <CustomInput
              type="number"
              id="pitchSeventeen"
              //label="17/12"
              //error={dataErr.pitchSeventeen}
              label={dataErr.pitchSeventeen ? "Invalid" : "17/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchSeventeen}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchSeventeen: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 gb-pl">
            <CustomInput
              type="number"
              id="pitchEighteen"
              //label="18/12"
              //error={dataErr.pitchEighteen}
              label={dataErr.pitchEighteen ? "Invalid" : "18/12"}
              sideLabel="$"
              placeholder="0"
              value={pricesData.pitchEighteen}
              onChange={(e) =>
                setPricesData({
                  ...pricesData,
                  pitchEighteen: e.target.value,
                })
              }
            />
          </div>
          <div className="col-12 mt-3">
            {err ? (
              <p className="text-center text-danger">Enter at least 1 field</p>
            ) : null}
            {msg.success ? (
              <p className="text-center text-success">Profit costs updated</p>
            ) : null}
            {msg.failed ? (
              <p className="text-center text-danger">
                Profit costs failed to update
              </p>
            ) : null}
            <input
              type="submit"
              value="Complete Profits"
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
    <div className="mt-2 text-center">
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
      </div>
      <label
        className="p7"
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
