import React from "react";
import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Private Sale ", 11],
  ["Initial Liquidity (will be lock)", 2],
  ["Protocol Mining Rewards ", 2],
  ["Presale", 2],
  ["Team & Advisors ", 7],
  ["Airdrop", 7], // CSS-style declaration
  ["Marketing", 2],
];
export const options = {
  title: "",
  pieHole: 0.4,
  backgroundColor: "transparent",
  is3D: false,
};
function Piechart() {
  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default Piechart;
