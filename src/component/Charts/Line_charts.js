import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";
const Line_charts = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      datasets: [
        {
          label: "Week",
          data: [10, 30, 40, 50, 60, 70, 100],
          backgroundColor: ["rgba(0, 0, 0, 0.0)"],
          borderColor: [
            "rgba(0, 230, 64, 1)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div class="card-header">
          <i class="fas fa-chart-area mr-1"></i>
          ยอดขายราย สัปดาห์
        </div>
        <div class="card-body">
          <Line data={chartData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Line_charts;
