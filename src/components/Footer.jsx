import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-8">
            Stay updated with our latest news and events. Enter your email below
            to subscribe.
          </p>

          {subscribed ? (
            <p className="text-green-400 font-semibold">
              Thank you for subscribing!
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col md:flex-row justify-center items-center gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-3 rounded-lg border-2 border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                required
              />
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-12 items-center">
          <div className="mb-8 md:mb-0 text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 NGO Street, City, Country</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: contact@leau.org</p>
          </div>

          <div className="mb-8 md:mb-0 text-center justify-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/donate#donate" className="hover:underline">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/volunteer#volunteer" className="hover:underline">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 text-center justify-center">
            <Link to="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={25} />
            </Link>
          </div>
        </div>

        <div className="text-center text-gray-400">
          <p>
            Copyright &copy; {new Date().getFullYear()} LEAU. All rights
            reserved.
          </p>
        </div>
        <div className="absolute right-7 bottom-2">
          <a href="#header">
            <HiChevronDoubleUp color="#fff" size={27} title="To Top" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
