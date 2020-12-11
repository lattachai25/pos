import React, { useState, useEffect } from "react";

import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

const Doughnut_chart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["กีวี", "แคนตาลูป", "สตรอเบอร์รี่", "ส้มโชกุล", "แอปเปิลแดง"],
      datasets: [
        {
          labels: ["Red", "Yellow", "Blue", "Red", "Yellow"],
          data: [10, 30, 40, 50, 60],
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
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
          ],
          //   borderWidth: 4,
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
          <i class="fas fa-chart-area mr-1"></i>5 อันดับ ขายดีในรอบสัปดาห์
        </div>
        <div class="card-body">
          {/* <Pie data={chartData} options={{ responsive: true }} /> */}
          <Doughnut data={chartData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Doughnut_chart;
