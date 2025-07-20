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
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="bv-mandal.html">B V Mandal's</a></li>
                  <li><a className="dropdown-item" href="college-education.html">Bharatesh College Of Education</a></li>
                  <li><a className="dropdown-item" href="management.html">Board Of Management</a></li>
                  <li><a className="dropdown-item" href="principal-message.html">Principal's Message</a></li>
                  <li><a className="dropdown-item" href="vision-mission.html">Vision, Mission, Objectives</a></li>
                  <li><a className="dropdown-item" href="faculty.html">Teaching Faculty</a></li>
                  <li><a className="dropdown-item" href="attendance.html">Attendance</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  Admission
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="admission-procedure.html">Admission Procedure</a></li>
                  <li><a className="dropdown-item" href="examinations.html">Examinations</a></li>
                  <li><a className="dropdown-item" href="methods-available.html">Methods Available</a></li>
                  <li><a className="dropdown-item" href="sanctioned-programme.html">Sanctioned Programme</a></li>
                  <li><a className="dropdown-item" href="current-admissions.html">Current Admissions</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="infrastructure.html" className="nav-link">
                  Infrastructure
                </a>
              </li>

              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  Results
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="results-view.html">Results in View</a></li>
                  <li><a className="dropdown-item" href="latest-results.html">Latest Results</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  Activities
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="co-curricular.html">Co-Curricular Activities</a></li>
                  <li><a className="dropdown-item" href="social-activities.html">Social Activities</a></li>
                  <li><a className="dropdown-item" href="achievements.html">College Achievements</a></li>
                  <li><a className="dropdown-item" href="alumni.html">Alumni</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="cells.html" className="nav-link">
                  Cells
                </a>
              </li>

              <li className="nav-item">
                <a href="events.html" className="nav-link">
                  Events
                </a>
              </li>

              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  PAR Report
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="balance-sheet.html">Balance Sheet</a></li>
                  <li><a className="dropdown-item" href="receipts-payments.html">Receipts and Payments</a></li>
                  <li><a className="dropdown-item" href="income-expenditure.html">Income & Expenditure</a></li>
                  <li><a className="dropdown-item" href="fees-details.html">Fees Details</a></li>
                  <li><a className="dropdown-item" href="students-details.html">Students Details</a></li>
                  <li><a className="dropdown-item" href="facilities-added.html">Facilities Added</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  Mandatory Enclosures
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="building-plan.html">Building Plan</a></li>
                  <li><a className="dropdown-item" href="encumbrance-certificate.html">Encumbrance Certificate</a></li>
                  <li><a className="dropdown-item" href="land-usage-certificate.html">Land Usage Certificate</a></li>
                  <li><a className="dropdown-item" href="mutation-certificate.html">Mutation Certificate</a></li>
                  <li><a className="dropdown-item" href="no-profit-affidavit.html">No Profit Affidavit</a></li>
                  <li><a className="dropdown-item" href="affidavit-01.html">Affidavit 01</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;