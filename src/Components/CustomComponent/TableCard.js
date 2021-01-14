import React from "react";

export default function TableCard() {
  return (
    <div>
      <div className="card mt-3">
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr className="text-muted">
                <th scope="col">Area</th>
                <th scope="col">Percentage</th>
                <th scope="col">Orders</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Winnipeg</th>
                <td>45%</td>
                <td>17</td>
              </tr>
              <tr>
                <th scope="row">Selkrik</th>
                <td>20%</td>
                <td>8</td>
              </tr>
              <tr>
                <th scope="row">Stonewall</th>
                <td>15%</td>
                <td>6</td>
              </tr>
              <tr>
                <th scope="row">East St Paul</th>
                <td>10%</td>
                <td>4</td>
              </tr>
              <tr>
                <th scope="row">Oakbank</th>
                <td>5%</td>
                <td>2</td>
              </tr>
              <tr>
                <th scope="row">Headingly</th>
                <td>5%</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
