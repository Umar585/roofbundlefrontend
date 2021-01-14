import React from "react";

import "./ToDoCard.css";

export default function ToDoWeekCard() {
  return (
    <div>
      <div className="card mt-3 toDoList">
        <div className="card-body">
          <div className="pt-2">
            <p className="card-text text-muted">June 7 - 13 2021</p>
            <ul>
              <div className="row">
                <div className="col-md-6">
                  <li>
                    <p className="small text-muted">
                      Roof Quote: John Behr - 204 770 2451 (office)
                    </p>
                    <p className="lead" style={{ marginTop: "-20px" }}>
                      1440 Inkster BLVD - 7:30 AM
                    </p>
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <p className="small text-muted">
                      Job Start: Fred Truck - 204 181 6185 (cell)
                    </p>
                    <p className="lead" style={{ marginTop: "-20px" }}>
                      990 Cordan Ave - 8:00 AM
                    </p>
                  </li>
                </div>
              </div>
            </ul>
            <hr />

            <p className="card-text text-muted">June 14 - 20 2021</p>
            <ul>
              <div className="row">
                <div className="col-md-6">
                  <li>
                    <p className="small text-muted">
                      Material Delivery: Elena Banks - 204 873 3932 (home)
                    </p>
                    <p className="lead" style={{ marginTop: "-20px" }}>
                      700 Setter Street - 9:30 AM
                    </p>
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <p className="small text-muted">
                      Sign Contract: Rod Klassen - 204 528 8546 (cell)
                    </p>
                    <p className="lead" style={{ marginTop: "-20px" }}>
                      418 Salter Street - 12:30 PM
                    </p>
                  </li>
                </div>
              </div>
            </ul>
            <hr />

            <p className="card-text text-muted">June 21 - 27 2021</p>
            <ul>
              <div className="row">
                <div className="col-md-6">
                  <li>
                    <p className="small text-muted">
                      Invoice Project: Darryl Penner - 204 573 1939 (cell)
                    </p>
                    <p className="lead" style={{ marginTop: "-20px" }}>
                      99 Niagara Ave - 3:30 PM
                    </p>
                  </li>
                </div>
              </div>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
