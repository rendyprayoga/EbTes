"use client";

import React, { useEffect } from "react";
import * as echarts from "echarts";

const GraFive: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById("graFive")!;
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: "Jumlah Penduduk Tiap Dusun",

        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        show: false,
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["50%", "70%"],
          data: [
            { value: 735, name: "Dusun 3" },
            { value: 200, name: "Dusun 4" },
            { value: 1200, name: "Dusun 2" },
            { value: 1200, name: "Dusun 5" },
          ],
          itemStyle: {
            color: (params: any) => {
              const colors = ["#898BE7", "#89AFE7", "#2161D5", "#97ACD1"];
              return colors[params.dataIndex % colors.length];
            },
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="graFive" style={{ width: "100%", height: "400px" }} />;
};

export default GraFive;
