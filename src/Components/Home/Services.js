import React from "react";

export default function Services() {
  const pStyle = {
    color: "#8D8D8D",
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <h4 style={{ color: "#000" }}>Intelligent Roof Diagrams</h4>
          <p style={pStyle}>
            Interactive measuring tools to draw roof diagrams fast...{" "}
            <span style={{ fontStyle: "italic" }}>Incredibly</span> fast.
          </p>
        </div>
        <div className="col-md-3">
          <h4 style={{ color: "#000" }}>Smart Roof Documents</h4>
          <p style={pStyle}>
            Estimates, Material Lists, Work orders and Contracts made very easy.
          </p>
        </div>
        <div className="col-md-3">
          <h4 style={{ color: "#000" }}>Project Planning & Tacking</h4>
          <p style={pStyle}>
            Effortless Planning and tracking tools that you can adjust as fast
            as the weather does.
          </p>
        </div>
        <div className="col-md-3">
          <h4 style={{ color: "#000" }}>Integrated Accounting</h4>
          <p style={pStyle}>
            Convert contracts and change orders into invoices instantaneously.
            No Monkey business!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}