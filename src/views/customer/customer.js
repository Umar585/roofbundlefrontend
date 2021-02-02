import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CButton } from "@coreui/react";
//tabs Content
import CustomerTab from "./Tabs/NewCust";
//scss
import "./customer.scss";
import * as GrIcon from "react-icons/gr";

export default function NewCust() {
  const [newCust, setNewCust] = useState(true);
  const [quoted, setQuoted] = useState(false);
  const [signed, setSigned] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [complete, setComplete] = useState(false);
  const [invoiced, setInvoiced] = useState(false);

  const handleTabSwitchNewCust = () => {
    setNewCust(true);
    setQuoted(false);
    setSigned(false);
    setInProgress(false);
    setComplete(false);
    setInvoiced(false);
  };
  const handleTabSwitchQuoted = () => {
    setNewCust(false);
    setQuoted(true);
    setSigned(false);
    setInProgress(false);
    setComplete(false);
    setInvoiced(false);
  };
  const handleTabSwitchSigned = () => {
    setNewCust(false);
    setQuoted(false);
    setSigned(true);
    setInProgress(false);
    setComplete(false);
    setInvoiced(false);
  };
  const handleTabSwitchInProgress = () => {
    setNewCust(false);
    setQuoted(false);
    setSigned(false);
    setInProgress(true);
    setComplete(false);
    setInvoiced(false);
  };
  const handleTabSwitchComplete = () => {
    setNewCust(false);
    setQuoted(false);
    setSigned(false);
    setInProgress(false);
    setComplete(true);
    setInvoiced(false);
  };
  const handleTabSwitchInvoiced = () => {
    setNewCust(false);
    setQuoted(false);
    setSigned(false);
    setInProgress(false);
    setComplete(false);
    setInvoiced(true);
  };

  const handleNewCust = () => {
    window.location.href = "/new";
  };
  return (
    <div>
      <div className="float-left">
        <h5 style={{ marginTop: "3px" }}>Customers</h5>
      </div>
      <div className="text-right">
        {/*} <CButton className="btn text-dark h1" onClick={handleNewCust}>
          +
        </CButton>*/}
        <Link to="/new" style={{ fontSize: "17.5px" }}>
          <GrIcon.GrAdd />
        </Link>
      </div>

      <div className="newtabs">
        <div className="list-inline p2">
          <div className="list-inline-item">
            <p
              id="mostLeft"
              onClick={handleTabSwitchNewCust}
              className={newCust ? "active" : null}
            >
              New
            </p>
          </div>
          <div className="list-inline-item">
            <p
              onClick={handleTabSwitchQuoted}
              className={quoted ? "active" : null}
            >
              Quoted
            </p>
          </div>
          <div className="list-inline-item">
            <p
              onClick={handleTabSwitchSigned}
              className={signed ? "active" : null}
            >
              Signed
            </p>
          </div>
          <div className="list-inline-item">
            <p
              onClick={handleTabSwitchInProgress}
              className={inProgress ? "active" : null}
            >
              InProgress
            </p>
          </div>
          <div className="list-inline-item">
            <p
              onClick={handleTabSwitchComplete}
              className={complete ? "active" : null}
            >
              Complete
            </p>
          </div>
          <div className="list-inline-item">
            <p
              id="mostRight"
              onClick={handleTabSwitchInvoiced}
              className={invoiced ? "active" : null}
            >
              Invoiced
            </p>
          </div>
        </div>
      </div>
      {/*Switch */}
      <div className="mt-3">
        <div>{newCust ? <CustomerTab /> : null}</div>
        <div>{quoted ? <CustomerTab /> : null}</div>
        <div>{signed ? <CustomerTab /> : null}</div>
        <div>{inProgress ? <CustomerTab /> : null}</div>
        <div>{complete ? <CustomerTab /> : null}</div>
        <div>{invoiced ? <CustomerTab /> : null}</div>
      </div>
    </div>
  );
}
