import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";


const OrderConfirmation = () => {
  const navigate = useNavigate();

  const orderDetails = {
    orderNumber: "#123456789",
    items: ["Fish Feed (5 bags)", "Water Pump (1 unit)"],
    paymentMethod: "BaridiMOB",
    delivery: "3-5 business days",
    total: "$550.00",
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center p-8 border-b border-gray-100">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Thank you for your order!
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Your order has been successfully placed. You will receive an email
            confirmation shortly.
          </p>
        </div>

        {/* Order Summary */}
        <div className="p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>

          <div className="divide-y divide-gray-100 text-sm sm:text-base">
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Order Number</span>
              <span className="font-medium text-gray-800">
                {orderDetails.orderNumber}
              </span>
            </div>

            <div className="flex justify-between py-2 items-start">
              <span className="text-gray-600">Items Purchased</span>
              <div className="text-right">
                {orderDetails.items.map((item, index) => (
                  <p key={index} className="font-medium text-gray-800">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium text-gray-800">
                {orderDetails.paymentMethod}
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-gray-600">Estimated Delivery</span>
              <span className="font-medium text-gray-800">
                {orderDetails.delivery}
              </span>
            </div>

            <div className="flex justify-between py-3">
              <span className="font-semibold text-gray-800">Total Amount</span>
              <span className="font-bold text-green-600">
                {orderDetails.total}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="bg-green-50 flex flex-col sm:flex-row items-center justify-center gap-4 px-8 py-6 border-t">
          <Link to="/orders-history">
            <button
                onClick={() => navigate("/order-details")}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2.5 rounded-lg transition"
              >
                View Order History
            </button>
          </Link>
          <Link to="/aquaculture/products">
            <button className="w-full sm:w-auto bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium px-5 py-2.5 rounded-lg transition">
                Continue Shopping
            </button>
          </Link>
          <button
            onClick={() => navigate("/support")}
            className="w-full sm:w-auto bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium px-5 py-2.5 rounded-lg transition"
          >
            Contact Support
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500 text-sm space-x-4">
        <span>© 2024 AquaMart. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default OrderConfirmation;
