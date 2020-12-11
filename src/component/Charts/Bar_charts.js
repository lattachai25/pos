import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const Bar_charts = () => {
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
        "Branch 11",
        "Branch 12",
        "Branch 13",
        "Branch 14",
        "Branch 15",
        "Branch 16",
        "Branch 17",
        "Branch N",
      ],
      datasets: [
        {
          label: "Sale Branch In 2020",
          barPercentage: 30,
          barThickness: 30,
          maxBarThickness: 30,
          minBarLength: 30,
          data: [
            0,
            10,
            15,
            20,
            22,
            30,
            25,
            23,
            28,
            22,
            24,
            19,
            10,
            20,
            30,
            20,
            20,
            30,
            20,
          ],
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
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 99, 132,1)",
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
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 99, 132, 1)",
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
        <i class="fas fa-chart-bar mr-1"></i>
        สรุปการขาย ทุกสาขา
      </div>
      <div class="card-body">
        <Bar data={barData} options={{ responsive: true }} />
      </div>
    </div>
  );
};
export default Bar_charts;
