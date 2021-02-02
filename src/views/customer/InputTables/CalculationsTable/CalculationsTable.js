import React, { useState, useEffect } from "react";
//style sheet
import "../style.scss";

export default function CalculationsTable(props) {
  const items = props.items;
  const pricesData = props.pricesData;

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
        <div
          className="table-responsive custTable"
          style={{
            maxHeight: "600px",
            overflowY: "auto",
          }}
        >
          <table className="table table-responsive-lg table-bordered">
            <tbody>
              <tr>
                <th></th>
                <th>Pitch Factor</th>
                <th>Basic Install Cost</th>
                <th>Bundles</th>
                <th>Gable Actual</th>
                <th>Starter Bundles</th>
                <th>Starter Labour</th>
                <th>Capping Bundles</th>
                <th>Capping Labour</th>
                <th>Wall/Chimmney Labour</th>
                <th>Shingle Labour Cost</th>
                <th>Shingle Material Cost</th>
                <th>Rooftop Delivery Cost</th>
                <th>Carry up Labour Cost</th>
                <th>Bin Cost</th>
              </tr>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{getPitchValue(item.pitch)}</td>
                    <td>{getBasicInstallValue(item.pitch)}</td>
                    <td>
                      {(
                        ((getPitchValue(item.pitch) *
                          item.lengthGrnd *
                          item.width *
                          1.06) /
                          100) *
                          3 +
                        item.valleyRM * 0.06
                      ).toFixed(1)}
                    </td>
                    <td>
                      {(getPitchValue(item.pitch) * item.gableGrnd).toFixed(2)}
                    </td>
                    <td></td>
                    <td>
                      $
                      {(
                        (getBasicInstallValue(item.pitch) *
                          (parseFloat(item.eave) +
                            parseFloat(item.gableGrnd))) /
                        60
                      ).toFixed(2)}
                    </td>
                    <td></td>
                    <td>
                      $
                      {(getBasicInstallValue(item.pitch) *
                        (item.hipRM + item.ridge)) /
                        25}
                    </td>
                    <td></td>
                    <td>
                      $
                      {item.newConst === "true"
                        ? (
                            (getBasicInstallValue(item.pitch) - 6) *
                            (((getPitchValue(item.pitch) *
                              parseFloat(item.lengthGrnd) *
                              parseFloat(item.width) *
                              1.06) /
                              100) *
                              3 +
                              parseFloat(item.valleyRM) * 0.06)
                          ).toFixed(2)
                        : (
                            getBasicInstallValue(item.pitch) *
                            (((getPitchValue(item.pitch) *
                              parseFloat(item.lengthGrnd) *
                              parseFloat(item.width) *
                              1.06) /
                              100) *
                              3 +
                              parseFloat(item.valleyRM) * 0.06)
                          ).toFixed(2)}
                    </td>
                    <td></td>
                    <td>
                      {item.roofTop === "true" && pricesData.roofTopCost != ""
                        ? `$${(
                            pricesData.roofTopCost *
                              ((getPitchValue(item.pitch) *
                                item.lengthGrnd *
                                item.width *
                                1.06) /
                                100) *
                              3 +
                            item.valleyRM * 0.06
                          ).toFixed(2)}`
                        : `$${0}`}
                    </td>
                    <td>
                      $
                      {item.roofTop === "false"
                        ? item.stories === "1"
                          ? (
                              1.5 *
                              (((getPitchValue(item.pitch) *
                                item.lengthGrnd *
                                item.width *
                                1.06) /
                                100) *
                                3 +
                                item.valleyRM * 0.06)
                            ).toFixed(2)
                          : (
                              2.5 *
                              (((getPitchValue(item.pitch) *
                                item.lengthGrnd *
                                item.width *
                                1.06) /
                                100) *
                                3 +
                                item.valleyRM * 0.06)
                            ).toFixed(2)
                        : 0}
                    </td>
                    <td></td>
                  </tr>
                );
              })}
              <tr>
                <th>Total</th>
                <td></td>
                <td></td>
                <td>{bundles}</td>
                <td>{gable}</td>
                <td>{starterBundle}</td>
                <td>${labour}</td>
                <td>{capBundles}</td>
                <td>${capLabour}</td>
                <td>${wCLabour}</td>
                <td>${shingleLabour}</td>
                <td>
                  {/*28.49*/}
                  {pricesData.bundle != "" &&
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
                  )}
                </td>
                <td>${roofTopDel}</td>
                <td>
                  $
                  {(
                    parseFloat(roofTopLab) +
                    (parseFloat(Math.ceil(starterBundle)) +
                      parseFloat(Math.ceil(capBundles))) *
                      2
                  ).toFixed(2)}
                </td>
                <td>${pricesData.binCost === "" ? 0 : pricesData.binCost}</td>
              </tr>
              <tr>
                <th>Rounded</th>
                <td></td>
                <td></td>
                <td>{Math.ceil(bundles)}</td>
                <td>{Math.ceil(gable)}</td>
                <td>{Math.ceil(starterBundle)}</td>
                <td></td>
                <td>{Math.ceil(capBundles)}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center text-danger">
          Calculations will populate when you begin adding data
        </h3>
      )}
    </div>
  );
}
