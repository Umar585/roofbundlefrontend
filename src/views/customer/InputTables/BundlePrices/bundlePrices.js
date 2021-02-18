import React from "react";

export default function bundlePrices(props) {
  const setPricesData = props.setPricesData;
  const pricesData = props.pricesData;
  return (
    <div>
      <div className="row">
        <div className="col-12 mt-3">
          <h6>Materials</h6>
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            step="any"
            id="bundlePrice"
            label="Bundle"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="starterBundlePrice"
            label="Starter Bundle"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="cappingBundlePrice"
            label="Capping Bundle"
            sideLabel="$"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="roofTopDeliveryCost"
            label="Rooftop Delivery"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="iceWater"
            label="Ice & Water Protection"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="underLayment"
            label="Underlayment"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="dripEdge"
            label="Drip Edge"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="ridgeVent"
            label="Ridge Vent"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="roofVent"
            label="Roof Vent"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="plumbingStackMat"
            label="Plumbing Stack Mat"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="binCost"
            label="Garbage Bin"
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
          <h6>Labour</h6>
        </div>
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="iceLC"
            label="Ice & Water"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="dripLC"
            label="Drip Edge"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="ventLC"
            label="Vents"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="ridgeVentLC"
            label="Ridge Vent"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="pStackLC"
            label="Plumbing Stack Mat"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="underlaymentLC"
            label="Underlayment"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="chimneyFlashingLC"
            label="Chimney Flashing"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="wallFlashingLC"
            label="Wall Flashing"
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
        <div className="col-12 col-md-6">
          <CustomInput
            type="number"
            id="satelliteLC"
            label="Satellite"
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
          step=".01"
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
