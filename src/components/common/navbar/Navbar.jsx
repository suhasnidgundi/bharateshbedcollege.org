import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top ">
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
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
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
              <li className="nav-item">
                <a href="about.html" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="teacher.html" className="nav-link">
                  Admission
                </a>
              </li>
              <li className="nav-item">
                <a href="courses.html" className="nav-link">
                  Academics
                </a>
              </li>
              <li className="nav-item">
                <a href="pricing.html" className="nav-link">
                  Faculty
                </a>
              </li>
              <li className="nav-item">
                <a href="blog.html" className="nav-link">
                  Facilities
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Clubs
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Activities
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Gallery
                </a>
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
