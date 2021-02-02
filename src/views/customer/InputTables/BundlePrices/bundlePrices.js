import React from "react";
import Input from "../../Components/Input";

export default function bundlePrices(props) {
  const setPricesData = props.setPricesData;
  const pricesData = props.pricesData;
  return (
    <tbody>
      <tr>
        <th>Bundle Price</th>
        <th>Starter Bundle Price</th>
        <th>Capping Bundle Price</th>
        <th>Roof Top Price</th>
        <th>Bin Price</th>
      </tr>
      <tr>
        <th>
          <Input
            type="text"
            step="any"
            id="bundlePrice"
            placeholder="Bundle Price"
            value={pricesData.bundle}
            onChange={(e) =>
              setPricesData({
                ...pricesData,
                bundle: e.target.value,
              })
            }
          />
        </th>
        <th>
          <Input
            type="text"
            id="starterBundlePrice"
            placeholder="Starter Bundle Price"
            value={pricesData.starterBundle}
            onChange={(e) =>
              setPricesData({
                ...pricesData,
                starterBundle: e.target.value,
              })
            }
          />
        </th>
        <th>
          <Input
            type="text"
            id="cappingBundlePrice"
            placeholder="capping Bundle Price"
            value={pricesData.cappingBundle}
            onChange={(e) =>
              setPricesData({
                ...pricesData,
                cappingBundle: e.target.value,
              })
            }
          />
        </th>
        <th>
          <Input
            type="text"
            id="roofTopDeliveryCost"
            placeholder="roof Top Delivery Cost"
            value={pricesData.roofTopCost}
            onChange={(e) =>
              setPricesData({
                ...pricesData,
                roofTopCost: e.target.value,
              })
            }
          />
        </th>
        <th>
          <Input
            type="text"
            id="binCost"
            placeholder="Bin Cost"
            value={pricesData.binCost}
            onChange={(e) =>
              setPricesData({
                ...pricesData,
                binCost: e.target.value,
              })
            }
          />
        </th>
      </tr>
    </tbody>
  );
}
