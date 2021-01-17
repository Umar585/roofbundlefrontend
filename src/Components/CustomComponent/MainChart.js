import React from "react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";

const brandSuccess = getStyle("success") || "#4dbd74";
const brandInfo = getStyle("info") || "#20a8d8";
const brandDanger = getStyle("danger") || "#f86c6b";
const brandWarning = getStyle("warning") || "#ffc107";
const brandPrimary = getStyle("primary") || "#007bff";

const MainChart = (attributes) => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const defaultDatasets = (() => {
    let elements = 12;
    const data1 = [];
    const data2 = [];
    const data3 = [];
    const data4 = [];
    const data5 = [];
    for (let i = 0; i <= elements; i++) {
      data1.push(random(7, 21));
      data2.push(random(5, 24));
      data3.push(random(2, 15));
      data4.push(random(11, 20));
      data5.push(10);
    }
    return [
      {
        label: "Crew 1",
        backgroundColor: hexToRgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data1,
      },
      {
        label: "Crew 2",
        backgroundColor: "transparent",
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        data: data2,
      },
      {
        label: "Crew 3",
        backgroundColor: "transparent",
        borderColor: brandPrimary,
        pointHoverBackgroundColor: brandPrimary,
        borderWidth: 2,
        data: data3,
      },
      {
        label: "Crew 4",
        backgroundColor: "transparent",
        borderColor: brandWarning,
        pointHoverBackgroundColor: brandWarning,
        borderWidth: 2,
        data: data4,
      },
      {
        label: "Average Projects",
        backgroundColor: "transparent",
        borderColor: brandDanger,
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 1,
        borderDash: [8, 5],
        data: data5,
      },
    ];
  })();

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(25 / 5),
              max: 25,
            },
            gridLines: {
              display: true,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };
  })();
  // render
  return (
    <CChartLine
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ]}
    />
  );
};

export default MainChart;
