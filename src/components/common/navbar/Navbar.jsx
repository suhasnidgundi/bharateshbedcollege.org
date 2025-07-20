import { Link } from "react-router";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Bhartesh College Of Education
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/about-us/bv-mandal">B V Mandal's</Link></li>
                  <li><Link className="dropdown-item" to="/about-us">Bharatesh College Of Education</Link></li>
                  <li><Link className="dropdown-item" to="/about-us/board-of-management">Board Of Management</Link></li>
                  <li><Link className="dropdown-item" to="/about-us/principals-message">Principal's Message</Link></li>
                  <li><Link className="dropdown-item" to="/about-us/vision-mission">Vision, Mission, Objectives</Link></li>
                  <li><Link className="dropdown-item" to="/about-us/faculty">Teaching Faculty</Link></li>
                  <li><Link className="dropdown-item" to="/about-us/attendance">Attendance</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  Admission
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="admission-procedure.html">Admission Procedure</Link></li>
                  <li><Link className="dropdown-item" to="examinations.html">Examinations</Link></li>
                  <li><Link className="dropdown-item" to="methods-available.html">Methods Available</Link></li>
                  <li><Link className="dropdown-item" to="sanctioned-programme.html">Sanctioned Programme</Link></li>
                  <li><Link className="dropdown-item" to="current-admissions.html">Current Admissions</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="infrastructure.html" className="nav-link">
                  Infrastructure
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  Results
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="results-view.html">Results in View</Link></li>
                  <li><Link className="dropdown-item" to="latest-results.html">Latest Results</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  Activities
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="co-curricular.html">Co-Curricular Activities</Link></li>
                  <li><Link className="dropdown-item" to="social-activities.html">Social Activities</Link></li>
                  <li><Link className="dropdown-item" to="achievements.html">College Achievements</Link></li>
                  <li><Link className="dropdown-item" to="alumni.html">Alumni</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="cells.html" className="nav-link">
                  Cells
                </Link>
              </li>

              <li className="nav-item">
                <Link to="events.html" className="nav-link">
                  Events
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  PAR Report
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="balance-sheet.html">Balance Sheet</Link></li>
                  <li><Link className="dropdown-item" to="receipts-payments.html">Receipts and Payments</Link></li>
                  <li><Link className="dropdown-item" to="income-expenditure.html">Income & Expenditure</Link></li>
                  <li><Link className="dropdown-item" to="fees-details.html">Fees Details</Link></li>
                  <li><Link className="dropdown-item" to="students-details.html">Students Details</Link></li>
                  <li><Link className="dropdown-item" to="facilities-added.html">Facilities Added</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  Mandatory Enclosures
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="building-plan.html">Building Plan</Link></li>
                  <li><Link className="dropdown-item" to="encumbrance-certificate.html">Encumbrance Certificate</Link></li>
                  <li><Link className="dropdown-item" to="land-usage-certificate.html">Land Usage Certificate</Link></li>
                  <li><Link className="dropdown-item" to="mutation-certificate.html">Mutation Certificate</Link></li>
                  <li><Link className="dropdown-item" to="no-profit-affidavit.html">No Profit Affidavit</Link></li>
                  <li><Link className="dropdown-item" to="affidavit-01.html">Affidavit 01</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;