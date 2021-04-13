import React from "react";

import * as BsIcon from "react-icons/bs";

export default function DescriptionCard(props) {
  const selection = props.selection;
  let data = [];

  selection.map((n) => {
    let satDish = "No";
    if (n.install !== "Satellite dish") {
      satDish = "Yes";
    }
    let workman = "No";
    if (n.install !== "Registered") {
      satDish = "Yes";
    }
    data = [
      { title: "Shingle", subtitle: `${n.shingle_roof}` },
      { title: "Starter Shingle", subtitle: `${n.starter_shingle}` },
      { title: "Hip & Ridge Shingle", subtitle: `${n.hr_shingle}` },
      { title: "Color", subtitle: `${n.color_roof}` },
      {
        title: "Underlayment",
        subtitle: `${n.underlay_protection}`,
      },
      {
        title: "Ice & Water Protection",
        subtitle: `${n.ice_water_protection}****`,
      },
      {
        title: "Venting",
        subtitle: `Replace ${n.Replace_ventilation} vent **`,
      },
      { title: "Plumbing Stack", subtitle: `*****` },
      { title: "Chimney", subtitle: `${n.chimney}` },
      { title: "Wall Flashing", subtitle: `${n.shingle_roof}` },
      { title: "Satellite Dish", subtitle: `${satDish}` },
      { title: "Workmanship Warranty", subtitle: `${workman}` },
      { title: "Shingle Warranty", subtitle: `${n.shingle_roof}` },
    ];
    return data;
  });
  return (
    <div>
      <div className="card shadow" style={{ borderRadius: "10px" }}>
        <div className="card-body">
          <h5>Details</h5>
          <hr />
          {data.map((item, index) => {
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
