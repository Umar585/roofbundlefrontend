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
    if (field != "" && field !== undefined) {
      if (!expression.test(field) || field > 999 || field < -10) {
        isValid = false;
      }
    }
    return isValid;
  };
  const incFormFields = (field) => {
    let isValid = true;
    if (field !== "" && field !== undefined) {
      if (!expression.test(field) || field > 11 || field < -11) {
        isValid = false;
      }
    }
    return isValid;
  };
  const inchConverter = (val) => {
    let newVal = 0;
    if (val === "1") {
      newVal = 0.0833;
    } else if (val === "2") {
      newVal = 0.1666;
    } else if (val === "3") {
      newVal = 0.25;
    } else if (val === "4") {
      newVal = 0.3333;
    } else if (val === "5") {
      newVal = 0.4166;
    } else if (val === "6") {
      newVal = 0.5;
    } else if (val === "7") {
      newVal = 0.5833;
    } else if (val === "8") {
      newVal = 0.6666;
    } else if (val === "9") {
      newVal = 0.75;
    } else if (val === "10") {
      newVal = 0.8333;
    } else if (val === "11") {
      newVal = 0.9166;
    } else if (val === "-1") {
      newVal = -0.0833;
    } else if (val === "-2") {
      newVal = -0.1666;
    } else if (val === "-3") {
      newVal = -0.25;
    } else if (val === "-4") {
      newVal = -0.3333;
    } else if (val === "-5") {
      newVal = -0.4166;
    } else if (val === "-6") {
      newVal = -0.5;
    } else if (val === "-7") {
      newVal = -0.5833;
    } else if (val === "-8") {
      newVal = -0.6666;
    } else if (val === "-9") {
      newVal = -0.75;
    } else if (val === "-10") {
      newVal = -0.8333;
    } else if (val === "-11") {
      newVal = -0.9166;
    }
    return newVal;
  };
  const reverseInchConverter = (val) => {
    let newVal = 0;
    if (val <= "0834" && val > "0800") {
      newVal = 1;
    } else if (val <= "1667" && val > "0834") {
      newVal = 2;
    } else if (val <= "2500" && val > "1667") {
      newVal = 3;
    } else if (val <= "3334" && val > "2500") {
      newVal = 4;
    } else if (val <= "4167" && val > "3334") {
      newVal = 5;
    } else if (val <= "5000" && val > "4167") {
      newVal = 6;
    } else if (val <= "5834" && val > "5000") {
      newVal = 7;
    } else if (val <= "6667" && val > "5834") {
      newVal = 8;
    } else if (val <= "7500" && val > "6667") {
      newVal = 9;
    } else if (val <= "8334" && val > "7500") {
      newVal = 10;
    } else if (val <= "9166" && val > "8334") {
      newVal = 11;
    } else {
      newVal = 0;
    }
    return newVal;
  };
  //1st Sotries Eaves
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
    if (form.adjOneStoryInc !== "") {
      t.push(inchConverter(form.adjOneStoryInc));
    }
    setFirstStoryEaves(Math.floor(t.reduce((a, b) => a + b, 0)));
    y = t.reduce((a, b) => a + b, 0).toFixed(4);
    var str = y.toString();
    str = str.substring(str.indexOf(".") + 1);
    setFirstStoryEavesInc(reverseInchConverter(str));
    if (str === "9999") {
      setFirstStoryEaves(firstStoryEaves + 1);
    }
  };
  //2nd Stories Eaves
  const [secondStoryEaves, setSecondStoryEaves] = useState([]);
  const [secondStoryEavesInc, setSecondStoryEavesInc] = useState([]);
  const SecondStoryEaves = () => {
    var t = [];
    var y = [];
    var e = [];

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
    //reverseInchConverter
    if (form.adjTwoStoryInc !== "") {
      t.push(inchConverter(form.adjTwoStoryInc));
    }
    setSecondStoryEaves(Math.floor(t.reduce((a, b) => a + b, 0)));

    y = t.reduce((a, b) => a + b, 0).toFixed(4);
    var str = y.toString();
    str = str.substring(str.indexOf(".") + 1);
    setSecondStoryEavesInc(reverseInchConverter(str));
    if (str === "9999") {
      setSecondStoryEaves(secondStoryEaves + 1);
    }
  };

  useEffect(() => {
    FirstStoryEaves();
    SecondStoryEaves();
  }, [form]);

  useEffect(() => {
    ftFormFields(form.adjOneStory)
      ? setFormErr({ adjOneStory: false })
      : setFormErr({ adjOneStory: true });
  }, [form.adjOneStory]);

  useEffect(() => {
    incFormFields(form.adjOneStoryInc)
      ? setFormErr({ adjOneStoryInc: false })
      : setFormErr({ adjOneStoryInc: true });
  }, [form.adjOneStoryInc]);

  useEffect(() => {
    ftFormFields(form.adjTwoStory)
      ? setFormErr({ adjTwoStory: false })
      : setFormErr({ adjTwoStory: true });
  }, [form.adjTwoStory]);

  useEffect(() => {
    ftFormFields(form.adjTwoStoryInc)
      ? setFormErr({ adjTwoStoryInc: false })
      : setFormErr({ adjTwoStoryInc: true });
  }, [form.adjTwoStoryInc]);

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
            label="1st Story Eavethrough Adjustment"
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
        </div>
        <div className="col-12">
          <CustomInput
            type="text"
            id="secondSE"
            placeholder="2nd Story Eaves"
            label="2nd Story Eaves"
            rightSideLabel="Ft.In"
            value={
              form.adjTwoStory
                ? `${
                    secondStoryEaves + parseFloat(form.adjTwoStory)
                  }' - ${secondStoryEavesInc}"`
                : `${secondStoryEaves}' - ${secondStoryEavesInc}"`
            }
            disabled={true}
          />
        </div>
        <div className="col-12">
          <CustomSplitInput
            type="number"
            id="adjTwoStory"
            label="2nd Story Eavethrough Adjustment"
            error={formErr.adjTwoStory}
            errorInc={formErr.adjTwoStoryInc}
            value={form.adjTwoStory}
            onChange={(e) =>
              setForm({
                ...form,
                adjTwoStory: setToZero(e.target.value),
              })
            }
            idInc="adjTwoStoryInc"
            valueInc={form.adjTwoStoryInc}
            onChangeInc={(e) => {
              setForm({
                ...form,
                adjTwoStoryInc: setToZero(e.target.value),
              });
            }}
          />
        </div>
        <div className="col-12">
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
        <div className="col-12">
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
        <div className="col-12">
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
        <div className="col-12">
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
        <div className="col-12">
          <CustomInput
            type="number"
            id="elbow"
            label="Elbows"
            rightSideLabel="Elbows"
            value={form.elbows}
            onChange={(e) =>
              setForm({
                ...form,
                elbows: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 mt-3">
          <h6>Prices</h6>
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="oneStoryPrice"
            label="1st Story Eavestroughs"
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
        <div className="col-12">
          <CustomInput
            type="number"
            id="twoStoryPrice"
            label="2nd Story Eavestroughs"
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
        <div className="col-12">
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
        <div className="col-12">
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
        <div className="col-12">
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
        <div className="col-12">
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
        <div className="col-12">
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
        <div className="col-12">
          <CustomInput
            type="number"
            id="totalOSP"
            //label="1stStoryEave + 1stStoryAdjustment * 1stStoryPrice"
            label="1st Story Eavestrough Total"
            sideLabel="$"
            disabled={true}
            value={
              form.oneStoryPrice
                ? (
                    (firstStoryEaves +
                      inchConverter(firstStoryEavesInc.toString())) *
                    form.oneStoryPrice
                  ).toFixed(2)
                : "0.00"
            }
          />
        </div>
        <div className="col-12">
          <CustomInput
            type="number"
            id="totalTSP"
            //label="2ndStoryEave + 2ndStoryAdjustment * 2ndStoryPrice"
            label="2nd Story Eavestrough Total"
            sideLabel="$"
            disabled={true}
            value={
              form.twoStoryPrice
                ? (
                    (secondStoryEaves +
                      inchConverter(secondStoryEavesInc.toString())) *
                    form.twoStoryPrice
                  ).toFixed(2)
                : "0.00"
            }
          />
        </div>
        <div className="col-12">
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
        <div className="col-12">
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
        <div className="col-12">
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
        <div className="col-12">
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
            maxLength={3}
            min={1}
            max={999}
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
            maxLength={2}
            max={11}
            min={1}
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
    newVal = "";
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
