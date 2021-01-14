import React from "react";

//css
import "./ToDoCard.css";

export default function ToDoCard() {
  return (
    <div>
      <div className="card mt-3 toDoList">
        <div className="card-body">
          <p className="card-text text-muted">June 10 2021</p>
          <div className="pt-2">
            <ul>
              <li>
                <p className="small text-muted">
                  Roof Quote: John Behr - 204 770 2451 (office)
                </p>
                <p className="lead" style={{ marginTop: "-20px" }}>
                  1440 Inkster BLVD - 7:30 AM
                </p>
              </li>
              <li>
                <p className="small text-muted">
                  Job Start: Fred Truck - 204 181 6185 (cell)
                </p>
                <p className="lead" style={{ marginTop: "-20px" }}>
                  990 Cordan Ave - 8:00 AM
                </p>
              </li>
            </ul>
            <hr />
            <p className="card-text text-muted">June 11 2021</p>
            <ul>
              <li>
                <p className="small text-muted">
                  Material Delivery: Elena Banks - 204 873 3932 (home)
                </p>
                <p className="lead" style={{ marginTop: "-20px" }}>
                  700 Setter Street - 9:30 AM
                </p>
              </li>
              <li>
                <p className="small text-muted">
                  Sign Contract: Rod Klassen - 204 528 8546 (cell)
                </p>
                <p className="lead" style={{ marginTop: "-20px" }}>
                  418 Salter Street - 12:30 PM
                </p>
              </li>
            </ul>
            <hr />
            <p className="card-text text-muted">June 14 2021</p>
            <ul>
              <li>
                <p className="small text-muted">
                  Invoice Project: Darryl Penner - 204 573 1939 (cell)
                </p>
                <p className="lead" style={{ marginTop: "-20px" }}>
                  99 Niagara Ave - 3:30 PM
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
