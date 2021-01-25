import React from "react";
import { CCard, CCardBody } from "@coreui/react";

export default function ToDoCard() {
  return (
    <div>
      <CCard style={{ marginBottom: "0px" }} className="m-1">
        <CCardBody>
          <div className="text-uppercase">june 10 2021</div>
          <div>
            <ul>
              <li className="mt-2">
                <span className="small text-muted">
                  Roof Quote: John Doe / 204 - 770 -2456
                </span>
                <br />
                1440 Inkster Blvd - 7:30 AM
              </li>
              <li className="mt-2">
                <span className="small text-muted">
                  Roof Quote: Nem Smith / 204 - 986 -1265
                </span>
                <br />
                68 DownLane St - 11:00 AM
              </li>
            </ul>
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
}
