import React, { useState, useEffect } from "react";
import { Polar } from "react-chartjs-2";

const Polar_charts = () => {
  const [barData, setBarData] = useState({});

  const chart = () => {
    setBarData({
      type: "horizontalBar",
      labels: [
        "Branch 1",
        "Branch 2",
        "Branch 3",
        "Branch 4",
        "Branch 5",
        "Branch 6",
        "Branch 7",
        "Branch 8",
        "Branch 9",
        "Branch 10",
      ],
      datasets: [
        {
          label: "Bestsellers of the Month",
          data: [0, 10, 15, 20, 22, 30, 25, 23, 28, 22, 24],
          backgroundColor: [
            "rgba(255, 99, 132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="col-sm-12 col-md-12 col-lg-12">
      <div class="card-header">
        <i class="fas fa-chart-area mr-1"></i>
        สินค้าขายดีในรอบเดือน
      </div>
      <div class="card-body">
        <Polar data={barData} options={{ responsive: true }} />
      </div>
    </div>
  );
};
export default Polar_charts;
