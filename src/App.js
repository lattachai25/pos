import logo from "./logo.svg";
import "./App.css";
import Layout from "./component/layout";
import Login from "./component/login";
import Register from "./component/Register";
import Forgot from "./component/forgot_password";
import Admin from "./component/Admin/Main";
import Epacking from "./component/Epacking/Main";
import Etransport from "./component/Etransport/Main";
import Executive from "./component/Executive/Main";

// --------------------------- Manager  -----------------------------------------
import Manager from "./component/Manager/Main";
import po from "./component/Manager/po";
import Product_report from "./component/Manager/Product_report";
import Report from "./component/Manager/Report";
import Branch_report_all from "./component/Manager/Branch_report_all";
// --------------------------- Manager  -----------------------------------------
import Sale from "./component/Sourcing/Main";
// ---------------------------  Sourcing  ---------------------------------------
import Main from "./component/Sourcing/Main";
import Create_barcode from "./component/Sourcing/Create_barcode";
import Create_Code_product from "./component/Sourcing/Create_Code_product";
import Create_partner_name from "./component/Sourcing/Create_partner_name";
import Edit_prict from "./component/Sourcing/Edit_proct";
import Report_sourcing_all from "./component/Sourcing/Report_sourcing_all";

// ---------------------------  Sourcing  ---------------------------------------
// ---------------------------  Whole Sale  ---------------------------------------
import Wholesale from "./component/Wholesale/Main";

// ---------------------------  Whole Sale  ---------------------------------------
// ---------------------------  Admin  ---------------------------------------
import Po_admin from "./component/Admin/Po_admin";

// ---------------------------  Admin  ---------------------------------------
import Accounting from "./component/Accounting/Main";

import { BrowserRouter, Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/Layout" component={Layout} />
      <Route path="/Admin" component={Admin} />
      <Route path="/Epacking" component={Epacking} />
      <Route path="/Etransport" component={Etransport} />
      <Route path="/Executive" component={Executive} />
      {/* -------------------------------- Manager --------------------------------- */}
      <Route path="/Manager" component={Manager} />
      <Route path="/po" component={po} />
      <Route path="/Product_report" component={Product_report} />
      <Route path="/Branch_report_all" component={Branch_report_all} />
      <Route path="/Report" component={Report} />
      {/* ----------------------------- Manager  ------------------------------------ */}
      {/* ----------------------------- Sourcing  ------------------------------------ */}
      <Route path="/Main" component={Main} />
      <Route path="/Create_barcode" component={Create_barcode} />
      <Route path="/Create_Code_product" component={Create_Code_product} />
      <Route path="/Create_partner_name" component={Create_partner_name} />
      <Route path="/Edit_prict" component={Edit_prict} />
      <Route path="/Report_sourcing_all" component={Report_sourcing_all} />


      {/* ----------------------------- Sourcing  ------------------------------------ */}

      
      <Route path="/Sale" component={Sale} />

      {/* ----------------------------- Wholesale  ------------------------------------ */}
      <Route path="/Wholesale" component={Wholesale} />

      {/* ----------------------------- Wholesale  ------------------------------------ */}
      {/* ----------------------------- admin  ------------------------------------ */}
      <Route path="/Po_admin" component={Po_admin} />

      {/* ----------------------------- admin  ------------------------------------ */}

      <Route path="/Accounting" component={Accounting} />
      <Route path="/Register" component={Register} />
      <Route path="/Forgot" component={Forgot} />
    </div>
  );
}

export default App;
