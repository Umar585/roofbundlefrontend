import React, { useEffect, useState } from "react";

import * as BsIcon from "react-icons/bs";

export default function DescriptionCard(props) {
  const selection = props.selection;
  //const setSelection = selection;
  const [sel, setSEl] = useState([]);
  let data = [];
  //console.log(selection);
  selection.map((n) => {
    //console.log(n);
    let satDish = "No";
    if (n.install != "Satellite dish") {
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
      { title: "Venting", subtitle: `*****` },
      { title: "Plumbing Stack", subtitle: `*****` },
      { title: "Chimney", subtitle: `${n.chimney}` },
      { title: "Wall Flashing", subtitle: `${n.shingle_roof}` },
      { title: "Satellite Dish", subtitle: `${satDish}` },
      { title: "Workmanship Warranty", subtitle: `${workman}` },
      { title: "Shingle Warranty", subtitle: `${n.shingle_roof}` },
    ];
  });
  console.log(data);
  //setSEl(selection);
  /*const data = {
    data: [],
  };*/
  /*
  const data = {
    data: [
      { title: "Shingle", subtitle: `${setSelection.shingle_roof}` },
      { title: "Starter Shingle", subtitle: `${setSelection.starter_shingle}` },
      { title: "Hip & Ridge Shingle", subtitle: `${setSelection.hr_shingle}` },
      { title: "Color", subtitle: `${setSelection.color_roof}` },
      {
        title: "Underlayment",
        subtitle: `${setSelection.underlay_protection}`,
      },
      { title: "Ice & Water Protection", subtitle: `${setSelection.ice_water_protection}` },
      { title: "Venting", subtitle: `` },
      { title: "Plumbing Stack", subtitle: `` },
      { title: "Chimney", subtitle: `${setSelection.shingle_roof}` },
      { title: "Wall Flashing", subtitle: `${setSelection.shingle_roof}` },
      { title: "Satellite Dish", subtitle: `${setSelection.shingle_roof}` },
      { title: "Workmanship Warranty", subtitle: `${setSelection.shingle_roof}` },
      { title: "Shingle Warranty", subtitle: `${setSelection.shingle_roof}` },
    ],
  };*/

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

/*
const data = {
  data: [
    { title: "Shingle", subtitle: `${setSelection.shingle_roof}` },
    { title: "Starter Shingle", subtitle: `${setSelection.starter_shingle}` },
    { title: "Hip & Ridge Shingle", subtitle: `${setSelection.hr_shingle}` },
    { title: "Color", subtitle: `${setSelection.color_roof}` },
    {
      title: "Underlayment",
      subtitle: `${setSelection.underlay_protection}`,
    },
    { title: "Ice & Water Protection", subtitle: `${setSelection.ice_water_protection}` },
    { title: "Venting", subtitle: `` },
    { title: "Plumbing Stack", subtitle: `` },
    { title: "Chimney", subtitle: `${setSelection.shingle_roof}` },
    { title: "Wall Flashing", subtitle: `${setSelection.shingle_roof}` },
    { title: "Satellite Dish", subtitle: `${setSelection.shingle_roof}` },
    { title: "Workmanship Warranty", subtitle: `${setSelection.shingle_roof}` },
    { title: "Shingle Warranty", subtitle: `${setSelection.shingle_roof}` },
  ],
};*/
