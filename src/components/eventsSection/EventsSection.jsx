import "./eventsSection.css";

const EventsSection = () => (
  <section id="events" className="events-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2>Events & News</h2>
        <p className="lead text-muted">
          Stay updated with the latest happenings at our college
        </p>
      </div>
      <div className="row">
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="event-card position-relative">
            <div className="event-date">
              <div style={{ fontSize: "1.2rem" }}>15</div>
              <div style={{ fontSize: "0.9rem" }}>AUG</div>
            </div>
            <div className="event-image">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="p-4">
              <h4>Annual Day Celebrations</h4>
              <p>
                Join us for cultural performances, award ceremonies, and
                recognition of outstanding achievements.
              </p>
              <a href="#" className="btn btn-sm btn-outline-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="event-card position-relative">
            <div className="event-date">
              <div style={{ fontSize: "1.2rem" }}>20</div>
              <div style={{ fontSize: "0.9rem" }}>SEP</div>
            </div>
            <div className="event-image">
              <i className="fas fa-users"></i>
            </div>
            <div className="p-4">
              <h4>National Education Seminar</h4>
              <p>
                A national-level seminar featuring eminent educators and policy
                makers from across India.
              </p>
              <a href="#" className="btn btn-sm btn-outline-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="event-card position-relative">
            <div className="event-date">
              <div style={{ fontSize: "1.2rem" }}>05</div>
              <div style={{ fontSize: "0.9rem" }}>OCT</div>
            </div>
            <div className="event-image">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <div className="p-4">
              <h4>Teaching Excellence Workshop</h4>
              <p>
                Intensive workshop on innovative teaching methodologies and
                digital classroom management.
              </p>
              <a href="#" className="btn btn-sm btn-outline-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
