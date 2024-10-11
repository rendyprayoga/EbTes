"use client";

import React, { useEffect } from "react";
import * as echarts from "echarts";

const GraSix: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById("graSix")!;
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: "Jumlah Prasarana Umum",

        left: "center",
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
            { value: 800, name: "Sumur Desa" },
            { value: 800, name: "Olahraga" },
            { value: 500, name: "Pasar Desa" },
            { value: 100, name: "Balai Pertemuan" },
          ],
          itemStyle: {
            color: (params: { dataIndex: number }) => {
              const colors = ["#2161D5", "#97ACD1", "#898BE7", "#89AFE7"];
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

  return <div id="graSix" style={{ width: "100%", height: "400px" }} />;
};

export default GraSix;
