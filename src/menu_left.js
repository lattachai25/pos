import React from "react";
import { Link } from "react-router-dom";
function menu_left() {
  return (
    <div id="layoutSidenav_nav">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          to="/"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <img
              src={process.env.PUBLIC_URL + "/img/logo_icon.png"}
              width={30}
            />
          </div>
          <div className="sidebar-brand-text mx-3">A-Best POS</div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <a className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span> Dashboard</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Interface</div>
        {/* -------------------------------------Executive--------------------------------------- */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#Executive"
            aria-expanded="true"
            aria-controls="Executive"
          >
            <i className="fas fa-chart-area" />
            <span> Executive</span>
          </a>
          <div
            id="Executive"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Executive Report:</h6>
              <Link to="/" className="collapse-item">
                Branch Sales Report
              </Link>
              <Link to="/" className="collapse-item">
                Sales Report
              </Link>
              <Link to="/" className="collapse-item">
                Best Selling Report
              </Link>
              <Link to="/" className="collapse-item">
                Damaged Report
              </Link>
              <Link to="/" className="collapse-item">
                Total Income By Branch
              </Link>
            </div>
          </div>
        </li>

        {/* -------------------------------------Executive--------------------------------------- */}
        {/* -------------------------------------Manager----------------------------------------- */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#Manager"
            aria-expanded="true"
            aria-controls="Manager"
          >
            <i class="fab fa-red-river" />
            <span> Manager</span>
          </a>
          <div
            id="Manager"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header"> Manager List:</h6>
              <Link to="/Manager" className="collapse-item">
                Main Page &nbsp;
              </Link>
              <Link to="/po" className="collapse-item">
                PO &nbsp;
                <span className="badge badge-danger badge-counter"> 10 </span>
              </Link>
              <Link to="/report" className="collapse-item">
                Branch Report All
              </Link>
              <Link to="/product_report" className="collapse-item">
                Branch Report Product
              </Link>
              <Link to="/product_report" className="collapse-item">
                Report
              </Link>
            </div>
          </div>
        </li>
        {/* -------------------------------------Manager--------------------------------------------- */}
        {/* -------------------------------------Whole sale----------------------------------------- */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#sale"
            aria-expanded="true"
            aria-controls="sale"
          >
            <i class="fab fa-red-river" />
            <span> Whole Sale</span>
          </a>
          <div
            id="sale"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header"> Sale List:</h6>
              <Link to="/" className="collapse-item">
                MK Restaurant &nbsp;
                <span className="badge badge-danger badge-counter"> 1 </span>
              </Link>
              <Link to="/" className="collapse-item">
                Sizzler &nbsp;
                <span className="badge badge-danger badge-counter"> 2 </span>
              </Link>
              <Link to="/" className="collapse-item">
                Daidomon &nbsp;
                <span className="badge badge-danger badge-counter"> 1 </span>
              </Link>
              <Link to="/" className="collapse-item">
                Hot Put Buffet &nbsp;
                <span className="badge badge-danger badge-counter"> 4 </span>
              </Link>
            </div>
          </div>
        </li>
        {/* -------------------------------------Whole sale--------------------------------------------- */}
        {/* -------------------------------------Sourcing----------------------------------------- */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#Sourcing"
            aria-expanded="true"
            aria-controls="Sourcing"
          >
            <i class="fab fa-red-river" />
            <span> Sourcing</span>
          </a>
          <div
            id="Sourcing"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header"> Sourcing List:</h6>
              <Link to="/Create_partner_name" className="collapse-item">
                สร้างชื่อคู่ค้า
              </Link>
              <Link to="/Edit_prict" className="collapse-item">
                ปรับราคาสินค้า
              </Link>
              <Link to="/Create_Code_product" className="collapse-item">
                สร้างรหัส สินค้า
              </Link>
              <Link to="/Create_barcode" className="collapse-item">
                สร้าง BarCode
              </Link>
              <Link to="/Report_sourcing_all" className="collapse-item">
                รายงานสินค้าตามหมวด
              </Link>
            </div>
          </div>
        </li>
        {/* -------------------------------------Admin--------------------------------------------- */}
        {/* -------------------------------------Admin----------------------------------------- */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#Admin"
            aria-expanded="true"
            aria-controls="Admin"
          >
            <i class="fab fa-red-river" />
            <span> Admin</span>
          </a>
          <div
            id="Admin"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header"> Admin List:</h6>
              <Link to="/Po_admin" className="collapse-item">
                เอกสาร PO &nbsp;
                <span className="badge badge-danger badge-counter"> 4 </span>
              </Link>
            </div>
          </div>
        </li>
        {/* -------------------------------------Admin--------------------------------------------- */}
        {/* ------------------------------------- Accounting ----------------------------------------- */}

        {/* <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#Accounting"
            aria-expanded="true"
            aria-controls="Accounting"
          >
            <i class="fab fa-red-river" />
            <span> Accounting </span>
          </a>
          <div
            id="Accounting"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header"> Accounting List:</h6>
              <Link to="/" className="collapse-item">
                -
              </Link>
              <Link to="/" className="collapse-item">
                -
              </Link>
              <Link to="/" className="collapse-item">
                -
              </Link>
              <Link to="/" className="collapse-item">
                -
              </Link>
            </div>
          </div>
        </li> */}
        {/* ------------------------------------- Accounting --------------------------------------------- */}
        {/* ------------------------------------- Epacking ----------------------------------------- */}
        {/* 
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#Epacking"
            aria-expanded="true"
            aria-controls="Epacking"
          >
            <i class="fab fa-red-river" />
            <span> E-Packing </span>
          </a>
          <div
            id="Epacking"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header"> Epacking List:</h6>
              <Link to="/" className="collapse-item">
                -
              </Link>
              <Link to="/" className="collapse-item">
                -
              </Link>
              <Link to="/" className="collapse-item">
                -
              </Link>
              <Link to="/" className="collapse-item">
                -
              </Link>
            </div>
          </div>
        </li> */}
        {/* ------------------------------------- Epacking --------------------------------------------- */}
        {/* ------------------------------------- Etransport ----------------------------------------- */}

        {/* <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#Etransport"
            aria-expanded="true"
            aria-controls="Etransport"
          >
            <i class="fab fa-red-river" />
            <span> E-Transport </span>
          </a>
          <div
            id="Etransport"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header"> Etransport List:</h6>
              <Link to="/" className="collapse-item">
                -
              </Link>
              <Link to="/" className="collapse-item">
                -
              </Link>
              <Link to="/" className="collapse-item">
                -
              </Link>
              <Link to="/" className="collapse-item">
                -
              </Link>
            </div>
          </div>
        </li> */}
        {/* ------------------------------------- Etransport --------------------------------------------- */}

        <hr className="sidebar-divider" />
        <div className="sidebar-heading"></div>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#Register"
            aria-expanded="true"
            aria-controls="Register"
          >
            <i className="fas fa-registered" />
            {/* <i className="fas fa-fw fa-folder" /> */}

            <span> Register</span>
          </a>
          <div
            id="Register"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header"> Administrator </h6>

              <Link to="/register" className="collapse-item">
                Register
              </Link>
              <Link to="/Forgot" className="collapse-item">
                Forgot Password
              </Link>
              <div className="collapse-divider" />
            </div>
          </div>
        </li>
        {/* <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span>
          </Link>
        </li> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </div>
  );
}

export default menu_left;
