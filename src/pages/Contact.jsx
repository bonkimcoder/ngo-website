import HeroAll from "../components/HeroAll";
import slider_1 from "../assets/slider_1.jpg";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import ContactDetails from "../components/ContactDetails";
import ContactFormMap from "../components/ContactFormMap";
import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";

const Contact = () => {
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
          heading_1="Talk To Us Now"
          text="Share your recommendation, concern or query with us"
        />
      </section>
      <ContactDetails />
      <ContactFormMap />
      <FAQ />
      <CTA />
      <Testimonial />
    </>
  );
};

export default Contact;
