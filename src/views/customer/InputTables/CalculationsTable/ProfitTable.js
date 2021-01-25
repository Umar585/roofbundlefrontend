import React from "react";

//scss
import "../style.scss";

export default function ProfitTable() {
  return (
    <div>
      <div>
        <table className="card shadow table table-responsive-lg custTable cost_Table">
          <tbody>
            <tr>
              <th>Cost</th>
              <td>$11640</td>
            </tr>
            <tr>
              <th>Material</th>
              <td>$3590</td>
            </tr>
            <tr>
              <th>Labour</th>
              <td>$5140</td>
            </tr>
            <tr>
              <th>Gross Profit</th>
              <td>$2910</td>
            </tr>
            <tr>
              <th>%Gross Profit</th>
              <td>25.0%</td>
            </tr>
            <tr>
              <th>$/Square</th>
              <td>$293</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
