import { useState } from "react";
import Divider from "./Divider";
import { FaTimes } from "react-icons/fa";

const DonateForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [amount, setAmount] = useState("");

  const handleClick = (e) => {
    setAmount(e.target.dataset.amount);
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      alert("Please select or enter a donation amount.");
      return;
    }
    setAmount("");
    setShowPopup(true);
    console.log(`Donation amount: $${amount}`);

    // Add submission logic here, e.g., API call
  };

  const handlePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="relative py-16 bg-green-100" id="donate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Support Our Cause</h2>
        <Divider />

        <p className="text-lg text-gray-700 mb-8">
          Your donation can help make a difference in the lives of many. Every
          contribution counts!
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
            onClick={handleClick}
            data-amount="10"
          >
            $10
          </button>
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
            onClick={handleClick}
            data-amount="25"
          >
            $25
          </button>
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
            onClick={handleClick}
            data-amount="50"
          >
            $50
          </button>
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
            onClick={handleClick}
            data-amount="100"
          >
            $100
          </button>
        </div>

        <div className="flex justify-center items-center mb-8">
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Enter custom amount"
              value={amount}
              onChange={handleChange}
              className="w-48 p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              min="1"
              required
            />
            <span className="ml-3 text-lg text-gray-700">$</span>
          </form>
        </div>

        <button
          onClick={handleSubmit}
          className={`${
            showPopup &&
            "cursor-not-allowed bg-green-300 hover:bg-green-300 disabled "
          } px-8 py-4  bg-green-700 text-white text-lg font-bold rounded-lg hover:bg-green-800 focus:outline-none`}
        >
          Donate Now
        </button>
      </div>
      {showPopup && (
        <div className="absolute duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-96 max-w-96 shadow-2xl rounded z-50 bg-yellow-600 p-8 flex flex-col justify-center items-center gap-8">
          <FaTimes
            color="#000"
            size={27}
            onClick={handlePopup}
            className="absolute -right-6 -top-6 border-2 border-zinc-950 p-0.5 rounded-full cursor-pointer"
          />
          <h2 className="font-semibold text-3xl text-center">
            Thank you so much for your Donation
          </h2>

          <button
            onClick={handlePopup}
            className="px-8 py-4 bg-green-700 text-white text-lg font-bold rounded-lg hover:bg-green-800 focus:outline-none"
          >
            Donate Again
          </button>
        </div>
      )}
    </section>
  );
};

export default DonateForm;
