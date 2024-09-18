import HeroAll from "../components/HeroAll";
import slider_1 from "../assets/slider_1.jpg";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import ProjectsData from "../components/ProjectsData";
import Team from "../components/Team";
import CTA from "../components/CTA";
import FounderStatement from "../components/FounderStatement";

const Projects = () => {
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
          heading_1="See Our Work, Our Commitment"
          text="Our mission is to empower communities, drive sustainable growth, and create opportunities for a brighter future"
        />
      </section>
      <ProjectsData />
      <Team />
      <CTA />
      <FounderStatement />
    </>
  );
};

export default Projects;
