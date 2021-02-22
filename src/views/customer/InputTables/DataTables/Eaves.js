import React, { useState, useEffect } from "react";

export default function Eaves(props) {
  const form = props.form;
  const setForm = props.setForm;
  const items = props.items;
  const expression = /^-?[0-9]+$/;

  const [formErr, setFormErr] = useState({
    adjOneStory: false,
    adjOneStoryInc: false,
  });

  const ftFormFields = (field) => {
    let isValid = true;
    if (field !== "") {
      if (!expression.test(field) || field > 999 || field < 0) {
        isValid = false;
      }
    }
    return isValid;
  };
  const incFormFields = (field) => {
    let isValid = true;
    if (field !== "") {
      if (!expression.test(field) || field > 11 || field < 0) {
        isValid = false;
      }
    }
    return isValid;
  };

  const inchConverter = (val) => {
    let newVal = 0;
    if (val === "1") {
      newVal = 0.08;
    } else if (val === "2") {
      newVal = 0.16;
    } else if (val === "3") {
      newVal = 0.25;
    } else if (val === "4") {
      newVal = 0.33;
    } else if (val === "5") {
      newVal = 0.41;
    } else if (val === "6") {
      newVal = 0.5;
    } else if (val === "7") {
      newVal = 0.58;
    } else if (val === "8") {
      newVal = 0.66;
    } else if (val === "9") {
      newVal = 0.75;
    } else if (val === "10") {
      newVal = 0.83;
    } else if (val === "11") {
      newVal = 0.91;
    }
    return newVal;
  };

  const reverseInchConverter = (val) => {
    let newVal = "";
    if (val === "08") {
      newVal = "1";
    } else if (val === "16") {
      newVal = "2";
    } else if (val === "25") {
      newVal = "3";
    } else if (val === "33") {
      newVal = "4";
    } else if (val === "41") {
      newVal = "5";
    } else if (val === "50") {
      newVal = "6";
    } else if (val === "58") {
      newVal = "7";
    } else if (val === "66") {
      newVal = "8";
    } else if (val === "75") {
      newVal = "9";
    } else if (val === "83") {
      newVal = "10";
    } else if (val === "91") {
      newVal = "11";
    } else {
      newVal = "0";
    }
    return newVal;
  };

  const [firstStoryEaves, setFirstStoryEaves] = useState([]);
  const [firstStoryEavesInc, setFirstStoryEavesInc] = useState("");

  const FirstStoryEaves = () => {
    var t = [];
    var y = [];
    var e = [];

    items.map(function (singleElement) {
      e.push(parseFloat(singleElement.stories));
      const index = e.indexOf(2);
      if (index > -1) {
        e.splice(index, 1);
        e.push(parseFloat(singleElement.eave));
        return e;
      }
      t.push(parseFloat(singleElement.eave));
      t.push(inchConverter(singleElement.eaveInc));
      return t;
    });
    //reverseInchConverter
    setFirstStoryEaves(Math.floor(t.reduce((a, b) => a + b, 0)));
    y = t.reduce((a, b) => a + b, 0).toFixed(2);
    var str = y.toString();
    str = str.substring(str.indexOf(".") + 1);
    setFirstStoryEavesInc(reverseInchConverter(str));
  };

  //2nd Stories Eaves
  const [secondStoryEaves, setSecondStoryEaves] = useState([]);
  const [secondStoryEavesInc, setSecondStoryEavesInc] = useState([]);
  const SecondStoryEaves = () => {
    var t = [];
    var e = [];
    var y = [];

    items.map(function (singleElement) {
      e.push(parseFloat(singleElement.stories));
      const index = e.indexOf(1);
      if (index > -1) {
        e.splice(index, 1);
        e.push(parseFloat(singleElement.eave));

        return e;
      }
      t.push(parseFloat(singleElement.eave));
      t.push(inchConverter(singleElement.eaveInc));
      return t;
    });

    setSecondStoryEaves(t.reduce((a, b) => a + b, 0).toFixed(0));
    y = t.reduce((a, b) => a + b, 0).toFixed(2);
    var str = y.toString();
    str = str.substring(str.indexOf(".") + 1);
    setSecondStoryEavesInc(reverseInchConverter(str));
  };

  useEffect(() => {
    FirstStoryEaves();
    SecondStoryEaves();
  });

  useEffect(() => {
    let isadjOneStoryValid = ftFormFields(form.adjOneStory);
    let isadjOneStoryIncValid = incFormFields(form.adjOneStoryInc);

    if (!isadjOneStoryValid) {
      setFormErr({ adjOneStory: true });
    } else if (!isadjOneStoryIncValid) {
      setFormErr({ adjOneStoryInc: true });
    } else {
      setFormErr(false);
    }
  }, [form.adjOneStory, form.adjOneStoryInc]);

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h6>Measurements</h6>
        </div>
        <div className="col-12">
          <CustomInput
            type="text"
            id="firstSE"
            placeholder="1st Story Eaves"
            label="1st Story Eaves"
            rightSideLabel="Ft.In"
            value={
              form.adjOneStory
                ? `${
                    firstStoryEaves + parseFloat(form.adjOneStory)
                  }' - ${firstStoryEavesInc}"`
                : `${firstStoryEaves}' - ${firstStoryEavesInc}"`
            }
            disabled={true}
          />
        </div>
        <div className="col-12">
          <CustomSplitInput
            type="number"
            id="adjOneStory"
            label="1st Story Eave Adjustment"
            error={formErr.adjOneStory}
            errorInc={formErr.adjOneStoryInc}
            value={form.adjOneStory}
            onChange={(e) =>
              setForm({
                ...form,
                adjOneStory: setToZero(e.target.value),
              })
            }
            idInc="adjOneStoryInc"
            valueInc={form.adjOneStoryInc}
            onChangeInc={(e) => {
              setForm({
                ...form,
                adjOneStoryInc: setToZero(e.target.value),
              });
            }}
          />
          {/*<CustomInput
            type="number"
            id="adjOneStory"
            label="1st Story Eave Adjustment"
            placeholder="1st Story Eave Adjustment"
            rightSideLabel="Ln.ft"
            value={form.adjOneStory}
            onChange={(e) =>
              setForm({
                ...form,
                adjOneStory: e.target.value,
              })
            }
          />*/}
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="text"
            id="secondSE"
            placeholder="2nd Story Eaves"
            label="2nd Story Eaves"
            rightSideLabel="Ft.In"
            value={
              form.adjOneStory
                ? `${
                    secondStoryEaves + parseFloat(form.adjTwoStory)
                  }' - ${secondStoryEavesInc}"`
                : `${secondStoryEaves}' - ${secondStoryEavesInc}"`
            }
            disabled={true}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="adjTwoStory"
            label="2nd Story Eave Adjustment"
            rightSideLabel="Ln.ft"
            value={form.adjTwoStory}
            onChange={(e) =>
              setForm({
                ...form,
                adjTwoStory: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="corners"
            label="Eavestrough Corners"
            rightSideLabel="Corners"
            value={form.corners}
            onChange={(e) =>
              setForm({
                ...form,
                corners: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="oneStoryDown"
            label="1st Story Downspouts"
            rightSideLabel="Downspouts"
            value={form.oneStoryDown}
            onChange={(e) =>
              setForm({
                ...form,
                oneStoryDown: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="twoStoryDown"
            label="2nd Story Downspouts"
            rightSideLabel="Downspouts"
            value={form.twoStoryDown}
            onChange={(e) =>
              setForm({
                ...form,
                twoStoryDown: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="extraExtensions"
            label="Downspout Extensions"
            rightSideLabel="Extensions"
            value={form.extraExtensions}
            onChange={(e) =>
              setForm({
                ...form,
                extraExtensions: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="elbow"
            label="Elbows"
            rightSideLabel="Elbows"
            disabled={true}
            value={
              form.twoStoryDown
                ? (parseFloat(form.twoStoryDown) +
                    parseFloat(form.oneStoryDown)) *
                  3
                : parseFloat(form.oneStoryDown) * 3
            }
          />
        </div>

        <div className="col-12 mt-3">
          <h6>Prices</h6>
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="oneStoryPrice"
            label="1st Story Eaves"
            sideLabel="$"
            rightSideLabel="Ln.ft"
            value={form.oneStoryPrice}
            onChange={(e) =>
              setForm({
                ...form,
                oneStoryPrice: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="twoStoryPrice"
            label="2nd Story Eaves"
            sideLabel="$"
            rightSideLabel="Ln.ft"
            value={form.twoStoryPrice}
            onChange={(e) =>
              setForm({
                ...form,
                twoStoryPrice: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="cornersPrice"
            label="Corner"
            sideLabel="$"
            rightSideLabel="Corner"
            value={form.cornersPrice}
            onChange={(e) =>
              setForm({
                ...form,
                cornersPrice: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="oneStoryDownPrice"
            label="1st Story Downspouts"
            sideLabel="$"
            rightSideLabel="Downspout"
            value={form.oneStoryDownPrice}
            onChange={(e) =>
              setForm({
                ...form,
                oneStoryDownPrice: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="twoStoryDownPrice"
            label="2nd Story Downspouts"
            sideLabel="$"
            rightSideLabel="Downspout"
            value={form.twoStoryDownPrice}
            onChange={(e) =>
              setForm({
                ...form,
                twoStoryDownPrice: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="extraExtensionsPrice"
            label="Downspout Extensions"
            sideLabel="$"
            rightSideLabel="Extensions"
            value={form.extraExtensionsPrice}
            onChange={(e) =>
              setForm({
                ...form,
                extraExtensionsPrice: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="difficultyPrice"
            label="Project Difficulty Fee"
            sideLabel="$"
            rightSideLabel="Difficulty"
            value={form.difficultyPrice}
            onChange={(e) =>
              setForm({
                ...form,
                difficultyPrice: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 mt-3">
          <h6>Total</h6>
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="totalOSP"
            //label="1stStoryEave + 1stStoryAdjustment * 1stStoryPrice"
            label="1st Story Eavestrough Total"
            sideLabel="$"
            disabled={true}
            value={
              form.oneStoryPrice
                ? form.adjOneStory
                  ? (firstStoryEaves + parseFloat(form.adjOneStory)) *
                    form.oneStoryPrice
                  : firstStoryEaves * form.oneStoryPrice
                : "0.00"
            }
          />
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="totalTSP"
            //label="2ndStoryEave + 2ndStoryAdjustment * 2ndStoryPrice"
            label="2nd Story Eavestrough Total"
            sideLabel="$"
            disabled={true}
            value={
              form.twoStoryPrice
                ? form.adjTwoStory
                  ? (secondStoryEaves + parseFloat(form.adjTwoStory)) *
                    form.twoStoryPrice
                  : secondStoryEaves * form.twoStoryPrice
                : "0.00"
            }
          />
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="totalCorner"
            //label="Corner * Corner Price"
            label="Eavestrough Corners Total"
            sideLabel="$"
            disabled={true}
            value={
              form.cornersPrice ? form.corners * form.cornersPrice : "0.00"
            }
          />
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="totalOSPD"
            //label="1stStoryDown * 1stStoryDownPrice"
            label="1st Story Downspouts Total"
            sideLabel="$"
            disabled={true}
            value={
              form.oneStoryDownPrice
                ? form.oneStoryDown * form.oneStoryDownPrice
                : "0.00"
            }
          />
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="totalTSPD"
            label="2nd Story Downspouts Total"
            sideLabel="$"
            disabled={true}
            value={
              form.twoStoryDownPrice
                ? form.twoStoryDown * form.twoStoryDownPrice
                : "0.00"
            }
          />
        </div>
        <div className="col-12 col-md-6 ">
          <CustomInput
            type="number"
            id="totalEXE"
            label="Downspouts Extension Total"
            sideLabel="$"
            disabled={true}
            value={
              form.extraExtensionsPrice
                ? form.extraExtensions * form.extraExtensionsPrice
                : "0.00"
            }
          />
        </div>
      </div>
    </div>
  );
}

const CustomSplitInput = (props) => {
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-12 mt-2">
          <span className="p2">{props.label}</span>
        </div>
        <div className="col-6">
          <input
            type={props.type}
            className="form-control"
            id={props.id}
            name={props.id}
            maxLength="4"
            placeholder="Ft"
            autoComplete="off"
            style={props.error ? leftInputErrorStyle : leftInputStyle}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
        <div className="col-6">
          <input
            type={props.type}
            className="form-control"
            id={props.idInc}
            maxLength="2"
            max="11"
            min="1"
            name={props.idInc}
            placeholder="In"
            autoComplete="off"
            style={props.errorInc ? rightInputErrorStyle : rightInputStyle}
            value={props.valueInc}
            onChange={props.onChangeInc}
          />
        </div>
      </div>
    </div>
  );
};

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
      <div className="input-group">
        {props.sideLabel ? (
          <div className="input-group-prepend">
            <div
              className="input-group-text"
              style={
                props.disabled
                  ? { backgroundColor: "#d8dbe0" }
                  : { backgroundColor: "#fff" }
              }
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
              style={
                props.disabled
                  ? {
                      backgroundColor: "#d8dbe0",
                      borderLeft: "none",
                    }
                  : {
                      backgroundColor: "#fff",
                      borderLeft: "none",
                    }
              }
            >
              {props.rightSideLabel}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const setToZero = (val) => {
  let newVal;
  if (val === "" || val === undefined) {
    newVal = "0";
  } else {
    newVal = val;
  }
  return newVal;
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

const leftInputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  borderRight: "0px",
  borderRadius: "0.25rem 0px 0px 0.25rem",
};
const leftInputErrorStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid #e60029",
  borderRight: "0px",
  borderRadius: "0.25rem 0px 0px 0.25rem",
};
const rightInputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  borderRadius: "0px 0.25rem 0.25rem 0px",
};
const rightInputErrorStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid #e60029",
  borderRadius: "0px 0.25rem 0.25rem 0px",
};
