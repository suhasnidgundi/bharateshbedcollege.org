import "./heroSlider.css";

const HeroSlider = () => (
  <section className="home-slider owl-carousel">
    <div className="slider-item" style={{ backgroundImage: "url(images/bg_1.jpg)" }}>
      <div className="overlay"></div>
      <div className="container">
        <div
          class="row no-gutters slider-text align-items-center justify-content-center"
          data-scrollax-parent="true"
        >
          <div class="col-md-8 text-center ftco-animate">
            <h1 class="mb-4">Admissions Open 2025-2026</h1>
            <p>Join us to build a rewarding career in teaching.</p>
            <p>
              <a href="#" class="btn btn-secondary px-4 py-3 mt-3">
                Apply Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-item" style={{ backgroundImage: "url(images/bg_2.jpg)" }}>
      <div className="overlay"></div>
      <div className="container">
        <div
          class="row no-gutters slider-text align-items-center justify-content-center"
          data-scrollax-parent="true"
        >
          <div className="col-md-8 text-center ftco-animate">
            <h1 className="mb-4">Vibrant Campus Life</h1>
            <p>Experience a holistic educational environment.</p>
            <p>
              <a href="#" className="btn btn-secondary px-4 py-3 mt-3">
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-item" style={{ backgroundImage: "url(images/bg_2.jpg)" }}>
      <div className="overlay"></div>
      <div class="container">
        <div
          class="row no-gutters slider-text align-items-center justify-content-center"
          data-scrollax-parent="true"
        >
          <div class="col-md-8 text-center ftco-animate">
            <h1 class="mb-4">Expert Faculty</h1>
            <p>Learn from experienced and dedicated mentors.</p>
            <p>
              <a href="faculty.html" class="btn btn-secondary px-4 py-3 mt-3">
                Meet Our Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSlider;
