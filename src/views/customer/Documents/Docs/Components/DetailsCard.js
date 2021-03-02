import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import * as BsIcon from "react-icons/bs";

export default function DescriptionCard() {
  return (
    <div>
      <div className="card shadow" style={{ borderRadius: "10px" }}>
        <div className="card-body">
          <h5>Details</h5>
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
    { title: "Shingle", subtitle: "GAF" },
    { title: "Starter Shingle", subtitle: "asdf" },
    { title: "Hip & Ridge Shingle", subtitle: "asdf" },
    { title: "Color", subtitle: "asdf" },
    { title: "Underlayment", subtitle: "asdf" },
    { title: "Ice & Water Protection", subtitle: "asdf" },
    { title: "Venting", subtitle: "asdf" },
    { title: "Plumbing Stack", subtitle: "asdf" },
    { title: "Chimney", subtitle: "asdf" },
    { title: "Wall Flashing", subtitle: "asdf" },
    { title: "Satellite Dish", subtitle: "asdf" },
    { title: "Workmanship Warranty", subtitle: "asdf" },
    { title: "Shingle Warranty", subtitle: "asdf" },
  ],
};
