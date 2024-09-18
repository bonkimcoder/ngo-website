import HeroAll from "../components/HeroAll";
import slider_1 from "../assets/slider_1.jpg";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import Events_Data from "../components/Events";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonial";

const Events = () => {
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
    <>
      <section className="relative h-96 w-full">
        <HeroAll
          settings={settings}
          images={images}
          height="h-96"
          heading_1="On The Lineup"
          text="We drive sustainable growth and create opportunities for a brighter future"
        />
      </section>
      <Events_Data />
      <FAQ />
      <CTA />
      <Testimonials />
    </>
  );
};

export default Events;
