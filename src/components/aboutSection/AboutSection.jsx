import "./aboutSection.css";

const AboutSection = () => (
  <section id="about" class="about-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6" data-aos="fade-right">
          <div class="about-image">
            <i class="fas fa-university"></i>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
          <div class="about-card">
            <h2>Welcome to Bharatesh B.Ed College</h2>
            <p>
              Established with a vision to cultivate the finest educators,
              Bharatesh B.Ed College is a premier institution dedicated to
              excellence in teacher training. We believe in nurturing a passion
              for knowledge and empowering our students with the skills to
              inspire future generations.
            </p>
            <p>
              Our curriculum blends timeless educational philosophies with
              modern pedagogical techniques, ensuring our graduates are
              well-prepared for the challenges of a dynamic educational
              landscape.
            </p>
            <a href="#" class="btn btn-primary-custom btn-custom">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
