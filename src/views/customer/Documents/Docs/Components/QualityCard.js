import React, { useState } from "react";
//icons
import * as AiIcon from "react-icons/ai";
//css
import "../Estimates.css";

export default function QualityCard() {
  const [quality, setQuality] = useState([]);
  return (
    <div className="QualityCard">
      <div className="card shadow" style={{ borderRadius: "10px" }}>
        <div className="card-body">
          <h5>Quality</h5>
          <hr />
          <div className="row">
            <div className="col-5">
              <p className="p5">
                <span style={{ marginRight: "10px" }}>Good</span>{" "}
                <AiIcon.AiFillStar color="red" />
              </p>
            </div>
            <div className="col-7 text-right">
              <p className="p5">
                <span>$12,22.82</span>
                <input
                  type="checkbox"
                  style={{ marginLeft: "5px" }}
                  className="quality_checkbox"
                  name="good_check"
                  id="good_check"
                  checked={quality.good}
                  onChange={(e) => {
                    setQuality({
                      ...quality,
                      good: e.target.checked,
                      better: false,
                      best: false,
                    });
                  }}
                />
              </p>
            </div>
            <div className="col-5">
              <p className="p5">
                <span style={{ marginRight: "5px" }}>Better</span>{" "}
                <AiIcon.AiFillStar color="red" />{" "}
                <AiIcon.AiFillStar color="red" />
              </p>
            </div>
            <div className="col-7 text-right">
              <p className="p5">
                <span>$12,22.82</span>
                <input
                  type="checkbox"
                  style={{ marginLeft: "5px" }}
                  className="quality_checkbox"
                  name="better_check"
                  id="better_check"
                  checked={quality.better}
                  onChange={(e) => {
                    setQuality({
                      ...quality,
                      good: false,
                      better: e.target.checked,
                      best: false,
                    });
                  }}
                />
              </p>
            </div>
            <div className="col-5">
              <p className="p5">
                <span style={{ marginRight: "15px" }}>Best</span>{" "}
                <AiIcon.AiFillStar color="red" />{" "}
                <AiIcon.AiFillStar color="red" />{" "}
                <AiIcon.AiFillStar color="red" />
              </p>
            </div>
            <div className="col-7 text-right">
              <p className="p5">
                <span>$12,22.82</span>
                <input
                  type="checkbox"
                  style={{ marginLeft: "5px" }}
                  className="quality_checkbox"
                  name="best_check"
                  id="best_check"
                  checked={quality.best}
                  onChange={(e) => {
                    setQuality({
                      ...quality,
                      good: false,
                      better: false,
                      best: e.target.checked,
                    });
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const textStyle = {
  textOverflow: "ellipsis",
  overFlow: "hidden",
  maxWidth: "100px",
  whiteSpace: "nowrap",
};
