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
              To be a center of excellence in teacher education, recognized for
              our innovative approach and for producing educators who are agents
              of positive social change and lifelong learners.
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
              To equip prospective teachers with cutting-edge knowledge,
              practical skills, and ethical values required to excel in their
              profession while fostering an environment of research and
              continuous learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VisionMissionSection;
