import React, { useEffect, useState } from "react";

//style sheet
import "../style.scss";

export default function AccessoriesTable(props) {
  const form = props.form;
  const items = props.items;
  const pricesData = props.pricesData;
  const [totalEaves, setTotalEaves] = useState([]);
  const [totalDrip, setTotalDrip] = useState([]);
  const [totalUnderLayment, setTotalUnderLayment] = useState([]);

  const getPitchValue = (val) => {
    let p = 0;
    if (val === "1") {
      p = 1.003;
    } else if (val === "2") {
      p = 1.014;
    } else if (val === "3") {
      p = 1.031;
    } else if (val === "4") {
      p = 1.054;
    } else if (val === "5") {
      p = 1.083;
    } else if (val === "6") {
      p = 1.118;
    } else if (val === "7") {
      p = 1.158;
    } else if (val === "8") {
      p = 1.202;
    } else if (val === "9") {
      p = 1.25;
    } else if (val === "10") {
      p = 1.3;
    } else if (val === "11") {
      p = 1.357;
    } else if (val === "12") {
      p = 1.414;
    } else if (val === "13") {
      p = 1.474;
    } else if (val === "14") {
      p = 1.537;
    } else if (val === "15") {
      p = 1.601;
    } else if (val === "16") {
      p = 1.667;
    } else if (val === "17") {
      p = 1.734;
    } else if (val === "18") {
      p = 1.803;
    }
    return p;
  };
  const getBasicInstallValue = (val) => {
    let p = 0;
    if (val === "1") {
      p = 16;
    } else if (val === "2") {
      p = 15;
    } else if (val === "3") {
      p = 15;
    } else if (val === "4") {
      p = 14;
    } else if (val === "5") {
      p = 14;
    } else if (val === "6") {
      p = 16;
    } else if (val === "7") {
      p = 21;
    } else if (val === "8") {
      p = 25;
    } else if (val === "9") {
      p = 30;
    } else if (val === "10") {
      p = 32;
    } else if (val === "11") {
      p = 35;
    } else if (val === "12") {
      p = 36;
    } else if (val === "13") {
      p = 42;
    } else if (val === "14") {
      p = 48;
    } else if (val === "15") {
      p = 49;
    } else if (val === "16") {
      p = 50;
    } else if (val === "17") {
      p = 51;
    } else if (val === "18") {
      p = 52;
    }
    return p;
  };
  //totaleaves + totalValley / 60
  function IceandWaterFunc() {
    var t = [];
    var p = [];
    items.map(function (singleElement) {
      t.push(parseFloat(singleElement.eave));
      p.push(parseFloat(singleElement.valleyRM));
    });
    var x = t.reduce((a, b) => a + b, 0);
    var y = p.reduce((a, b) => a + b, 0);
    return setTotalEaves(((x + y) / 60).toFixed(1));
  }
  //totalEaves / 9.5
  function DripFunc() {
    var t = [];
    items.map(function (singleElement) {
      t.push(parseFloat(singleElement.eave));
    });
    var x = t.reduce((a, b) => a + b, 0);
    return setTotalDrip((x / 60).toFixed(1));
  }
  //totalbundles / 30
  function UnderLaymentFunc() {
    var t = [];
    items.map((singleElement) => {
      var x =
        ((getPitchValue(singleElement.pitch) *
          singleElement.lengthGrnd *
          singleElement.width *
          1.06) /
          100) *
          3 +
        singleElement.valleyRM * 0.06;
      t.push(x);
      //return t.reduce((a, b) => a + b, 0);
    });
    var y = t.reduce((a, b) => a + b, 0);
    return setTotalUnderLayment((y / 30).toFixed(1));
  }
  //ridgevent total rolls = ridgeVent / 19
  //ice&waterMC = ice&waterWPR * priceData.iceWater
  //dripMC = DripWPR * pricesData.dripEdge
  //ventsMC = vent(replace + new) * prices.roofVent
  //ridgeVentMC = whole number of ridge vent rolls
  //pStackMC = pricesData.pStack * (one+two+three+four)
  //iceand water + underlayment * rooftopDelivery

  //MC Totals
  const iceWaterMC = (Math.ceil(totalEaves) * pricesData.iceWater).toFixed(2);
  const dripMC = (Math.ceil(totalDrip) * pricesData.dripEdge).toFixed(2);
  const ventMC = (
    (parseFloat(form.replace) + parseFloat(form.new)) *
    pricesData.roofVent
  ).toFixed(2);
  const ridgeVentMC = Math.ceil(
    ((form.basicRidge / 19) * pricesData.ridgeVent).toFixed(2)
  );
  const pStackMC = (
    (parseFloat(form.oneMat) +
      parseFloat(form.twoMat) +
      parseFloat(form.threeMat) +
      parseFloat(form.fourMat)) *
    pricesData.plumbingStackMat
  ).toFixed(2);
  const underLaymentMC = (
    Math.ceil(totalUnderLayment) * pricesData.underLayment
  ).toFixed(2);
  const deliveryMC = (
    (Math.ceil(totalEaves) + Math.ceil(totalUnderLayment)) *
    pricesData.roofTopCost
  ).toFixed(2);
  const totalMC = (
    parseFloat(iceWaterMC) +
    parseFloat(dripMC) +
    parseFloat(ventMC) +
    parseFloat(ridgeVentMC) +
    parseFloat(pStackMC) +
    parseFloat(underLaymentMC) +
    parseFloat(deliveryMC)
  ).toFixed(2);

  useEffect(() => {
    IceandWaterFunc();
    DripFunc();
    UnderLaymentFunc();
  });
  return (
    <div>
      <div className="row">
        <div className="col-12 mt-3">
          <h6>Pieces/Rolls</h6>
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="iceWPR"
            label="Ice & Water"
            rightSideLabel="Rolls"
            disabled={true}
            value={totalEaves}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="dripPR"
            label="Drip"
            rightSideLabel="Pcs"
            disabled={true}
            value={totalDrip}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="ridgeVentPR"
            label="Ridge Vent"
            rightSideLabel="Rolls"
            disabled={true}
            value={(form.basicRidge / 19).toFixed(1)}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="underlaymentPR"
            label="Underlayment"
            rightSideLabel="Rolls"
            disabled={true}
            value={totalUnderLayment}
          />
        </div>

        <div className="col-12 mt-3">
          <h6>Whole Pieces/Rolls</h6>
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="iceWPR"
            label="Ice & Water"
            rightSideLabel="Rolls"
            disabled={true}
            value={Math.ceil(totalEaves)}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="dripWPR"
            label="Drip"
            rightSideLabel="Pcs"
            disabled={true}
            value={Math.ceil(totalDrip)}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="ridgeVentWPR"
            label="Ridge Vent"
            rightSideLabel="Rolls"
            disabled={true}
            value={Math.ceil((form.basicRidge / 19).toFixed(1))}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="underlaymentWPR"
            label="Underlayment"
            rightSideLabel="Rolls"
            disabled={true}
            value={Math.ceil(totalUnderLayment)}
          />
        </div>

        <div className="col-12 mt-3">
          <h6>Material Cost</h6>
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="iceMC"
            label="Ice & Water"
            sideLabel="$"
            disabled={true}
            value={iceWaterMC}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="dripMC"
            label="Drip"
            sideLabel="$"
            disabled={true}
            value={dripMC}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="ventMC"
            label="Vents"
            sideLabel="$"
            disabled={true}
            value={ventMC}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="ridgeVentMC"
            label="Ridge Vent"
            sideLabel="$"
            disabled={true}
            value={ridgeVentMC}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="pStackMC"
            label="Plumbing Stack"
            sideLabel="$"
            disabled={true}
            value={pStackMC}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="underlaymentMC"
            label="Underlayment"
            sideLabel="$"
            disabled={true}
            value={underLaymentMC}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="deliveryMC"
            label="Delivery"
            sideLabel="$"
            disabled={true}
            value={deliveryMC}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="totalMC"
            label="Total"
            sideLabel="$"
            disabled={true}
            value={totalMC}
          />
        </div>

        <div className="col-12 mt-3">
          <h6>Labour Cost</h6>
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="iceLC"
            label="Ice & Water"
            sideLabel="$"
            disabled={true}
            value={"33.33"}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="dripLC"
            label="Drip"
            sideLabel="$"
            disabled={true}
            value={"21.05"}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="ventLC"
            label="Vents"
            sideLabel="$"
            disabled={true}
            value={"20.05"}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="ridgeVentLC"
            label="Ridge Vent"
            sideLabel="$"
            disabled={true}
            value={"0.00"}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="pStackLC"
            label="P Stack"
            sideLabel="$"
            disabled={true}
            value={"10.00"}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="underlaymentLC"
            label="Underlayment"
            sideLabel="$"
            disabled={true}
            value={"0.00"}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="chimneyFlashingLC"
            label="Chimney Flashing"
            sideLabel="$"
            disabled={true}
            value={"0.00"}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="wallFlashingLC"
            label="Wall Flashing"
            sideLabel="$"
            disabled={true}
            value={"0.00"}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="satelliteLC"
            label="Satellite"
            sideLabel="$"
            disabled={true}
            value={"15.00"}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="extraLC"
            label="Extras"
            sideLabel="$"
            disabled={true}
            value={"0.00"}
          />
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="totalLC"
            label="Total"
            sideLabel="$"
            disabled={true}
            value={"99.39"}
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
