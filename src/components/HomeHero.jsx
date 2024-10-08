import React from "react";
import slider_1 from "../assets/slider_1.jpg";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import HeroAll from "./HeroAll";

const HomeHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  const images = [slider_1, slider_2, slider_3];

  return (
    <section className="relative h-screen w-full">
      <HeroAll
        settings={settings}
        images={images}
        height="h-screen"
        heading_1="Transforming Lives with LEAU Foundation"
        text="Join us in making a difference across the Samburu region."
      />
    </section>
  );
};

export default HomeHero;
