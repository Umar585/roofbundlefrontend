import React, { useState, useEffect } from "react";

export default function Eaves(props) {
  const form = props.form;
  const setForm = props.setForm;
  const items = props.items;

  const [firstStoryEaves, setFirstStoryEaves] = useState([]);
  const FirstStoryEaves = () => {
    var t = [];
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
      return t;
    });
    setFirstStoryEaves(t.reduce((a, b) => a + b, 0));
  };

  //2nd Stories Eaves
  const [secondStoryEaves, setSecondStoryEaves] = useState([]);
  const SecondStoryEaves = () => {
    var t = [];
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
      return t;
    });

    setSecondStoryEaves(t.reduce((a, b) => a + b, 0));
  };

  useEffect(() => {
    FirstStoryEaves();
    SecondStoryEaves();
  });

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h6>Measurements</h6>
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="firstSE"
            label="1st Story Eaves"
            disabled={true}
            rightSideLabel="Ln.ft"
            value={
              form.adjOneStory
                ? firstStoryEaves + parseFloat(form.adjOneStory)
                : firstStoryEaves
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="adjOneStory"
            label="1st Story Eave Adjustment"
            rightSideLabel="Ln.ft"
            value={form.adjOneStory}
            onChange={(e) =>
              setForm({
                ...form,
                adjOneStory: e.target.value,
              })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="secondSE"
            label="2nd Story Eaves"
            rightSideLabel="Ln.ft"
            disabled={true}
            value={
              form.adjTwoStory
                ? secondStoryEaves + parseFloat(form.adjTwoStory)
                : secondStoryEaves
            }
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

const CustomInput = (props) => {
  return (
    <div className="mt-2">
      <label
        htmlFor={props.id}
        style={{ marginBottom: "-1px", marginTop: "5px" }}
      >
        {props.label}
      </label>
      <div className="input-group mb-2">
        {props.sideLabel ? (
          <div className="input-group-prepend">
            <div
              className="input-group-text"
              style={
                props.disabled
                  ? {
                      backgroundColor: "#d8dbe0",
                    }
                  : {
                      backgroundColor: "#fff",
                    }
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
          placeholder="0"
          autoComplete="off"
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
                  : { backgroundColor: "#fff", borderLeft: "none" }
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
