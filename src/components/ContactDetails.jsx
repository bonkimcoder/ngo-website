import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 duration-200">
            <FaPhoneAlt className="text-3xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Phone</h4>
            <p className="text-gray-600 text-lg">
              Call us at: <br />
              <span className="font-medium">+254 700 000 000</span>
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-110 duration-200">
            <FaEnvelope className="text-3xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Email</h4>
            <p className="text-gray-600 text-lg">
              Send us an email: <br />
              <span className="font-medium">info@yourngo.org</span>
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 duration-200">
            <FaMapMarkerAlt className="text-3xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              Visit Us
            </h4>
            <p className="text-gray-600 text-lg">
              We are located at: <br />
              <span className="font-medium">
                1234 Ngong Road, Nairobi, Kenya
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
