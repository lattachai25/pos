import React from "react";

import Nav from "../nav";
import MenuLeft from "../menu_left";

import Charts from "./Charts/Charts";
import Footer from "../footer";

function layout() {
  return (
    <>
      <div id="wrapper">
        <MenuLeft />
        <div class="d-sm-flex align-items-center justify-content-between">
          <div class="container">
            <Nav />
            <Charts />
          </div>
        </div>
      </div>
    </>
  );
}

export default layout;
