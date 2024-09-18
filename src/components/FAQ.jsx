import React, { useState } from "react";
import slider_1 from "../assets/slider_2.jpg";
import Divider from "./Divider";
import { faqs } from "../assets/data";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <Divider />
        <div className="flex gap-8">
          <div className="w-1/3">
            <img
              src={slider_1}
              alt="slider-1"
              className="w-full h-2/3 object-cover"
            />
          </div>
          <div className="space-y-6 flex-1">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden "
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-6 py-4 bg-gray-200 border-b border-gray-300  focus:outline-none"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <span
                    className={`float-right text-gray-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
