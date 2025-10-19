import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAquaculture from "../components/HeaderAquaculture";

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    phone: "(123) 456-7890",
    address: "123 AquaTrade St",
    city: "Seaside",
    state: "California",
    zip: "90210",
    paymentMethod: "BaridiMOB",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cart/checkout/confirm")
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-8 flex justify-center">
      <HeaderAquaculture />  
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Checkout</h1>

        {/* Shipping & Billing */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Shipping & Billing Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* City, State, Zip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Zip Code
              </label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="pt-2 border-t">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Payment Method
            </h2>

            <label className="flex items-center justify-between border border-blue-400 bg-blue-50 rounded-lg p-4 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="BaridiMOB"
                  checked={formData.paymentMethod === "BaridiMOB"}
                  onChange={handleChange}
                  className="mt-1 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <p className="font-medium text-gray-800">BaridiMOB</p>
                  <p className="text-sm text-gray-500">
                    Secure and fast e-payment
                  </p>
                </div>
              </div>
              <img
                src="/images/baridimob-logo.png"
                alt="BaridiMOB"
                className="w-8 h-8 object-contain"
              />
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-5 py-2.5 rounded-lg transition"
            >
              Back to Cart
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg transition"
            >
              Complete Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
