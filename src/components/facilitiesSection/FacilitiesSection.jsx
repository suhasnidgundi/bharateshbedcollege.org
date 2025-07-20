import "./facilitiesSection.css";
const FacilitiesSection = () => (
  <section id="facilities" className="facilities-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2>Our Facilities</h2>
        <p className="lead text-muted">
          State-of-the-art infrastructure supporting comprehensive learning
          experiences
        </p>
      </div>
      <div className="row">
        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="facility-card">
            <div className="facility-image">
              <i className="fas fa-book-open"></i>
            </div>
            <div className="p-4">
              <h4>Digital Library</h4>
              <p>
                Extensive collection of books, journals, and digital resources
                with 24/7 access to online databases.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="facility-card">
            <div className="facility-image">
              <i className="fas fa-microscope"></i>
            </div>
            <div className="p-4">
              <h4>Science Labs</h4>
              <p>
                Well-equipped laboratories for physics, chemistry, biology, and
                educational technology practicals.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="facility-card">
            <div className="facility-image">
              <i className="fas fa-home"></i>
            </div>
            <div className="p-4">
              <h4>Hostel</h4>
              <p>
                Comfortable accommodation with modern amenities, Wi-Fi
                connectivity, and 24/7 security.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="facility-card">
            <div className="facility-image">
              <i className="fas fa-running"></i>
            </div>
            <div className="p-4">
              <h4>Sports Complex</h4>
              <p>
                Indoor and outdoor sports facilities promoting physical fitness
                and holistic development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
