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
      <HeroSlider />
      <Footer />
    </>
  );
}

export default App;
