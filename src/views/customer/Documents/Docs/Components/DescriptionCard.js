import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import * as BsIcon from "react-icons/bs";

export default function DescriptionCard() {
  return (
    <div>
      <div className="card shadow" style={{ borderRadius: "10px" }}>
        <div className="card-body">
          <h5>Description</h5>
          <hr />
          {data.data.map((item, index) => {
            return (
              <div style={{ marginBottom: "-5px" }} key={index}>
                <div className="float-left">
                  <span className="p6">
                    <BsIcon.BsDot size={20} />
                    {item.title}:
                  </span>
                </div>
                <div className="text-right">
                  <p className="p7">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const data = {
  data: [
    { title: "Removal & Disposal", subtitle: "One layer of shingles" },
    { title: "Garbage Bin Location", subtitle: "Driveway" },
    { title: "Roof Deck Repair", subtitle: "1/2'' Plywood $3.00 / sq. ft." },
    { title: "Chimney/Wall re-flashing", subtitle: "$25.00 / lin. ft." },
    { title: "Clean Up", subtitle: "Complete job site clean up" },
    { title: "Inspection", subtitle: "On site Inspection by manager" },
  ],
};
