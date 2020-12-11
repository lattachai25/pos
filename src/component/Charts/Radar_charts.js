import React, { useState, useEffect } from "react";

import { Radar } from "react-chartjs-2";
const Radar_charts = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["Best seller", "Middle sale", "Bad sales"],
      datasets: [
        {
          label: "Week",
          data: [40, 30, 50, 50],
          borderColor: ["rgba(255, 99, 132)"],
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
          Product Chart Example
        </div>

        <div class="card-body">
          <Radar data={chartData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Radar_charts;
