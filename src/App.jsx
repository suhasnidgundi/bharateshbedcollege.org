import "./App.css";
import AboutSection from "./components/aboutSection/AboutSection";
import Footer from "./components/common/footer/Footer";
import Marquee from "./components/common/marquee/Marquee";
import Navbar from "./components/common/navbar/Navbar";
import TopBar from "./components/common/topBar/TopBar";
import DeskSection from "./components/deskSection/DeskSection";
import EventsSection from "./components/EventsSection/EventsSection";
import FacilitiesSection from "./components/facilitiesSection/FacilitiesSection";
import HeroSlider from "./components/heroSlider/HeroSlider";
import ServicesSection from "./components/servicesSection/ServicesSection";
import VisionMissionSection from "./components/visionMissionSection/VisionMissionSection";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Marquee />
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
      <DeskSection />
      <VisionMissionSection />
      <FacilitiesSection />
      <EventsSection />
      <Footer />
    </>
  );
}

export default App;
