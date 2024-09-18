import HeroAll from "../components/HeroAll";
import slider_1 from "../assets/slider_1.jpg";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import VolunteerForm from "../components/VolunteerForm";
import FAQ from "../components/FAQ";

const Volunteer = () => {
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
          heading_1="Help Us Reach More Needy Cases"
          text="Be part of our journey. Give back to the soceity"
        />
      </section>
      <VolunteerForm />
      <FAQ />
    </>
  );
};

export default Volunteer;
