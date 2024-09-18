import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const HeroAll = ({ settings, images, height, heading_1, text }) => {
  return (
    <Slider {...settings} className="h-full">
      {images.map((image, index) => (
        <div key={index} className="h-full">
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div
              className={`${height} bg-black bg-opacity-50 flex items-center justify-center`}
            >
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold">{heading_1}</h1>
                <p className="mt-4 text-lg md:text-2xl">{text}</p>
                <Link
                  to="/donate"
                  className="mt-8 text-xl inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroAll;
