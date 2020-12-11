import React from "react";
import Line from "./Line_charts";
import Radar from "./Radar_charts";
import Bar from "./Bar_charts";
import Polar from "./Polar_charts";
import DataTable from "./DataTable";
import Earnings from "./Earnings";
import Doughnut from "./Doughnut_chart";
import Danger from "./Danger_charts";
import Danger2 from "./Danger_charts2";
import Promotion_price_Charts from "./Promotion_price_Charts";
import Transform_products from "./Transform_products";

const Charts = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-12">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <br />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12">
          <br />
          <Earnings />
        </div>
        {/* ---------------------------------------------------------------------- */}
        <div className="col-sm-12 col-md-12 col-lg-12">
          <br />
          <br />
        </div>

        {/* ---------------------------------------------------------------------- */}
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Line />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Doughnut />
              {/* <Radar /> */}
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------- */}
        <div className="col-sm-12 col-md-12 col-lg-12">
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        {/* ---------------------------------------------------------------------- */}
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Polar />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Bar />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------- */}
        <div className="col-sm-12 col-md-12 col-lg-12">
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        {/* ---------------------------------------------------------------------- */}

        {/* ---------------------------------------------------------------------- */}
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Danger />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Danger2 />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------- */}
        <div className="col-sm-12 col-md-12 col-lg-12">
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        {/* ---------------------------------------------------------------------- */}
        <div className="col-sm-12 col-md-12 col-lg-12">
          <DataTable />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12">
          <Transform_products />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12">
          <Promotion_price_Charts />
        </div>
        {/* ---------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------- */}
        <div className="col-sm-12 col-md-12 col-lg-12">
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        {/* ---------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Charts;
