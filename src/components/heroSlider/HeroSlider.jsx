import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./heroSlider.css"; // Create this file for fine-tuned styles

const sliderItems = [
  {
    image: "/images/banner.jpg",
    // title: "Vibrant Campus Life",
    // description: "Experience a holistic educational environment.",
    // btnText: "Learn More",
    // btnLink: "#",
  },
  {
    image: "/images/college_building_front_side.jpg",
    // title: 'Vibrant Campus Life',
    // description: 'Experience a holistic educational environment.',
    // btnText: 'Learn More',
    // btnLink: '#'
  }
];

export default function HeroSlider() {
  return (
    <section className="home-slider">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={0}
        nav={false}
        items={1}
        autoplay
        dots
      >
        {sliderItems.map((item, idx) => (
          <div
            key={idx}
            className="slider-item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="slider-overlay"></div>
            <div className="slider-content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              {item.btnLink && item.btnText && (
                <a href={item.btnLink} className="slider-btn">
                  {item.btnText}
                </a>
              )}
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
}
