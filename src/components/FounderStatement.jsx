import React from "react";
import Divider from "./Divider";
import ceoprofilepic from "../assets/ceo_ngo.jpg";

const FounderStatement = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Founder’s Statement
        </h2>
        <Divider />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <img
              src={ceoprofilepic}
              alt="Founder"
              className="w-full max-h-96 h-full mx-auto lg:mx-0 mb-6 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              Mwangi Kamau
            </h3>
            <p className="text-lg text-gray-600">Founder & CEO</p>
          </div>

          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              "Since founding this organization in 2020, my goal has always been
              to create a space where communities can thrive, and where hope is
              reignited for those who have lost it. Our mission is deeply rooted
              in creating sustainable change and fostering a sense of unity and
              empowerment for all. I am humbled to lead such a passionate team
              that is dedicated to making a difference, and I believe that
              through our collective efforts, we can continue to transform lives
              across Kenya and beyond."
            </p>
            <p className="mt-4 text-lg text-gray-600">
              — Mwangi Kamau, Founder & CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStatement;
