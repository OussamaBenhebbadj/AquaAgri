import React from "react";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 px-4 mt-32">
      <AuthHeader />



      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to AquaAgri</h1>
        <p className="text-gray-600 mt-2">
          Your B2B marketplace for aquaculture and agriculture
        </p>
      </div>

      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
        {/* Onglets Login / Register */}
        <div className="flex justify-center mb-6 border-b">
          <Link
            to="/login"
            className="px-6 py-2 text-gray-500 hover:text-emerald-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 border-b-2 border-emerald-500 text-emerald-600 font-medium"
          >
            Register
          </Link>
        </div>

        {/* Formulaire Register */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
