import React from "react";
import Sidebar from "@/components/Sidebar";
import Graone from "@/components/grafik/Graone";
import GraTwo from "@/components/grafik/GraTwo";
import GraThree from "@/components/grafik/GraThree";
import GraFour from "@/components/grafik/GraFour"; 
import GraFive from "@/components/grafik/GraFive";
import GraSix from "@/components/grafik/GraSix";
import GraSeven from "@/components/grafik/GraSeven";

const Dashboard = () => {
  return (
    <section>
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", 
            gridGap: "20px",
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          <div style={{ gridColumn: "span 1" }}>
            <Graone />
          </div>
          <div style={{ gridColumn: "span 1" }}>
            <GraTwo />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "20px",
              gridColumn: "span 2",
            }}
          >
            <GraThree />
            <GraFour />
            <GraFive />
          </div>

          <div style={{ gridColumn: "span 1" }}>
            <GraSix />
          </div>
          <div style={{ gridColumn: "span 1" }}>
            <GraSeven />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
