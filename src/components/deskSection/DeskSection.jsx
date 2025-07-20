import "./deskSection.css";

const DeskSection = () => (
  <section id="faculty" className="desk-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2>From Our Desk</h2>
        <p className="lead text-muted">Meet the visionary leaders guiding our institution towards excellence</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="desk-card">
            <div className="desk-image">
              <i className="fas fa-user-tie"></i>
            </div>
            <div className="desk-card-body">
              <h4>Dr. Rajesh Kumar</h4>
              <p className="text-muted">Principal</p>
              <p>Leading with 25+ years of experience in educational administration and teacher training.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="desk-card">
            <div className="desk-image">
              <i className="fas fa-user-graduate"></i>
            </div>
            <div className="desk-card-body">
              <h4>Prof. Sunita Sharma</h4>
              <p className="text-muted">Academic Director</p>
              <p>Renowned educator specializing in curriculum development and pedagogical innovation.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="desk-card">
            <div className="desk-image">
              <i className="fas fa-users"></i>
            </div>
            <div className="desk-card-body">
              <h4>Mr. Anil Patil</h4>
              <p className="text-muted">Administrative Secretary</p>
              <p>Ensuring smooth operations and student welfare with dedication and efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DeskSection;
