import "./App.css";
import Footer from "./components/common/footer/Footer";
import Marquee from "./components/common/marquee/Marquee";
import Navbar from "./components/common/navbar/Navbar";
import TopBar from "./components/common/topBar/TopBar";
import HeroSlider from "./components/heroSlider/HeroSlider";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Marquee />
          {/* <!-- About Section --> */}
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-image">
              <i className="fas fa-university"></i>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-card">
              <h2>Welcome to Bharatesh B.Ed College</h2>
              <p>
                Established with a vision to cultivate the finest educators,
                Bharatesh B.Ed College is a premier institution dedicated to
                excellence in teacher training. We believe in nurturing a
                passion for knowledge and empowering our students with the
                skills to inspire future generations.
              </p>
              <p>
                Our curriculum blends timeless educational philosophies with
                modern pedagogical techniques, ensuring our graduates are
                well-prepared for the challenges of a dynamic educational
                landscape.
              </p>
              <a href="#" class="btn btn-primary-custom btn-custom"
                >Read More</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}

export default App;
