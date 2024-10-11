"use client";
import React, { useEffect } from "react";
import * as echarts from "echarts";

const RadarChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById("radar-chart");
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: "Jumlah Penduduk Tiap Dusun",
        left: "center",
      },
      tooltip: {},
      legend: {
        data: ["Dusun A", "Dusun B", "Dusun C"],
        left: "left",
      },
      radar: {
        indicator: [
          { name: "Dusun 1", max: 1000 },
          { name: "Dusun 2", max: 1000 },
          { name: "Dusun 3", max: 1000 },
          { name: "Dusun 4", max: 1000 },
          { name: "Dusun 5", max: 1000 },
          { name: "Dusun 6", max: 1000 },
          { name: "Dusun 7", max: 1000 },
        ],
      },
      series: [
        {
          name: "Jumlah Penduduk",
          type: "radar",
          data: [
            {
              value: [500, 700, 600, 800, 300, 400, 600],
              name: "Dusun 1",
            },
            {
              value: [800, 500, 400, 700, 600, 300, 500],
              name: "Dusun 2",
            },
            {
              value: [600, 300, 100, 700, 600, 300, 500],
              name: "Dusun 7",
            },
          ],
          itemStyle: {
            color: "#2161D5", // Set the color to blue
          },
          areaStyle: {
            color: "rgba(33, 97, 213, 0.3)", // Optional: set a semi-transparent fill color for the area
          },
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div>
      <div id="radar-chart" style={{ width: "600px", height: "400px" }}></div>
    </div>
  );
};

export default RadarChart;
