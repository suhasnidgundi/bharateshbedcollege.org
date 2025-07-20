import "./topBar.css";

const TopBar = () => {
  return (
    <header className="school-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* <!-- Left Logo --> */}
          <div className="col-2 col-md-2 d-flex justify-content-center">
            <div className="logo-circle">
              <img src="images/logo.png" alt="School Logo" />
            </div>
          </div>

          {/* <!-- Center Content --> */}
          <div className="col-8 col-md-8">
            <div className="header-content">
              <div>
                <div
                  className="text-primary fw-semibold mb-1"
                  style={{ fontSize: "1rem" }}
                >
                  Shree Bharatesh Vidya Mandal
                </div>
                <div className="school-name">Bhartesh College Of Education</div>
                <div className="affiliation-text">
                  Bellad Bagewadi, District Belagavi, Karnataka 590001
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Portrait --> */}
          <div className="col-2 col-md-2 d-flex justify-content-center">
            <div className="portrait-circle">
              <img src="images/founder-photo.jpg" alt="Portrait" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
