import React from "react";

//style sheet
import "../style.scss";

export default function AccessoriesTable(props) {
  const form = props.form;
  return (
    <div>
      <div className="table-responsive custTable">
        <table className="table table-responsive-lg table-bordered">
          <tbody>
            <tr>
              <th></th>
              <th>Pieces/Rolls</th>
              <th>Whole Pieces/Rools</th>
              <th>Adjustment (ft or rolls)</th>
              <th>Material Cost</th>
              <th>Labour Cost</th>
            </tr>
            <tr>
              <th>I&W</th>
              <td>4.7</td>
              <td>2</td>
              <td></td>
              <td>$169.56</td>
              <td>$33.33</td>
            </tr>
            <tr>
              <th>Drip</th>
              <td>10.5</td>
              <td>11</td>
              <td></td>
              <td>$66.00</td>
              <td>$21.05</td>
            </tr>
            <tr>
              <th>Vents</th>
              <td>10.5</td>
              <td>11</td>
              <td></td>
              <td>$40.00</td>
              <td>$20.05</td>
            </tr>
            <tr>
              <th>Ridge Vent</th>
              <td>0.0</td>
              <td>0</td>
              <td></td>
              <td>$0.00</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <th>P Stacks</th>
              <td></td>
              <td></td>
              <td></td>
              <td>$15.00</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <th>Underlayment</th>
              <td>3.7</td>
              <td>4</td>
              <td></td>
              <td>$339.12</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <th>Chimney Flashing</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>$0.00</td>
            </tr>
            <tr>
              <th>Wall Flashing</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>$0.00</td>
            </tr>
            <tr>
              <th>Satellite</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>$15.00</td>
            </tr>
            <tr>
              <th>Warranty</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>Extra`s</th>
              <td></td>
              <td></td>
              <td></td>
              <td>$0.00</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <th>Delivery</th>
              <td></td>
              <td></td>
              <td></td>
              <td>$7.20</td>
              <td></td>
            </tr>
            <tr>
              <th>Total</th>
              <td></td>
              <td></td>
              <td></td>
              <td>$636.88</td>
              <td>$99.39</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
