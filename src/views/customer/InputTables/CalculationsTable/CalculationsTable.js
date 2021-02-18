import React, { useState, useEffect } from "react";
import CalculationsFaces from "./CalculationsFaces/CalculationsFaces";
import { CCollapse } from "@coreui/react";
//style sheet
import "../style.scss";

export default function CalculationsTable(props) {
  const items = props.items;
  const pricesData = props.pricesData;
  const [accordion, setAccordion] = useState(0);

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

  const [starterBundle, setStarterBundle] = useState([]);
  const [bundles, setBundles] = useState([]);
  const [gable, setGable] = useState([]);
  const [labour, setLabour] = useState([]);
  const [capBundles, setCapBundles] = useState([]);
  const [capLabour, setCapLabour] = useState([]);
  const [wCLabour, setWCLabour] = useState([]);
  const [shingleLabour, setShingleLabour] = useState([]);
  const [roofTopDel, setRoofTopDel] = useState([]);
  const [roofTopLab, setRoofTopLab] = useState([]);

  function starterBundleFunc() {
    var t = [];
    var p = [];
    items.map(function (singleElement) {
      t.push(parseFloat(singleElement.eave));
      p.push(getPitchValue(singleElement.pitch) * singleElement.gableGrnd);
      return p;
    });
    var x = t.reduce((a, b) => a + b, 0);
    var y = p.reduce((a, b) => a + b, 0);
    return setStarterBundle(((x + y) / 110).toFixed(2));
  }

  function bundleFunc() {
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
      return t;
    });
    return setBundles(t.reduce((a, b) => a + b, 0).toFixed(2));
  }

  function gableFunc() {
    var t = [];
    items.map((singleElement) => {
      var x = getPitchValue(singleElement.pitch) * singleElement.gableGrnd;
      t.push(x);
      return t;
    });
    return setGable(t.reduce((a, b) => a + b, 0).toFixed(2));
  }

  function labourFunc() {
    var t = [];
    items.map((singleElement) => {
      var x =
        (getBasicInstallValue(singleElement.pitch) *
          (parseFloat(singleElement.eave) +
            parseFloat(singleElement.gableGrnd))) /
        60;
      t.push(x);
      return t;
    });
    return setLabour(t.reduce((a, b) => a + b, 0).toFixed(2));
  }

  function cappingBundleFunc() {
    var t = [];
    items.map((singleElement) => {
      t.push(parseFloat(singleElement.hipRM + singleElement.ridge / 23));
      return t;
    });
    return setCapBundles(t.reduce((a, b) => a + b, 0).toFixed(2));
  }

  function cappingLabourFunc() {
    var t = [];
    items.map((singleElement) => {
      t.push(
        parseFloat(
          (getBasicInstallValue(singleElement.pitch) *
            (singleElement.hipRM + singleElement.ridge)) /
            25
        )
      );
      return t;
    });
    return setCapLabour(t.reduce((a, b) => a + b, 0).toFixed(2));
  }

  function wallChimneyFunc() {
    var t = [];
    items.map((singleElement) => {
      t.push(parseFloat(singleElement.wall + singleElement.chimney) * 1.5);
      return t;
    });
    return setWCLabour(t.reduce((a, b) => a + b, 0));
  }

  function shingleLabourFunc() {
    var t = [];
    var x = [];
    var y;
    items.map((singleElement) => {
      if (singleElement.newConst === "true") {
        t.push(
          (getBasicInstallValue(singleElement.pitch) - 6) *
            (((getPitchValue(singleElement.pitch) *
              parseFloat(singleElement.lengthGrnd) *
              parseFloat(singleElement.width) *
              1.06) /
              100) *
              3 +
              parseFloat(singleElement.valleyRM) * 0.06)
        );
      } else if (singleElement.newConst === "false") {
        x.push(
          getBasicInstallValue(singleElement.pitch) *
            (((getPitchValue(singleElement.pitch) *
              parseFloat(singleElement.lengthGrnd) *
              parseFloat(singleElement.width) *
              1.06) /
              100) *
              3 +
              parseFloat(singleElement.valleyRM) * 0.06)
        );
      }

      y = (t.reduce((a, b) => a + b, 0) + x.reduce((a, b) => a + b, 0)).toFixed(
        2
      );
    });
    return setShingleLabour(y);
  }

  function roofTopDeliveryFunc() {
    var t = [];
    items.map((singleElement) => {
      if (pricesData.roofTopCost != "") {
        if (singleElement.roofTop === "true") {
          t.push(
            ((pricesData.roofTopCost *
              (getPitchValue(singleElement.pitch) *
                singleElement.lengthGrnd *
                singleElement.width *
                1.06)) /
              100) *
              3 +
              singleElement.valleyRM * 0.06
          );
          return t;
        }
      }
    });
    return setRoofTopDel(t.reduce((a, b) => a + b, 0).toFixed(2));
  }

  const roofTopLabourFunc = () => {
    let t = [];
    let x = [];
    let y;
    items.map((singleElement) => {
      if (singleElement.stories === "1" && singleElement.roofTop === "false") {
        t.push(
          (((getPitchValue(singleElement.pitch) *
            singleElement.lengthGrnd *
            singleElement.width *
            1.06) /
            100) *
            3 +
            singleElement.valleyRM * 0.06) *
            1.5
        );
      } else if (
        singleElement.stories === "2" &&
        singleElement.roofTop === "false"
      ) {
        x.push(
          (((getPitchValue(singleElement.pitch) *
            singleElement.lengthGrnd *
            singleElement.width *
            1.06) /
            100) *
            3 +
            singleElement.valleyRM * 0.06) *
            2.5
        );
      }

      y = t.reduce((a, b) => a + b, 0) + x.reduce((a, b) => a + b, 0);
    });

    return setRoofTopLab(y);
  };

  useEffect(() => {
    starterBundleFunc();
    bundleFunc();
    gableFunc();
    labourFunc();
    cappingBundleFunc();
    cappingLabourFunc();
    wallChimneyFunc();
    shingleLabourFunc();
    roofTopDeliveryFunc();
    roofTopLabourFunc();
  });

  return (
    <div>
      {items != 0 ? (
        <div>
          {items.map((item, index) => {
            return (
              <>
                <h5
                  className="customersTable_sliderBtn border w-100 text-center p-1"
                  onClick={() =>
                    setAccordion(accordion === index ? null : index)
                  }
                >
                  Roof Face {index + 1}
                </h5>
                <CCollapse show={accordion === index}>
                  <div className="border p-3">
                    <CalculationsFaces
                      item={item}
                      items={items}
                      pricesData={pricesData}
                      getPitchValue={getPitchValue}
                      getBasicInstallValue={getBasicInstallValue}
                      keys={index}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </div>
                </CCollapse>
              </>
            );
          })}
          <div className="row">
            <div className="col-12 mt-3">
              <h6>Total</h6>
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="bundleTotal"
                label="Bundles"
                rightSideLabel="Bundles"
                disabled={true}
                value={bundles}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="gableActualTotal"
                label="Gable Actual"
                rightSideLabel="Lnft"
                disabled={true}
                value={gable}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="starterBundlesTotal"
                label="Starter Bundles"
                rightSideLabel="Bundles"
                disabled={true}
                value={starterBundle}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="starterLabourTotal"
                label="Starter Labour"
                sideLabel="$"
                disabled={true}
                value={labour}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="cappingBundlesTotal"
                label="Capping Bundles"
                rightSideLabel="Bundles"
                disabled={true}
                value={capBundles}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="cappingLabourTotal"
                label="Capping Labour"
                sideLabel="$"
                disabled={true}
                value={capLabour}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="wallChimmneyLabourTotal"
                label="Wall/Chimmney Labour"
                sideLabel="$"
                disabled={true}
                value={wCLabour}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="shingleLabourCostTotal"
                label="Shingle Labour Cost"
                sideLabel="$"
                disabled={true}
                value={shingleLabour}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="shingleMaterialCostTotal"
                label="Shingle Material Cost"
                sideLabel="$"
                disabled={true}
                value={
                  pricesData.bundle != "" &&
                  pricesData.starterBundle != "" &&
                  pricesData.cappingBundle != "" &&
                  pricesData.roofTopCost != "" ? (
                    `$${(
                      Math.ceil(bundles) * pricesData.bundle +
                      Math.ceil(starterBundle) * pricesData.starterBundle +
                      Math.ceil(capBundles) * pricesData.cappingBundle +
                      60 +
                      parseFloat(pricesData.roofTopCost)
                    ).toFixed(2)}`
                  ) : (
                    <span className="text-danger">"Set Bundle Prices"</span>
                  )
                }
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="rooftopDeliveryCostTotal"
                label="Rooftop Delivery Cost"
                sideLabel="$"
                disabled={true}
                value={roofTopDel}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="carryUpLabourCostTotal"
                label="Carry up Labour Cost"
                sideLabel="$"
                disabled={true}
                value={(
                  parseFloat(roofTopLab) +
                  (parseFloat(Math.ceil(starterBundle)) +
                    parseFloat(Math.ceil(capBundles))) *
                    2
                ).toFixed(2)}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="binCostTotal"
                label="Bin Cost"
                sideLabel="$"
                disabled={true}
                value={pricesData.binCost === "" ? 0 : pricesData.binCost}
              />
            </div>
            <div className="col-12 mt-3">
              <h6>Rounded Up</h6>
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="bundlesRounded"
                label="Bundles"
                rightSideLabel="Bundles"
                disabled={true}
                value={Math.ceil(bundles)}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="gableActualRounded"
                label="Gable Actual"
                rightSideLabel="Lnft"
                disabled={true}
                value={Math.ceil(gable)}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="starterBundles"
                label="Starter Bundles"
                rightSideLabel="Bundles"
                disabled={true}
                value={Math.ceil(starterBundle)}
              />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput
                type="number"
                id="cappingBundles"
                label="Capping Bundles"
                rightSideLabel="Bundles"
                disabled={true}
                value={Math.ceil(capBundles)}
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center pt-1">Currently No Data</p>
      )}
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
          <div className="input-group-prepend right-rounded">
            <div
              className="input-group-text"
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
