"use client";

import React, { useEffect } from "react";
import * as echarts from "echarts";

function GraSeven() {
  return {
    labels: ["Dusun 1", "Dusun 2", "Dusun 3", "Dusun 4", "Dusun 5", "Dusun 6"],
    dataMale: [1200, 900, 450, 1300, 600, 900],
    dataFemale: [1300, 700, 300, 1250, 550, 800],
  };
}

const BarChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById("bar-chart");
    const myChart = echarts.init(chartDom);

    const { labels, dataMale, dataFemale } = GraSeven();

    const option = {
      title: {
        text: "Jumlah Penduduk Berdasarkan Gender 2022",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      legend: {
        show: false,
      },
      xAxis: {
        type: "category",
        data: labels,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Laki-laki",
          type: "bar",
          data: dataMale,
          itemStyle: {
            color: "#2161D5",
          },
        },
        {
          name: "Perempuan",
          type: "bar",
          data: dataFemale,
          itemStyle: {
            color: "#97ACD1",
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
      <div id="bar-chart" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default BarChart;
