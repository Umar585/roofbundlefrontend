import React from "react";

export default function bundlePrices(props) {
  const setPricesData = props.setPricesData;
  const pricesData = props.pricesData;
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-6">
          <CustomInput
            type="text"
            step="any"
            id="bundlePrice"
            label="Shingle Price / Bundle"
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
            type="text"
            id="starterBundlePrice"
            label="Starter Shingle Price / Bundle"
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
            type="text"
            id="cappingBundlePrice"
            label="Hip + Ridge Shingle Price / Bundle"
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
            type="text"
            id="roofTopDeliveryCost"
            label="Rooftop Delivery Price / Bundle"
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
            type="text"
            id="iceWater"
            label="Ice & Water Protection / Roll"
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
            type="text"
            id="underLayment"
            label="Underlayment / Roll"
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
            type="text"
            id="dripEdge"
            label="Drip Edge / Piece"
            value={pricesData.dripEdge}
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
            type="text"
            id="ridgeVent"
            label="Ridge Vent / Roll"
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
            type="text"
            id="roofVent"
            label="Roof Vent / Piece"
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
            type="text"
            id="plumbingStackMat"
            label="Plumbing Stack Mat / Piece"
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
            type="text"
            id="binCost"
            label="Garbage Bin Fee"
            value={pricesData.binCost}
            onChange={(e) =>
              setPricesData({
                ...pricesData,
                binCost: e.target.value,
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
    <div>
      <label
        htmlFor={props.id}
        style={{ marginBottom: "-1px", marginTop: "5px" }}
      >
        {props.label}
      </label>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div
            className="input-group-text"
            style={{
              backgroundColor: "#fff",
              borderRight: "none",
            }}
          >
            $
          </div>
        </div>
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          name={props.id}
          placeholder="0.00"
          autoComplete="off"
          style={inputStyle}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  borderLeft: "none",
  paddingLeft: "0px",
  marginLeft: "-11px",
};
