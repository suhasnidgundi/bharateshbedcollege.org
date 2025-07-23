import "./visionMissionSection.css";

const VisionMissionSection = () => (
  <section className="vision-mission">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2>Our Vision & Mission</h2>
        <p className="lead text-muted">
          Guiding principles that drive our commitment to educational excellence
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6" data-aos="fade-right">
          <div className="vm-card">
            <div className="vm-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Our Vision</h3>
            <p>
              To nurture teachers who are academically solid, culturally and
              socially aware, and spiritually balanced. The aim is to shape
              educators who contribute meaningfully to society while holding
              strong personal values.
            </p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-left">
          <div className="vm-card">
            <div className="vm-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Our Mission</h3>
            <p>
              To deliver quality education by blending innovative teaching
              methods and instructional technology. The institute emphasizes
              spiritual and cross-cultural understanding, especially addressing
              rural and socially relevant challenges through well-rounded
              teacher preparation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VisionMissionSection;
