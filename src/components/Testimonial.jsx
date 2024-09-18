import React, { useState, useEffect } from "react";
import Divider from "./Divider";
import teamMember1 from "../assets/teammember_1.jpg";
import teamMember2 from "../assets/teammember_3.jpg";
import teamMember3 from "../assets/teammember_4.jpg";
import teamMember4 from "../assets/teammember_2.jpg";

const testimonials = [
  {
    name: "Rose Kamondi",
    text: "This NGO has made a huge impact on my community. The projects are well-organized, and the volunteers are incredibly helpful.",
    image: teamMember1,
  },
  {
    name: "Prisca Mumbua",
    text: "I have been a volunteer for the past year, and it has been the most rewarding experience of my life. Highly recommend getting involved.",
    image: teamMember3,
  },
  {
    name: "Michael Johnson",
    text: "Donating to this NGO has been a great decision. You can see the results of your contributions through their many successful projects.",
    image: teamMember2,
  },
  {
    name: "Emily Davis",
    text: "The commitment and dedication of this NGO are inspiring. They truly make a difference in the lives of many.",
    image: teamMember4,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          What People Are Saying
        </h2>
        <Divider />
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-3 rounded-full hover:bg-green-800"
            onClick={handlePrev}
          >
            &#10094;
          </button>

          <div className="testimonial-slider">
            <div
              className="testimonial-wrapper"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
                  />
                  <p className="text-lg text-gray-600 italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-3 rounded-full hover:bg-green-800"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
